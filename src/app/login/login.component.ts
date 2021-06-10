import { Component, OnInit } from '@angular/core';
import { AuteService } from './aute.service';
import { Utilizador } from './utilizador';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  private utilizador: Utilizador = new Utilizador();
  constructor(private auteService: AuteService) { }

  ngOnInit(): void {
  }
  fazerLogin(){
    console.log(this.utilizador.nome);
  }
}
