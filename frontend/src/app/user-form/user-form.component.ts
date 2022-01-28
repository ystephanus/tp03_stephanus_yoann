import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddAddress } from 'shared/actions/adresse.action';
import { Adresse } from 'shared/models/Adresse';
import { AdresseState } from 'shared/states/adresse-state';
import { StoreService } from '../store.service';



@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  profileForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    mel: new FormControl(''),
    tel: new FormControl(''),
    civilite: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });
  
  adressForm = new FormGroup({
    adresse: new FormControl(''),
    cp: new FormControl(''),
    ville:new FormControl(''),
    pays:new FormControl(''),
  });

  isValid:boolean=false;
  adresses : Adresse[];
  openAdress: boolean=false;
  
  @Select(AdresseState.countAdress) countAdresses$ : Observable<number>
  @Select(AdresseState.getAdresses) getAdresses$ : Observable<Adresse[]>


  constructor(private storeService : StoreService) { }

  ngOnInit(): void {
  }

  submitForm(){
    if(this.profileForm.valid)    
      this.isValid = true;  
    else
      this.isValid = false;
  }

  openAdresse(): void{
    this.openAdress = true;
  }

  onAdressSubmit():void{
    var address : Adresse = {
      cp:this.adressForm.get('cp').value, 
      adresse : this.adressForm.get('adresse').value, 
      ville : this.adressForm.get('ville').value, 
      pays: this.adressForm.get('pays').value
    }
    this.storeService.addAdress(address)
    this.openAdress = false;
  }
}
