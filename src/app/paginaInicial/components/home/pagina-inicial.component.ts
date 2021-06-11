import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.sass']
})
export class PaginaInicialComponent implements OnInit {

  constructor(private router : Router) { }

  
  ngOnInit(): void {
  }

  // ---- métodos de navegação ----

  public vaiParaLogin() {
    this.router.navigateByUrl('/login')
  }

  public vaiParaFeed() {
    this.router.navigateByUrl('home/feed');
  }

  public vaiParaTurmas() {
    this.router.navigateByUrl('home/turmas');
  }



}
