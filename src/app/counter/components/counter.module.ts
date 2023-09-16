import { NgModule } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

//se genero un nuevo modulo con el componente de counter

@NgModule({
  declarations:[
    CounterComponent
  ],
  exports:[
    CounterComponent
  ]
})
export class CounterModule{}
