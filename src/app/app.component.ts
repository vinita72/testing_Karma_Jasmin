import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  contactForm!:FormGroup;
  contact={
    username:'',
    password:''
  };
  submitted=false;
  constructor() { 
    this.creatForm();
  }
  creatForm():void {

this.contactForm = new FormGroup({
'username': new FormControl(this.contact.username,[
  Validators.required,
  Validators.minLength(4)
]),
'password': new FormControl(this.contact.password,[
  Validators.required,
  Validators.minLength(4)
]),

});    
  }

  onSubmit():void{
  this.submitted = true;
}

  
}
