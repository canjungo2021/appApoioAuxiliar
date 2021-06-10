import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './404/page-not-found.component';
import { PaginaInicialComponent } from './paginaInicial/pagina-inicial.component';
import { SignupComponent } from './signup/signup.component';
import { UploadComponent } from './upload/upload.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: PaginaInicialComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'upload', component : UploadComponent},
  {path: 'login', component: LoginComponent},
  //pedidos sem mapaemento são direcionados ao route 404 - este route DEVE ser o último
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 
})


export class AppRoutingModule { }
