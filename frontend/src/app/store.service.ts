import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddProduct, RemoveProduct } from 'shared/actions/produit.action';
import { Voiture } from 'shared/models/Voiture';


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private store: Store) { }

  public addToBasket(v: Voiture){
    return this.store.dispatch(new AddProduct(v));
  }

  public deleteToBasket(v: Voiture){
    return this.store.dispatch(new RemoveProduct(v));
  }
}
