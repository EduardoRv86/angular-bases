import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-main-page',
  templateUrl: './main-page.component.html' //path relativo de donde se encuentra
})

export class MainPageComponent{
  constructor( private dbzService:DbzService ){}


  get character():Character[]{
    return [...this.dbzService.character];
  }

  onDeleteCharacter(id: string): void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character):void{
   this.dbzService.addNewCharacter(character);
  }

}
