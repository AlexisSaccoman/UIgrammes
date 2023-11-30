import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifService {
  private messageSubject = new Subject<string>();

  constructor() {
    // Écoutez les changements dans le localStorage
    window.addEventListener('storage', (event) => {
      if (event.key === 'bandeauData') {
        if(event.newValue){
          this.messageSubject.next(event.newValue);
        }
      }
    });
  }

  getMessageObservable() {
    return this.messageSubject.asObservable();
  }

}
