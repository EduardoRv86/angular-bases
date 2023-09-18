import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteId : EventEmitter<string>= new EventEmitter();

  @Input()
  public characterList: Character[]= [
    {
      id:'',
      name: 'Krillin',
      power: 0
    }
  ];


  emitCharacter(id?: string): void{
     //TODO: Emitir el id del personaje
     if( !id ) return;
     this.onDeleteId.emit(id);

  }
}
