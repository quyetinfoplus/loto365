import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhantichPage } from './phantich.page';

const routes: Routes = [
  {
    path: '',
    component: PhantichPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhantichPageRoutingModule {}
