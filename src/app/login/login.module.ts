import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AutenticacaoService } from './servicos/autenticacao.service';
import { LoginComponent } from './componentes/home/login.component';

const routes: Routes = [
  {
    path: '', 
    component: LoginComponent
  }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes),]
  ,
  exports: [RouterModule],
  declarations: [LoginComponent]
})
export class LoginModule { 
}
