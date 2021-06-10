import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.sass']
})
export class PaginaInicialComponent implements OnInit {

  constructor() { }

  private diasSemana = [
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira"
  ]


  public diasSemana_method() {
    return this.diasSemana;
  }

  ngOnInit(): void {
  }

}
