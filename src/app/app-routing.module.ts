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
  { path: 'Blog', component: BlogComponent },
  { path: 'registro', component: RegistroUsuariosComponent },
  {
    path: 'OurCompany',
    component: OurCompanyComponent,
    children: [
      { path: '', redirectTo: 'Conocenos', pathMatch: 'full' },
      { path: 'Conocenos', component: AboutUsComponent },
      { path: 'Sobre-nosotros', component: AboutUsComponent },
      { path: 'Energia-verde', component: GreenEnergyComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
