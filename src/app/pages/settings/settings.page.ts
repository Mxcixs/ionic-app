import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/services/main.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  darkMode: boolean = true;

  constructor(private mainService: MainService) {
    this.darkMode = this.mainService.darkMode;
    console.log(this.darkMode);
  }

  ngOnInit() {}

  // toggle(event: any) {
  //   console.log(event);
  //   if (event) {
  //     document.body.setAttribute('color-theme', 'dark');
  //   } else {
  //     document.body.setAttribute('color-theme', 'light');
  //   }
  // }

  toggle() {
    this.mainService.darkMode = this.darkMode;
    console.log(this.mainService);
    console.log(this.darkMode);
    if (this.darkMode == true) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }
}
