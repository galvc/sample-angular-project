import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CHARACTERS } from '../mock-characters'
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  characters = CHARACTERS;
  team;
  index;
  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.getTeam();
  }

  getTeam() {
    this.team = this.charactersService.getTeam();
    console.log(JSON.stringify(this.team));
  }

}