import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogComponent } from './dialog/dialog.component';
import { UserService } from './service/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'user-management-system';
  
  displayedColumns: string[] = ['name', 'email', 'role', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private userService: UserService) {
    
  }

  ngOnInit(): void {
      this.getAllUsers();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
       width: '30%'
    }).afterClosed().subscribe(save => {
      if(save === 'save'){
        this.getAllUsers();
      }
    });
  } ;

  getAllUsers(){
    this.userService.getUser().subscribe({
      next:(res) => {
        this.dataSource = new MatTableDataSource(res)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
  };

  editUser(row: any){
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: row
   }).afterClosed().subscribe(save => {
    if(save === 'update'){
      this.getAllUsers();
    }
  });;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  };

  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(data => {
      this.getAllUsers();
    })
  }
}






