import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhantichPageRoutingModule } from './phantich-routing.module';

import { PhantichPage } from './phantich.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhantichPageRoutingModule
  ],
  declarations: [PhantichPage]
})
export class PhantichPageModule {}
