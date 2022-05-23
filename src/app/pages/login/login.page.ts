import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user.class';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User = new User();

  constructor(
    private menuCtrl: MenuController,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.resetInput();
    this.menuCtrl.enable(false);
  }

  async onLogin() {
    const user = await this.authService.onLogin(this.user);
    if (user) {
      console.log('Usuario logged con exito!');
      setTimeout(() => {
        this.router.navigateByUrl('/home');
      }, 100);
    }
  }

  resetInput() {
    this.user.email = '';
    this.user.password = '';
  }
}
