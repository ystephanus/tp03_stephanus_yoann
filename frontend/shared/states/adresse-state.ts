import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext} from "@ngxs/store";
import { addrAction } from "shared/actions/adresse.action";
import { AdresseStateModel } from "./adresse-state-model";


@State<AdresseStateModel>({
    name: 'adresse',
    defaults:{
        adresses : []
    }
})

@Injectable()
export class AdresseState{
    @Selector()
    static getAdress(state: AdresseStateModel){
        return state.adresses;
    }
    @Selector()
    static countAdress(state: AdresseStateModel){
        return state.adresses.length;
    }

    @Action(addrAction.AddAddress)
    AddProduct(
        {getState, patchState}:StateContext<AdresseStateModel>, 
        {payload}: addrAction.AddAddress
    ){

        const state = getState()
        patchState({
            adresses: [...state.adresses, payload]
        })
    }

    /*@Action(RemoveProduct)
    DeleteProduct(
        {getState, patchState}:StateContext<ProduitStateModel>,
        {payload}: RemoveProduct
    ){
        const state = getState()
        patchState({
            produits: state.produits.filter(produit => produit != payload)
        })
    } */ 

}