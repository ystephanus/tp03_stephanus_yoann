import { Voiture } from "../models/Voiture";

export class AddProduct{
    static readonly type='Add';

    constructor(public payload:Voiture){}
}

export class RemoveProduct{
    static readonly type='Remove';
    constructor(public payload:Voiture){}
}