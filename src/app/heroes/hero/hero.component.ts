import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public nombre : string = "ironman";
  public edad : number = 45;
  //public hiddenButtonName : boolean= true;
  //public hiddenButtonEdad : boolean = true;


  //los getter se ven igual como si fueran propiedades
  get capitalizedname() : string{
    return this.nombre.toLocaleUpperCase();
  }

   getHeroeDescription(): string{
     return `${ this.nombre } - ${ this.edad }`;  //interpolacion de string y
   }


   changeName(): void{
    //TODO
    this.nombre ="superman";
    //this.hiddenButtonName = false;
   }
   changeEdad(): void{
    this.edad =12;
    //this.hiddenButtonEdad = false;
   }

   reset():void{
     //this.nombre = "ironman";
     this.edad = 45;

     //incluir un codigo como este no entrara en el ciclo de deteccion de cambios de angular
     /*
     document.querySelectorAll('h1')!.forEach( element =>{
      element.innerHTML = '<h1> Desde Angular </h1>';
     });
     */
   }


}
