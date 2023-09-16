import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {
   public heroNames: string[] =['Spiderman', 'Iromman', 'Hulk'];
   public deleteHeroe?: string;



   removeLastHeroe(): void{
     this.deleteHeroe= this.heroNames.pop();
   }
}
