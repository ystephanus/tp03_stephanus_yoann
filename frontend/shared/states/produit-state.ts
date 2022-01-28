import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AddProduct, RemoveProduct } from "../actions/produit.action";
import { ProduitStateModel } from "./produit-state-model";

@State<ProduitStateModel>({
    name:'panier',
    defaults:{
        produits: []
    }
})

@Injectable()
export class PanierState {
    @Selector()
    static getProduit(state: ProduitStateModel){
        return state.produits;
    }
    @Selector()
    static countProducts(state: ProduitStateModel){
        return state.produits.length;
    }
    
    @Action(AddProduct)
    AddProduct(
        {getState, patchState}:StateContext<ProduitStateModel>, 
        {payload}: AddProduct
    ){

        const state = getState()
        patchState({
            produits: [...state.produits, payload]
        })
    }

    @Action(RemoveProduct)
    DeleteProduct(
        {getState, patchState}:StateContext<ProduitStateModel>,
        {payload}: RemoveProduct
    ){
        const state = getState()
        patchState({
            produits: state.produits.filter(produit => produit != payload)
        })
    }  


}


