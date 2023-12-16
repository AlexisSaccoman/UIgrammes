import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{
  statut : string = "";
  identifiant : string = "";
  
  @Input() user: any;

  constructor(){

  }

  ngOnInit(): void {
    this.identifiant = this.user.identifiant;  
    if(this.user.statut_connexion == 1){
      this.statut = `Online`;
    }else{
      this.statut = `Offline`;
    }
  }
}