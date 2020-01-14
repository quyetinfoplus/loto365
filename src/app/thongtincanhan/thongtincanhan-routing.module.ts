import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThongtincanhanPage } from './thongtincanhan.page';

const routes: Routes = [
  {
    path: '',
    component: ThongtincanhanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThongtincanhanPageRoutingModule {}
