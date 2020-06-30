import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup
  registerError: string

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { 
    this.registerForm = fb.group({
      name: [''],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      cpf: ['', Validators.compose([Validators.required, Validators.minLength(11)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      checkbox: [true, Validators.compose([Validators.pattern('true')])]
    });  
  }

  signUp() {
    let data = this.registerForm.value;
    
    let credentials = {
      email: data.email,
      password: data.password,
      cpf: data.cpf,
      name: data.name
    };

    this.auth.signUp(credentials).then(
      () => this.router.navigateByUrl('/home'),
      error => this.registerError = error.message
    );
  }

  ngOnInit() {
  }

}
