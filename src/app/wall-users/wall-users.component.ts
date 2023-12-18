import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
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

  //constructor(private http: HttpClient) {}
  //constructor(private http: HttpClient, private webSocketService: WebSocketService) {}
  constructor(private http: HttpClient, private webSocketService: WebSocketService, private cdRef: ChangeDetectorRef) {}

  

  trackByUserId(index: number, user: any): string {
    return user.id; // Remplacez par la propriété unique de l'utilisateur
  }

  updateUsers(updatedUsers: any[]): void {
    updatedUsers.forEach(updatedUser => {
      const userToUpdate = this.users.find(user => user.id === updatedUser.id);
  
      if (userToUpdate) {
        if(userToUpdate != updatedUser){
          // Mettre à jour l'utilisateur existant
          Object.assign(userToUpdate, updatedUser);
          console.log("user to update is");
        }
      } else {
        // Ajouter l'utilisateur s'il n'existe pas encore
        this.users.push(updatedUser);
      }
    });
  
    // Mettre à jour l'affichage
    this.cdRef.detectChanges();
  }
  
  

  /*ngOnInit(): void {
    this.http.get<any[]>('https://pedago.univ-avignon.fr:3151/users').subscribe(
      (data) => {
        console.log(data);
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }*/

  ngOnInit(): void {
    // Initialiser la liste des utilisateurs
    this.http.get<any[]>('https://pedago.univ-avignon.fr:3151/users').subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );

    // Écouter les mises à jour côté serveur via WebSocket
    this.webSocketService.listen('refreshUsers').subscribe((toUp: any[]) => {
      console.log("refresh des users");
      this.updateUsers(toUp);
    });
  }


}
