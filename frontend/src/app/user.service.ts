import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Article } from './models/Article';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private httpClient: HttpClient) {}

  public postClient(){
      return "create client"
  }

  public getClient(){
    return "get client"
  }

  public postLogin(){
    return "login a user"
  }
  public getCatalogue() : Observable<Article[]>{
    
    return this.httpClient
      .get<Article[]>(environment.baseUrl)  
  }
}
