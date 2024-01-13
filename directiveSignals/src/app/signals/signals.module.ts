import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayOutComponent } from './layouts/signals-lay-out/signals-lay-out.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
  declarations: [
    SignalsLayOutComponent,
    CounterPageComponent,
    UserInfoPageComponent,
    PropertiesComponent,
    SideMenuComponent
  ],
  imports: [CommonModule, SignalsRoutingModule],
})
export class SignalsModule {}
