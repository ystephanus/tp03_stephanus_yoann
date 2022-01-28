import {Adresse} from 'shared/models/Adresse'

export namespace addrAction{
    export class AddAddress{
        static readonly type : '[Adress] add'
        constructor(public payload: Adresse){}
    }
    
    export class Remove{
        static readonly type : '[Adress] remove address'
        constructor(public payload: Adresse){}
    }
}