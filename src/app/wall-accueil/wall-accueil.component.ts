import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wall-accueil',
  templateUrl: './wall-accueil.component.html',
  styleUrls: ['./wall-accueil.component.scss']
})
export class WallAccueilComponent implements OnInit {
  messages: any[] = [];
  filteredMessages: any[] = [];
  currentPage: number = 1;
  messagesPerPage: number = 10;
  filterText: string = "";
  triUserText: string = "";

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchMessages();
  }

  private fetchMessages() {
    this.http.get<any>('https://pedago.univ-avignon.fr:3151/login').subscribe(
      (data) => {
        this.messages = data.messages;
        this.filteredMessages = data.messages;
      },
      (error) => {
        console.error('Error fetching messages:', error);
      }
    );
  }

  get paginatedMessages() {
    const startIndex = (this.currentPage - 1) * this.messagesPerPage;
    return this.filteredMessages.slice(startIndex, startIndex + this.messagesPerPage);
  }

  onPageChange(newPage: number) {
    this.currentPage = newPage;
  }

  applyFilter() {
    if (this.filterText.trim() === '') {
      this.filteredMessages = this.messages; // If filter is empty, show all messages
    } else {
      // Filter messages based on hashtags
      this.filteredMessages = this.messages.filter((msg: any) => {
        // Check if msg.hashtags is an array before calling some()
        return Array.isArray(msg.hashtags) && msg.hashtags.some((hashtag: string) =>
          hashtag.toLowerCase().includes(this.filterText.toLowerCase())
        );
      });
    }
  }

  applyUserTri() {
    if (this.triUserText.trim() === '') {
      this.filteredMessages = this.messages; // Si le filtre est vide, affichez tous les messages
    } else {
      // Filtrer les messages en fonction de la propriété utilisateur
      this.filteredMessages = this.messages.filter((msg: any) => {
        // Vérifiez si msg.user est une chaîne avant d'appeler toLowerCase()
        return typeof msg.createdBy === 'string' && msg.createdBy.toLowerCase().includes(this.triUserText.toLowerCase());
      });
    }
  }
  
  
}
