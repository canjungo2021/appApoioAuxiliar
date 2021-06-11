import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { AutenticacaoService } from '../../servicos/autenticacao.service';
import { Utilizador } from '../../classes/utilizador';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  //loginForm  : FormGroup;

  constructor() { }

  ngOnInit() {
    /*
    this.loginForm = new FormGroup(
      {
        username : new FormControl('', [Validators.required, Validators.name]),
        senha : new FormControl('', [Validators.required, Validators.minLength(6)]),
      }
    )
    */
  }

  
  fazerLogin(){
   
  }
}
