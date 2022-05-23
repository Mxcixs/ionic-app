import { Component, OnInit } from '@angular/core';
import { Characters } from 'src/app/interfaces/characters.interface';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  characters: Characters[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCharacters().subscribe((res) => {
      this.characters = res.results;
      console.log(this.characters);
    });
  }
}
