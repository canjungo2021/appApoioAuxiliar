import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './404/page-not-found.component';
import { PageAccessGuard } from './guards/page-access.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path : '', 
    redirectTo : 'home', 
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./paginaInicial/pagina-inicial.module').then(m => m.PaginaInicialModule)
  },
  {
    path: 'signup', 
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule),
    canActivate : [PageAccessGuard]
  },
  {
    path: 'upload', 
    loadChildren: () => import('./upload/upload.module').then(m => m.UploadModule),
    canActivate : [PageAccessGuard]
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  //pedidos sem mapaemento são direcionados ao route 404 - este route DEVE ser o último
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 
})


export class AppRoutingModule { }
