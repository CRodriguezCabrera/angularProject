import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormInterface } from '../../models/aboutModel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public userForm!: FormGroup
  public submitted: boolean = false;
   constructor(private formBuilder: FormBuilder) { 
     /* this.getForm() */
     this.userForm = this.formBuilder.group({
       name: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3), Validators.pattern("[a-zA-Z ]*")]],
       country:['', [Validators.maxLength(20), Validators.minLength(3), Validators.pattern("[a-zA-Z ]*")]],
       password: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(6), Validators.pattern("[A-Za-z0-9]+")]],
       repPassword: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(6), Validators.pattern("[A-Za-z0-9]+")]],
     });
   }
 
   ngOnInit(): void {}
 
   public onSubmit(): void{
     this.submitted = true;
     if (this.userForm.valid) {
       const user: FormInterface = {
         name: this.userForm.get('name')?.value,
         country:this.userForm.get('country')?.value,
         password: this.userForm.get('password')?.value,
         RepPassword: this.userForm.get('repPassword')?.value,
       };
       console.log(user);
       this.userForm.reset();
       this.submitted = false;
     }
   }
 
  /*  /* public getForm()  {this.userForm = this.formBuilder.group({
     name: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3), Validators.pattern("[a-zA-Z ]*")]],
     country:['', [Validators.maxLength(20), Validators.minLength(3), Validators.pattern("[a-zA-Z ]*")]],
     password: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(6), Validators.pattern("[A-Za-z0-9]+")]],
     passwordRepeat: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(6), Validators.pattern("[A-Za-z0-9]+")]],
   });} */
} 
  