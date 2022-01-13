import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PanierState } from 'shared/states/produit-state';
import {Produit} from 'shared/models/Produit'
import { AddProduit, RemoveProduct } from 'shared/actions/produit.action';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private Store: Store) { }

  ngOnInit(): void {
  }

  @Select(PanierState.countProducts) nbProduits$ : Observable<number> 
  @Select(PanierState.getProduit) produits$ : Observable<Produit[]>

  profileForm = new FormGroup({
    productName: new FormControl(''),
    price: new FormControl(''),
  });

  onSubmit(){
    var formValue = this.profileForm.value
    var produit : Produit = {name: formValue.productName, alcool: formValue.price}
    console.log(produit)
    this.Store.dispatch(new AddProduit(produit))
  }

  onDelete(product: Produit){
    this.Store.dispatch(new RemoveProduct(product));
  }

}
