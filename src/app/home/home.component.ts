import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { BandeauNotifComponent } from '../bandeau-notif/bandeau-notif.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  login: string = "";
  password: string = "";

  bandeauData = {
    msg : "",
    user : "",
  };
  

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    localStorage.setItem("bandeauData", JSON.stringify(this.bandeauData));
  }

  onSubmit() {
    // Valeurs de login et password
    const logVal = this.login;
    const pwVal = this.password;

    // Création des paramètres de la requête
    const params = new HttpParams()
      .set('login', logVal)
      .set('password', pwVal)

    // Envoi de la requête HTTP pour vérifier les identifiants de connexion donnés
    this.http.get('https://pedago.univ-avignon.fr:3151/login', { params }).subscribe(
      (response: any) => {
        const data = response.message;
        
        if (data == "ok") {
          // on enregistre dans le local storage le message du bandeau
          this.bandeauData.msg = "Welcome back " + logVal;
          this.bandeauData.user = logVal;
          localStorage.setItem("bandeauData", JSON.stringify(this.bandeauData));

          // infosS est un tableau temporaire pour assigner les données dans le local storage
          const infosS = {
            user : logVal,
            last_co : response.last_co,
          }

          // on met à jour les valeurs user et last_co de la session
          localStorage.setItem("infosSession", JSON.stringify(infosS));
          localStorage.setItem("bandeauData", JSON.stringify(this.bandeauData));

          //! test de déboguage
          console.log(localStorage.getItem("bandeauData"));
          console.log(localStorage.getItem("infosSession"));
          
          // on navigue vers la bonne route Angular
          this.router.navigate(['login']);
        }else{
          this.bandeauData.msg = "Authentification error";
          console.log("MSG bandeau : " + JSON.stringify(this.bandeauData));
          localStorage.setItem("bandeauData", JSON.stringify(this.bandeauData));
        }
      },
      (error) => {
        this.bandeauData.msg = "Request error";
        localStorage.setItem("bandeauData", JSON.stringify(this.bandeauData));
        console.error('Erreur de la requête :', error);
      }
    );
  }

  
}