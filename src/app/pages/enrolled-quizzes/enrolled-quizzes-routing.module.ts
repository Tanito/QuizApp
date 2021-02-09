import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileEnrolledQuizzesPage } from './enrolled-quizzes.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileEnrolledQuizzesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileEnrolledQuizzesPageRoutingModule {}
