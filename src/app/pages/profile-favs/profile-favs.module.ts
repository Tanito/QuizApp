import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileFavsPageRoutingModule } from './profile-favs-routing.module';

import { ProfileFavsPage } from './profile-favs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileFavsPageRoutingModule
  ],
  declarations: [ProfileFavsPage]
})
export class ProfileFavsPageModule {}
