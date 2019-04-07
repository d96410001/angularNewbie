import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Starcomponent } from './star.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Starcomponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    Starcomponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
