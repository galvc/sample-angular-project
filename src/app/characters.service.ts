import { Injectable } from '@angular/core';
import { Character } from './character';
import { CHARACTERS } from './mock-characters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  team: Character[] = [null, null, null];
  characters: Character[];
  constructor() { }

  getTeam() {
    return this.team;
  }

  editCharacterName(selectedCharacter: Character, newName: string) {
    console.log('editing...');
    this.characters[selectedCharacter.id-1].name = newName;
  }

  addToTeam(index:number, character: Character) {
    console.log('added to team');
    this.team.splice(index, 1, character);
    return this.team;
  }

  getCharacters(): Character[] {
    this.characters = CHARACTERS;
    return this.characters;
  }

}