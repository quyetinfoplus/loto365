import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KetquaPageRoutingModule } from './ketqua-routing.module';

import { KetquaPage } from './ketqua.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KetquaPageRoutingModule
  ],
  declarations: [KetquaPage]
})
export class KetquaPageModule {}
