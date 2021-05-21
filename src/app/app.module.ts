import { DondeComponent } from './opciones-usuarios/Donde/Donde.component';
import { OurPoliticComponent } from './ourCompany/our-politic/our-politic.component';
import { SecondaryNavbarComponent } from './ourCompany/secondary-navbar/secondary-navbar.component';
import { GreenEnergyComponent } from './ourCompany/green-energy/green-energy.component';
import { AboutUsComponent } from './ourCompany/about-us/about-us.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MdbModule } from 'mdb-angular-ui-kit';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { Home2Component } from './Home2/Home2.component';
import { Home3Component } from './home3/home3.component';
import { BlogComponent } from './Blog/Blog.component';
import { MainHomeComponent } from './mainHome/mainHome.component';
import { Home4Component } from './home4/home4.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { HomeBlogComponent } from './Home-blog/Home-blog.component';
import { OurCompanyComponent } from './ourCompany/ourCompany.component';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { OpcionesUsuariosComponent } from './opciones-usuarios/opciones-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    Home2Component,
    Home3Component,
    BlogComponent,
    MainHomeComponent,
    Home4Component,
    RegistroUsuariosComponent,
    HomeBlogComponent,
    OurCompanyComponent,
    AboutUsComponent,
    GreenEnergyComponent,
    SecondaryNavbarComponent,
    OurPoliticComponent,
    DashboardComponent,
    OpcionesUsuariosComponent,
    DondeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    MdbModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
