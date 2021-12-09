import { Component, OnInit } from '@angular/core';
import { from, interval, Observable, of, Subscription} from 'rxjs';
import {UserService} from './user.service'
import { map, filter } from 'rxjs/operators';
import { Article } from './model/article';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tp3';
  
  constructor(private service : UserService) { }
  
  myObservable = of('TODO')
  myObservable2 = from(['titi', 'toto', 'tutu'])
  myObservable3 = interval(2000);

  subscribe: Subscription; 
  subscribe2$ : Subscription
  valeur : number;
  catalogues : Observable<Array<Article>>;
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
  valuechange(event : any){
    console.log(event)
    this.catalogues = this.service.getCatalogue()
    .pipe(
      map(
        articles => 
            articles.filter(
              article => article.libelle.startsWith(this.recherche))
      ))
  }

  client : any= this.service.getClient()
}
