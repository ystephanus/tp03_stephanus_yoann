import { Injectable } from '@angular/core';
import { of, Subscription, Observable} from 'rxjs';
import { Article } from './dto/article';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  public postClient(){
      return "create client"
  }

  public getClient(){
    return "get client"
  }

  public postLogin(){
    return "login a user"
  }
  public getCatalogue() : Observable<Array<Article>>{
    
    const flux =  [
      {"libelle": "amazon prime", "price" : 25},
      {"libelle":"salto", "price": 40},
      {"libelle": "netflix", "price": 9},
      {"libelle": "disney+", "price": 4},  
    ]
    return of(flux);
  }
}
