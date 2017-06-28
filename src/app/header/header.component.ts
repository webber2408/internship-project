import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , Validators} from'@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registerForm = new FormGroup({
    name: new FormControl('' , Validators.required),
    email: new FormControl('' , [Validators.required , Validators.pattern('^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$')]),
    password: new FormControl('' , [Validators.required, Validators.minLength(8)]),
    contact: new FormControl('' , [Validators.required, Validators.pattern('^[0-9]{12}')])
  });
  
   loginForm = new FormGroup({
    email: new FormControl(''  , [Validators.required , Validators.pattern('^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$')]),
    password: new FormControl('' ,[Validators.required, Validators.minLength(8)])
  });

  onLogin(){
    console.log(this.loginForm.value);
  }

  onRegister(){
    console.log(this.registerForm.value);
  }
}
