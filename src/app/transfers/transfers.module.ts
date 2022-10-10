import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

import { TransfersRoutingModule } from './transfers-routing.module';
import { TransfersComponent } from './transfers/transfers.component';
import { TransferFormComponent } from './transfer-form/transfer-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TransfersComponent,
    TransferFormComponent
  ],
  imports: [
    CommonModule,
    TransfersRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class TransfersModule { }
