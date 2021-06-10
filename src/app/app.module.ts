import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './paginaInicial/pagina-inicial.component';
import { PageNotFoundComponent } from './404/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { UploadComponent } from './upload/upload.component';
import { AuteService } from './login/aute.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    PageNotFoundComponent,
    SignupComponent,
    UploadComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
