import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { FooterComponent } from './footer/footer.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MdbModule } from 'mdb-angular-ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import { Home2Component } from './Home2/Home2.component';
import { Home3Component } from './home3/home3.component';
import { BlogComponent } from './Blog/Blog.component';
import { MainHomeComponent } from './mainHome/mainHome.component';
import { Home4Component } from './home4/home4.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    Navbar2Component,
    FooterComponent,
      Home2Component,
      Home3Component,
      BlogComponent,
      MainHomeComponent,
      Home4Component,
      RegistroUsuariosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    MdbModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
