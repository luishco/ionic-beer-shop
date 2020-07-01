import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private auth: AuthService) { }
  user: {}

  async setUserData() {
    this.user = await this.auth.retrieveUserData();
  }

  getUserData() {
    return this.user;
  }
}
