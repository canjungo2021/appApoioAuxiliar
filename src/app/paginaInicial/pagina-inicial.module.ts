import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './components/home/pagina-inicial.component';

const routes: Routes = [
  {
    path: '', 
    component: PaginaInicialComponent
  },  
  {
    path: 'feed',
    loadChildren: () => import('../paginaInicial/components/feed/feed.module').then(m => m.FeedModule)
  },
  {
    path: 'turmas',
    loadChildren: () => import('../paginaInicial/components/turmas/turmas.module').then(m => m.TurmasModule)
  }  
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ],
  exports : [
    RouterModule
  ]
  
})
export class PaginaInicialModule { }
