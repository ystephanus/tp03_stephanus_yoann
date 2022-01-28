import { Voiture } from "../models/Voiture";

export class AddProduct{
    static readonly type='[Product] add product';
    constructor(public payload:Voiture){}
}

export class RemoveProduct{
    static readonly type='[Product] remove product';
    constructor(public payload:Voiture){}
}