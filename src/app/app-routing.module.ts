import { HomeComponent } from './home/home.component';
import { OurPoliticComponent } from './ourCompany/our-politic/our-politic.component';
import { DireccionComponent } from './opciones-usuarios/direccion/direccion.component';
import { TiempoComponent } from './opciones-usuarios/tiempo/tiempo.component';
import { HayElectricidadComponent } from './opciones-usuarios/hay-electricidad/hay-electricidad.component';
import { DondeComponent } from './opciones-usuarios/Donde/Donde.component';
import { OpcionesUsuariosComponent } from './opciones-usuarios/opciones-usuarios.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { GreenEnergyComponent } from './ourCompany/green-energy/green-energy.component';
import { AboutUsComponent } from './ourCompany/about-us/about-us.component';
import { OurCompanyComponent } from './ourCompany/ourCompany.component';
import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { MainHomeComponent } from './mainHome/mainHome.component';
import { BlogComponent } from './Blog/Blog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainHomeComponent, pathMatch: 'full' },
  { path: 'Inicio', component: HomeComponent },
  { path: 'Blog', component: BlogComponent },
  { path: 'registro', component: RegistroUsuariosComponent },
  { path: 'Conocenos', component: AboutUsComponent },
  { path: 'Nuestra-politica', component: OurPoliticComponent },
  { path: 'Energia-verde', component: GreenEnergyComponent },
  { path: 'Panel', component: DashboardComponent },
  {
    path: 'Opciones',
    component: OpcionesUsuariosComponent,
    children: [
      { path: '', redirectTo: 'Donde', pathMatch: 'full' },
      { path: 'Donde', component: DondeComponent },
      { path: 'Hay-electricidad', component: HayElectricidadComponent },
      { path: 'Tiempo', component: TiempoComponent },
      { path: 'Direccion', component: DireccionComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
