import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  bandeauData = {
    msg : "",
    user : "",
  };

  infosSession = {
    user : "",
    last_co : "",
  }

  constructor(){

  }

  ngOnInit(){
    localStorage.setItem("bandeauData", JSON.stringify(this.bandeauData));
    localStorage.setItem("infosSession", JSON.stringify(this.infosSession));
  }
}