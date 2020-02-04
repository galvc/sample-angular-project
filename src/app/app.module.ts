import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CharacterSelectionComponent } from './character-selection/character-selection.component';

import { AppRoutingModule }     from './app-routing.module';
import { CharactersService } from './characters.service';
import { EditCharacterComponent } from './edit-character/edit-character.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, DashboardComponent, CharacterSelectionComponent, EditCharacterComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CharactersService]
})
export class AppModule { }
