import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { MainService } from 'src/services/main.service';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private mainService: MainService,
    private screenOrientation: ScreenOrientation
  ) {
    this.iniatilizeApp();
  }

  iniatilizeApp() {
    this.platform.ready().then(() => {
      this.checkDarkTheme();
      this.lockScreenOrientation();
    });
  }

  checkDarkTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDark.matches) {
      document.body.setAttribute('color-theme', 'dark');
    }
    console.log(prefersDark.matches);
    this.mainService.darkMode = prefersDark.matches;
  }

  lockScreenOrientation() {
    this.screenOrientation.lock(
      this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY
    );
  }
}
