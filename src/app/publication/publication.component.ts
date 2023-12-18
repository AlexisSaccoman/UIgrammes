import { Component, Input, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit{

  @Input() msg: any;
  comments: any[] = [];
  commentText: string = "";
  likesNumber: any;
  isLiked: boolean = false;


  constructor(private webSocketService: WebSocketService) {}

  ngOnInit(): void {
    this.comments = this.msg.comments;
    this.likesNumber = this.msg.likes;
  }

  toggleLike() {
    const previousLikesNumber = this.likesNumber;
    if(this.isLiked == false){
      this.webSocketService.emit('like', { postId: this.msg._id, likesNumber: this.likesNumber+1 });
      this.likesNumber += 1;
      this.isLiked = true;
    }else{
      this.webSocketService.emit('like', { postId: this.msg._id, likesNumber: this.likesNumber-1 });
      this.likesNumber -= 1;
      this.isLiked = false;
    }
  }

  // Fonction qui retourne la date du jour sous le format : XX/XX/XXXX
  private getCurrentDate(): string {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
  }

  // Fonction qui retourne l'heure actuelle sous le format : XX:XX
  private getCurrentTime(): string {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours}:${minutes}`;
  }
  

  addComment() {
    if (this.commentText.trim() === '') {
      // Don't add an empty comment
      return;
    }

    const us = localStorage.getItem('bandeauData');
    let ls = "Unknown";
    if(us){
      ls = JSON.parse(us).user;
      if(ls == ""){
        ls = "Unknown";
      }
    }

    const newComment = {
      createdBy: ls, // You should replace this with the actual user information
      date: this.getCurrentDate(),
      hour: this.getCurrentTime(),
      text: this.commentText
    };
    this.comments.push(newComment); // push to the comments table
    this.webSocketService.emit('comment', { postId: this.msg._id, newComment });

    // Clear le comment text après la fin de l'ajout
    this.commentText = '';
  }


  

}
