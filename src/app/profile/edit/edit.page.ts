import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  user: {}
  editForm: FormGroup
  editError: string

  constructor(private fb: FormBuilder, private userService: UserService, private auth: AuthService) {
    this.editForm = fb.group({
      name: [''],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      cpf: ['', Validators.compose([Validators.required, Validators.minLength(11)])],
      address: ['']
    });  
  }
  
  editUser() {
    let data = this.editForm.value;
    
    this.auth.updateProfile({
      name: data.name,
      cpf: data.cpf,
      address: data.address,
      photoUrl: null
    }, '', false)

    this.userService.setUserData();
  }

  ngOnInit() {
    this.user = this.userService.getUserData();
  }

}
