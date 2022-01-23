import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddProduct, RemoveProduct } from 'shared/actions/produit.action';
import { Voiture } from 'shared/models/Voiture';


@Injectable({
  providedIn: 'root'
})
export class StorePanier {

  constructor(private Store: Store) { }

  addToBasket(v: Voiture){
    this.Store.dispatch(new AddProduct(v));
  }

  deleteToBasket(v: Voiture){
    this.Store.dispatch(new RemoveProduct(v));
  }


}
