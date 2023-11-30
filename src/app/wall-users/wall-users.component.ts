import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-wall-users',
  templateUrl: './wall-users.component.html',
  styleUrls: ['./wall-users.component.scss']
})
export class WallUsersComponent implements OnInit{

  users: any[] = [];
  statut : string = "";
  socket: any;

  //webSocket : WebSocketService;

  /*constructor(private _webSocket : WebSocketService){
    // Appel du service webSocketService
    this.webSocket = _webSocket;
  }*/

  constructor(){
    // Connexion au serveur pour mise en place webSocket
    this.socket = io('https://pedago.univ-avignon.fr:3151');
  
    // Ajoutez un log ici pour vérifier la connexion
    console.log('Connexion WebSocket établie.');
  }

  /*ngOnInit(): void {
    this.webSocket.listen('userList').subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }*/

  ngOnInit(): void {

    this.socket.on('error', (error: any) => {
      console.error('WebSocket Error:', error);
    });

    this.socket.on('userList', (data: any) => {
      this.users = data;
      console.log("Data received : ");
      console.log(data);
    })
  }

}
