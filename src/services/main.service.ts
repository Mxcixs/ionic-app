import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Menu } from 'src/app/interfaces/menu.interface';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  darkMode: boolean;
  constructor(private http: HttpClient) {}

  getMenuOptions() {
    return this.http.get<Menu[]>('/assets/fakeData/menu.json');
  }
}
