import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObsPageRoutingModule } from './obs-routing.module';

import { ObsPage } from './obs.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: ObsPage }])
  ],
  declarations: [ObsPage]
})
export class ObsPageModule {}
