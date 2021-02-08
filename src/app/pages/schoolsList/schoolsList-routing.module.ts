import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchoolsListPage } from './schoolsList.page';

const routes: Routes = [
  {
    path: '',
    component: SchoolsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchoolsListPageRoutingModule {}
