import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AutenticacaoService } from './login/servicos/autenticacao.service';
import {ReactiveFormsModule} from '@angular/forms'

import { PageNotFoundComponent } from './404/page-not-found.component';

import { LoginComponent } from './login/componentes/home/login.component';
import { FeedComponent } from './paginaInicial/components/feed/components/feed.component';
import { TurmasComponent } from './paginaInicial/components/turmas/components/turmas.component';
import { SignupComponent } from './signup/components/signup.component';
import { UploadComponent } from './upload/components/upload.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    /////// ----- Ests compntns vão usar built-in directives ------ ///////
          FeedComponent, 
          TurmasComponent,
          SignupComponent,
          UploadComponent,
          LoginComponent
    ////// ------ end 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers:[AutenticacaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
