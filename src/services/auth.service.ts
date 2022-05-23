import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'src/app/interfaces/user.class';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLogged: any = false;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe((user) => (this.isLogged = user));
  }

  async onRegister(user: User) {
    try {
      return await this.afAuth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
    } catch (error) {
      console.log('error register', error);
    }
  }

  async onLogin(user: User) {
    try {
      return await this.afAuth.signInWithEmailAndPassword(
        user.email,
        user.password
      );
    } catch (error) {
      console.log('error login', error);
    }
  }
}
