import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Menu } from 'src/app/interfaces/menu.interface';
import { MainService } from 'src/services/main.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuOptions: Observable<Menu[]>;

  constructor(
    private mainService: MainService,
    private menuCtrl: MenuController,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {}

  menuData: Menu[] = [];

  ngOnInit() {
    this.menuOptions = this.mainService.getMenuOptions();
  }

  onLogout() {
    console.log('Sign out!');
    this.afAuth.signOut();
    this.menuCtrl.close();
    this.router.navigateByUrl('/login');
  }
}
