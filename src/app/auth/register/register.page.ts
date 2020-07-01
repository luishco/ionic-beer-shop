import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup
  registerError: string

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router, private userService: UserService) { 
    this.registerForm = fb.group({
      name: [''],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      cpf: ['', Validators.compose([Validators.required, Validators.minLength(11)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      address: [''],
      checkbox: [true, Validators.compose([Validators.pattern('true')])]
    });  
  }

  signUp() {
    let data = this.registerForm.value;
    
    let credentials = {
      email: data.email,
      password: data.password,
      cpf: data.cpf,
      name: data.name,
      address: data.address
    };

    this.auth.signUp(credentials).then(
      () => {
        this.userService.setUserData(),
        this.router.navigateByUrl('/home')
      },
      error => this.registerError = error.message
    );
  }

  ngOnInit() {
  }

}
