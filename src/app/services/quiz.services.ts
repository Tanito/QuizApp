import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

   users: User[] =[]
  
  constructor() { }

  addUser(user: User){
    this.users.push(user)
  }
}