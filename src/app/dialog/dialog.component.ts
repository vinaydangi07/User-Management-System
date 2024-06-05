import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import {MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{

  userForm!: FormGroup;
  actionBtn: string = 'Save';
  
  constructor(private formBuilder: FormBuilder, private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public editData: any,  private dialog: MatDialogRef<DialogComponent>){

  }
 
  ngOnInit(): void {
      this.userForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        role:['', Validators.required]
      });

      if(this.editData){
        this.actionBtn = 'Update'
        this.userForm.controls['name'].setValue(this.editData.name),
        this.userForm.controls['email'].setValue(this.editData.email),
        this.userForm.controls['role'].setValue(this.editData.role)

      }

  };

  adduser(){
    if(!this.editData){
      if(this.userForm.valid){
        this.userService.adduser(this.userForm.value).subscribe(data => {
          console.log(data);
          this.userForm.reset();
           this.dialog.close('save');
        })
      }
    } else {
       this.updateUserData();
    }
  };

  updateUserData(){
    this.userService.updateUser(this.userForm.value, this.editData.id).subscribe({
      next: (res)=> {
        this.userForm.reset();
        this.dialog.close('update');
      }
    })
  }
  
}


