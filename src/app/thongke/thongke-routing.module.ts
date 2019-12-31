import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThongkePage } from './thongke.page';

const routes: Routes = [
  {
    path: '',
    component: ThongkePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThongkePageRoutingModule {}
