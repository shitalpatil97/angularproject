import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // reactiveform!:FormGroup;
  
  // constructor(private formbuilder:FormBuilder){
  //   this.reactiveform=this.formbuilder.group({
  //     username: new FormControl('',Validators.compose([Validators.required,Validators.maxLength(6)])),
  //     password: new FormControl('',Validators.required),
  //     conpassword: new FormControl('',Validators.required)
  //   },{
  //     validators:this.Mustmatch('password','conpassword')
  //   })
    
  // }
  // get f(){
  //   return this.reactiveform.controls;
  // }
  // Mustmatch(password:any,conpassword:any){
  //   return(formGroup:FormGroup)=>{
  //     const passwordcontrol=formGroup.controls[password];
  //     const conpasswordcontrol=formGroup.controls[conpassword];
  //     if(conpasswordcontrol.errors && !conpasswordcontrol.errors['Mustmatch']){
  //       return
  //     }
  //     if(passwordcontrol.value!==conpasswordcontrol.value){
  //       conpasswordcontrol.setErrors({Mustmatch:true});
  //     }
  //     else{
  //       conpasswordcontrol.setErrors(null);
  //     }
  //   }
  // }
   ngOnInit(): void {
    // throw new Error('Method not implemented.');
   }
  

  }

  
 