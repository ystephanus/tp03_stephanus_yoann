import { Produit } from "../models/Produit";

export class AddProduit{
    static readonly type='[Produit] Add';

    constructor(public payload:Produit){}
}

export class RemoveProduct{
    static readonly type='[Produit] Remove';

    constructor(public payload:Produit){}
}