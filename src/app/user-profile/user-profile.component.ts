import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{
  statut : string = "";
  @Input() user: any; // Assurez-vous que la structure de votre utilisateur correspond à ce composant

  constructor(){

  }

  ngOnInit(): void {
    console.log("User : ");
    console.log(this.user);
    if(this.user.statut_connexion == 1){
      this.statut = `connected`;
    }else{
      this.statut = `disconnected`;
    }
  }
}