import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';
import { HttpClient } from '@angular/common/http';
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

  /*
  webSocket : WebSocketService;
  constructor(private _webSocket : WebSocketService){
    // Appel du service webSocketService
    this.webSocket = _webSocket;
    console.log('Connexion WebSocket établie.');
  }
  */

  constructor(private http: HttpClient) {}
  

  trackByUserId(index: number, user: any): string {
    return user.id; // Remplacez par la propriété unique de l'utilisateur
  }

  updateUsers(updatedUsers: any[]): void {
    updatedUsers.forEach(updatedUser => {
      const existingUserIndex = this.users.findIndex(user => user.id === updatedUser.id);
      if (existingUserIndex !== -1) {
        // Mettre à jour l'user existant
        this.users[existingUserIndex] = updatedUser;
      } else {
        // Ajoutez l'utilisateur s'il n'existe pas déjà
        this.users.push(updatedUser);
      }
    });
  }

  ngOnInit(): void {
    this.http.get<any[]>('https://pedago.univ-avignon.fr:3151/users').subscribe(
      (data) => {
        console.log(data);
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }


}
