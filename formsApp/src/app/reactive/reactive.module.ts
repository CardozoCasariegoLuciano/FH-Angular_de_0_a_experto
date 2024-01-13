import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicPageComponent } from './page/basic-page/basic-page.component';
import { DynamicPageComponent } from './page/dynamic-page/dynamic-page.component';
import { SwitchesPageComponent } from './page/switches-page/switches-page.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BasicPageComponent,
    DynamicPageComponent,
    SwitchesPageComponent,
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule
  ],
})
export class ReactiveModule {}
