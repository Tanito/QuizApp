import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrgsPageRoutingModule } from './orgs-routing.module';

import { OrgsPage } from './orgs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrgsPageRoutingModule
  ],
  declarations: [OrgsPage]
})
export class OrgsPageModule {}
