import { Voiture } from "../models/Voiture";

export class AddProduit{
    static readonly type='[Produit] Add';

    constructor(public payload:Voiture){}
}

export class RemoveProduct{
    static readonly type='[Produit] Remove';

    constructor(public payload:Voiture){}
}