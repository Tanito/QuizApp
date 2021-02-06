import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrgsPage } from './orgs.page';

const routes: Routes = [
  {
    path: '',
    component: OrgsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrgsPageRoutingModule {}
