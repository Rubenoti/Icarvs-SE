import { RegistroUsuariosComponent } from './registro-usuarios/registro-usuarios.component';
import { MainHomeComponent } from './mainHome/mainHome.component';
import { BlogComponent } from './Blog/Blog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MainHomeComponent, pathMatch: 'full' },
  { path: 'Blog', component: BlogComponent },
  { path: 'registro', component: RegistroUsuariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
