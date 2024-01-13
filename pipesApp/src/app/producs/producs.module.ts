import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProducsRoutingModule } from './producs-routing.module';
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UnCommonPageComponent } from './pages/un-common-page/un-common-page.component';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { CanFltPipe } from './pipes/can-flt.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UnCommonPageComponent,
    OrderComponent,
    ToggleCasePipe,
    CanFltPipe,
    SortByPipe,
  ],
  imports: [CommonModule, PrimeNGModule, ProducsRoutingModule],
})
export class ProducsModule {}
