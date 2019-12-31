import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThongkePageRoutingModule } from './thongke-routing.module';

import { ThongkePage } from './thongke.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThongkePageRoutingModule
  ],
  declarations: [ThongkePage]
})
export class ThongkePageModule {}
