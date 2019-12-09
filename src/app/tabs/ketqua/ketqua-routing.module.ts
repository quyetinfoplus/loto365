import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KetquaPage } from './ketqua.page';

const routes: Routes = [
  {
    path: '',
    component: KetquaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KetquaPageRoutingModule {}
