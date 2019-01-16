import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Credentials, User } from '../models/user';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() { }
  users = [
    {username: 'antoine', password: 'test'},
    {username: 'truong', password: 'test2'},
    {username: 'dat', password: 'test3'}
  ];
  login({ username, password }: Credentials): Observable<User> {
    let authenf = false;
    /**
     * Simulate a failed login to display the error
     * message for the login form.
     */
    for (const user of this.users) {
      if (username === user.username && password === user.password) {
        authenf = true;
      }
    }
    /*if (username !== 'truong') {
      return throwError('Invalid username or password');
    }*/
    if (authenf === false) {
      return throwError('Invalid username or password');
    }
    return of({ name: 'User' });
  }

  logout() {
    return of(true);
  }
}
