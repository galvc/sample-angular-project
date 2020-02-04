import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { CharactersService } from "../characters.service";

@Component({
  selector: "app-edit-character",
  templateUrl: "./edit-character.component.html",
  styleUrls: ["./edit-character.component.css"]
})
export class EditCharacterComponent implements OnInit {
  @Input() selectedCharacter;
  newName: string;
  editCharacterForm = new FormGroup({
    name: new FormControl("")
  });

  constructor(private charactersService: CharactersService) {}

  ngOnInit() {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.editCharacterForm.value);
    this.charactersService.editCharacterName(this.selectedCharacter, this.editCharacterForm.value.name);
    this.editCharacterForm.reset();

  }
}
