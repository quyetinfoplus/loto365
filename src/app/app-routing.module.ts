import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../app/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'lichsu',
    loadChildren: () => import('./lichsu/lichsu.module').then( m => m.LichsuPageModule)
  },
  {
    path: 'thongke',
    loadChildren: () => import('./thongke/thongke.module').then( m => m.ThongkePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
