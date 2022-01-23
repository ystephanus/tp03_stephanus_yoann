import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanierComponent } from './panier/panier.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    PanierComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    PanierComponent
  ]
})
export class ModPanierModule { }
