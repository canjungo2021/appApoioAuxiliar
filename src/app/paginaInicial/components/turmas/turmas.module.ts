import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TurmasComponent } from './components/turmas.component';

const routes: Routes = [
  {
    path: '', 
    component: TurmasComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class TurmasModule { }
