import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SchoolsListPageRoutingModule } from './schoolsList-routing.module';
import { SchoolsListPage } from './schoolsList.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchoolsListPageRoutingModule
  ],
  declarations: [SchoolsListPage]
})
export class SchoolsListPageModule {}
