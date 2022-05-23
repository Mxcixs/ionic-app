import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Characters } from 'src/app/interfaces/characters.interface';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  characterId: any;
  characterInfo: Characters[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {
    this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    console.log(this.characterId);
    this.dataService.getCharactersById(this.characterId).subscribe((res) => {
      this.characterInfo = res;
      console.log(this.characterInfo);
    });
  }
}
