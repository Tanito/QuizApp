import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SchoolsListPageRoutingModule } from './schoolsList-routing.module';
import { SchoolsListPage } from './schoolsList.page';
import { DocsItemComponent } from 'src/app/components/docs-item/docs-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchoolsListPageRoutingModule
  ],
  declarations: [SchoolsListPage, DocsItemComponent]
})
export class SchoolsListPageModule {}
