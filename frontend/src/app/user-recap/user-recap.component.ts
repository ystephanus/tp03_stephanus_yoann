import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-recap',
  templateUrl: './user-recap.component.html',
  styleUrls: ['./user-recap.component.css']
})
export class UserRecapComponent implements OnInit {

  constructor() { }
  @Input() nom: string="";
  @Input() prenom: string ="";
  @Input() adresse: string ="";
  @Input() cp: string ="";
  @Input() ville:string="";
  @Input() pays:string="";
  @Input() tel: string="";
  @Input() mel: string="";
  @Input() civilite: string="";
  @Input() username: string="";
  @Input() password: string="";

  ngOnInit(): void {
  }

}
