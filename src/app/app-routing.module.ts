import { OpcionesEmpresasComponent } from './opciones-empresas/opciones-empresas.component';
import { ProfessionalsListComponent } from './professionals-list/professionals-list.component';
import { CompanysListComponent } from './companys-list/companys-list.component';
import { RegistroEmpresasComponent } from './registro-empresas/registro-empresas.component';
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
import { TuCuentaComponent } from './Dashboard/tu-cuenta/tu-cuenta.component';

const routes: Routes = [
  { path: '', component: MainHomeComponent, pathMatch: 'full' },
  { path: 'Inicio', component: HomeComponent },
  { path: 'Blog', component: BlogComponent },
  { path: 'registro', component: RegistroUsuariosComponent },
  { path: 'registro-empresas', component: RegistroEmpresasComponent },
  { path: 'Conocenos', component: AboutUsComponent },
  { path: 'Nuestra-politica', component: OurPoliticComponent },
  { path: 'Energia-verde', component: GreenEnergyComponent },
  {
    path: 'Panel',
    component: DashboardComponent,
  },
  { path: 'tu-cuenta', component: TuCuentaComponent },

  { path: 'lista-companias', component: CompanysListComponent },
  { path: 'lista-instaladores', component: ProfessionalsListComponent },
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
  {
    path: 'Opciones-empresas',
    component: OpcionesEmpresasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
