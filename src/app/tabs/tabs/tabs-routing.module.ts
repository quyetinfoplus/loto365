import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'navi',
    component: TabsPage,
    children: [
      {
        path: 'ketqua',
        children: [
          {
            path: '',
            loadChildren: () => import('../../tabs/ketqua/ketqua.module').then(m => m.KetquaPageModule)
          }
        ]
      },
      {
        path: 'theodoi',
        children: [
          {
            path: '',
            loadChildren: () => import('../../tabs/theodoi/theodoi.module').then(m => m.TheodoiPageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/navi/ketqua',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
