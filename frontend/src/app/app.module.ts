import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { PanierComponent } from './panier/panier.component';
import { NgxsModule } from '@ngxs/store';
import { PanierState } from 'shared/states/produit-state';

const routes : Routes=[
  { path: 'home', component:  HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'client', 
  loadChildren: () => import('./mod-client/client.module'). then(m => m.ClientModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanierComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgxsModule.forRoot([PanierState]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
