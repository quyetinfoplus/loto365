import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThongtincanhanPageRoutingModule } from './thongtincanhan-routing.module';

import { ThongtincanhanPage } from './thongtincanhan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThongtincanhanPageRoutingModule
  ],
  declarations: [ThongtincanhanPage]
})
export class ThongtincanhanPageModule {}
