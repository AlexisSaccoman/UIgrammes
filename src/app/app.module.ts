import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BandeauNotifComponent } from './bandeau-notif/bandeau-notif.component';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { WallAccueilComponent } from './wall-accueil/wall-accueil.component';
import { MenuComponent } from './menu/menu.component';
import { PublicationComponent } from './publication/publication.component';
import { UsersComponent } from './users/users.component';
import { WallUsersComponent } from './wall-users/wall-users.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WebSocketService } from './web-socket.service';
import { PaginationComponent } from './pagination/pagination.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: AccueilComponent },
  { path : 'users', component: UsersComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccueilComponent,
    BandeauNotifComponent,
    WallAccueilComponent,
    MenuComponent,
    PublicationComponent,
    UsersComponent,
    WallUsersComponent,
    UserProfileComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    WebSocketService,
  ],
  bootstrap: [
    AppComponent,
  ],
  exports: [
  ]
})

export class AppModule { }
