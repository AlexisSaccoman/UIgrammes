import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu-none',
  templateUrl: './menu-none.component.html',
  styleUrls: ['./menu-none.component.scss']
})
export class MenuNoneComponent {
  isMenuActive = false;
  isLogoActive = true;

  constructor(private router: Router, private http: HttpClient) {}

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
    this.isLogoActive = !this.isLogoActive;
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
    this.http.get('https://pedago.univ-avignon.fr:3151' + route).subscribe(
      (response: any) => {
        console.log(response);
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
