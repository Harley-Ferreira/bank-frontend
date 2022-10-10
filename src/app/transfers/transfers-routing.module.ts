import { TransferFormComponent } from './transfer-form/transfer-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransfersComponent } from './transfers/transfers.component';

const routes: Routes = [
  {path:'', component: TransfersComponent},
  {path:'create-transfer', component: TransferFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransfersRoutingModule { }
