import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AutenticacaoService } from '../../servicos/autenticacao.service';
import { HttpClientModule } from '@angular/common/http';
import { Utilizador } from '../../classes/utilizador';
import {regularExpression} from '../../../globalService/regularExpression';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  //loginForm  : FormGroup;
  naoMostrarAviso : boolean = true;


  constructor(public service: AutenticacaoService) {

    service = new AutenticacaoService(service);
  }
  ngOnInit() {

  }
  public onClick(email: string, senha: string) {
    this.naoMostrarAviso = regularExpression(email)
    if (this.naoMostrarAviso)
      this.service.fazerLogin(email, senha);
  }

}
