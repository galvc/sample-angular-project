import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Character } from "../character";

import { Location } from "@angular/common";
import { Router } from "@angular/router";

import { CharactersService } from "../characters.service";

@Component({
  selector: "app-character-selection",
  templateUrl: "./character-selection.component.html",
  styleUrls: ["./character-selection.component.css"]
})
export class CharacterSelectionComponent implements OnInit {
  // @Input() selectedCharacter: Character;
  @Output() eventClicked = new EventEmitter<Event>();
  selectedCharacter: Character;
  characters: Character[];
  index;

  constructor(
    private charactersService: CharactersService,
    private router: Router,
    private location: Location
  ) {
    this.getCharacters();
    this.index = this.router.getCurrentNavigation().extras.state;
    console.log('cs component index: ' + this.index.index);
  }

  ngOnInit() {}

  onClick(ch: Character):void {
    this.selectedCharacter = ch;
    this.charactersService.addToTeam(this.index.index, ch);
  }

  getCharacters(): void {
    this.characters = this.charactersService.getCharacters();
  }

  goBack(): void {
    this.location.back();
  }
}
