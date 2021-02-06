import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocsDetailsPageRoutingModule } from './docs-details-routing.module';

import { DocsDetailsPage } from './docs-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocsDetailsPageRoutingModule
  ],
  declarations: [DocsDetailsPage]
})
export class DocsDetailsPageModule {}
