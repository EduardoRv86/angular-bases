import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public character: Character[]= [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9000
    }
  ];


  addNewCharacter( character: Character): void{

    character.id = uuid();
    //const newCharacter : Character = { id: uuid(), ...character};
    this.character.push(character);
  }


  deleteCharacterById(id: string){
  console.log("xx");
    this.character = this.character.filter( character => character.id !== id);
  }

  /*
  onDeleteCharacter(index : number) : void{
    debugger;
    this.character.splice(index, 1);
  }*/

  constructor() { }
}
