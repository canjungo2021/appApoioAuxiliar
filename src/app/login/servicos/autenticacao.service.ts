import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(httpserve : HttpClientModule) { }


  
  
 public fazerLogin(email: string, senha: string){


  alert(`E-mail: ${email} e senha: ${senha}`);
 }
}
