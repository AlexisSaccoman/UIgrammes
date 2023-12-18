import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private router: Router, private http : HttpClient) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
    this.http.get('https://pedago.univ-avignon.fr:3151'+route,).subscribe(
      (response: any) => {
        console.log();
      },
      (error) => {
        console.error('Erreur de la requête :', error);
      }
    );
  }

  logout(): void {
    this.http.get('https://pedago.univ-avignon.fr:3151/logout').subscribe(
      (response: any) => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Erreur de la requête :', error);
      }
    );
  }


}