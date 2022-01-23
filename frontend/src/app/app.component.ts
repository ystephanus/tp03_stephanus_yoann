import { Component, OnInit } from '@angular/core';
import { from, interval, Observable, of, Subscription} from 'rxjs';
import {UserService} from './user.service'
import { map, filter } from 'rxjs/operators';
import { Voiture } from 'shared/models/Voiture';
import { StorePanier } from './store-panier.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tp3';
  
  constructor(private service : UserService, public storePanier : StorePanier) { }
  
  myObservable = of('TODO')
  myObservable2 = from(['titi', 'toto', 'tutu'])
  myObservable3 = interval(2000);

  subscribe: Subscription; 
  subscribe2$ : Subscription
  valeur : number;
  catalogues : Observable<Voiture[]>;
  recherche : string;

  
  ngOnInit(): void{
    this.subscribe = 
      this.myObservable3
      .pipe(
        filter((v) => v%2 == 0)
      )
      .subscribe((value) => this.valeur = value)

      this.catalogues = this.service.getCatalogue();
  }

  ngOnDestroy() : void{
    this.subscribe.unsubscribe()
  }


  valuechange(event: any){
    if(Number(this.recherche)){
      this.catalogues = this.service.getCatalogue()
      .pipe(
        map(
          voitures => 
              voitures.filter(
                v => v.prix > Number(this.recherche))
        ))
    }else{
      this.catalogues = this.service.getCatalogue()
      .pipe(
        map(
          voitures => 
              voitures.filter(
                v => v.marque.startsWith(this.recherche))
        ))
    }
  }

  client : any= this.service.getClient()
}
