import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { HomeComponent } from './home/home.component';
import { NgxsModule } from '@ngxs/store';
import { PanierState } from 'shared/states/produit-state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'
import {MatSliderModule} from '@angular/material/slider';
import { UserFormComponent } from './user-form/user-form.component';
import { UserRecapComponent } from './user-recap/user-recap.component';
import { ErrorsDirective } from './errors.directive'

const routes : Routes=[
  {path: 'catalogue', component: CatalogueComponent},
  { path: 'panier', loadChildren: () => import('./mod-panier/mod-panier.module').then(m => m.ModPanierModule)},
  { path: 'client', loadChildren: () => import('./mod-client/mod-client.module'). then(m => m.ClientModule)},
  {path: 'catalogue/:id', component: DetailProductComponent},
  { path: 'home', component: HomeComponent},
  {path: 'user', component: UserFormComponent},
  { path: '', redirectTo: '/catalogue', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailProductComponent,
    CatalogueComponent,
    UserFormComponent,
    UserRecapComponent,
    ErrorsDirective,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgxsModule.forRoot([PanierState]),
    BrowserAnimationsModule,
    MatIconModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
