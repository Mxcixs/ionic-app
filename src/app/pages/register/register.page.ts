import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user.class';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
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

  async onRegister() {
    const user = await this.authService.onRegister(this.user);
    if (user) {
      console.log('Usuario creado con exito!');
      this.router.navigateByUrl('/home');
    }
  }

  resetInput() {
    this.user.email = '';
    this.user.password = '';
  }
}
