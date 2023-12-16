import { Component, OnInit } from '@angular/core';
import { PublicationComponent } from '../publication/publication.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wall-accueil',
  templateUrl: './wall-accueil.component.html',
  styleUrls: ['./wall-accueil.component.scss']
})
export class WallAccueilComponent implements OnInit{

  messages : any = [];
  
  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.http.get<any>('https://pedago.univ-avignon.fr:3151/login').subscribe(
      (data) => {
        this.messages = data.messages;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

}
