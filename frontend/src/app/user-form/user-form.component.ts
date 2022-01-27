import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  profileForm = new FormGroup({
    nom: new FormControl(''),
    prenom: new FormControl(''),
    adresse: new FormControl(''),
    cp: new FormControl(''),
    ville:new FormControl(''),
    pays:new FormControl(''),
    tel: new FormControl(''),
    mel: new FormControl(''),
    civilite: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  isValid:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    if(this.profileForm.valid)    
      this.isValid = true;  
    else
      this.isValid = false;
    
    console.log("nom")
  }

}
