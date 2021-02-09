import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileEnrolledQuizzesPageRoutingModule } from './enrolled-quizzes-routing.module';

import { ProfileEnrolledQuizzesPage } from './enrolled-quizzes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileEnrolledQuizzesPageRoutingModule
  ],
  declarations: [ProfileEnrolledQuizzesPage]
})
export class ProfileEnrolledQuizzesPageModule {}