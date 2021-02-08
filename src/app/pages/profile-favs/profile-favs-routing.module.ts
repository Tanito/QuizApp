import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileFavsPage } from './profile-favs.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileFavsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileFavsPageRoutingModule {}
