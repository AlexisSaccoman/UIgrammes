import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { NotifService } from '../notif.service';

@Component({
  selector: 'app-bandeau-notif',
  templateUrl: './bandeau-notif.component.html',
  styleUrls: ['./bandeau-notif.component.scss']
})
export class BandeauNotifComponent {

  Message: string = "Welcome on UIgrammes";
  isVisible: boolean = false;
  private messageSubscription: Subscription = new Subscription();

  // récupérer le message passé en json afin de l'afficher
  constructor(private http: HttpClient, private notifService: NotifService) {
  }

 
  ngOnInit(): void {

    this.isVisible = true;

    // Récupérer les données du localStorage
    const bandeauData = localStorage.getItem('bandeauData');
    const infosSession = localStorage.getItem('infosSession');

    if(bandeauData){
      if(JSON.parse(bandeauData).msg != ""){
        this.Message = JSON.parse(bandeauData).msg;
        
        // on arrive sur la page d'accueil
        if(infosSession){
          if(JSON.parse(infosSession).last_co != ""){
            this.Message += ", it's been a while since " + JSON.parse(infosSession).last_co;
          }
        }
      }
    }

    // on ne l'affiche que pour 5 secondes après on le fait disparaitre
    
    setTimeout(() => {
      this.isVisible = false;
    }, 5000); // en ms
    
  }


  /*

  ngOnInit(): void {
    // Écoutez les mises à jour de message depuis le service
    this.messageSubscription = this.notifService.getMessageObservable().subscribe((message: string) => {
      if (message) {
        const bandeauData = JSON.parse(message);
        if (bandeauData.msg) {
          this.Message = bandeauData.msg;
          this.isVisible = true; // Affichez à nouveau le bandeau
          // on ne l'affiche que pour 5 secondes après on le fait disparaitre
          setTimeout(() => {
            this.isVisible = false;
          }, 5000); // en ms
        }
      }
    });
    

    // on ne l'affiche que pour 5 secondes après on le fait disparaitre
    setTimeout(() => {
      this.isVisible = false;
    }, 5000); // en ms
  }

  ngOnDestroy() {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }
  }*/

}
