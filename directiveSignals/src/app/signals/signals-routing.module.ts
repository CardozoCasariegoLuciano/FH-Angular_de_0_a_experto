import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsLayOutComponent } from './layouts/signals-lay-out/signals-lay-out.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertiesComponent } from './pages/properties/properties.component';

const routes: Routes = [
  {
    path: '',
    component: SignalsLayOutComponent,
    children: [
      {
        path: 'counter',
        component: CounterPageComponent,
      },
      {
        path: 'user-info',
        component: UserInfoPageComponent,
      },
      {
        path: 'properties',
        component: PropertiesComponent,
      },
      {
        path: '**',
        redirectTo: 'counter',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignalsRoutingModule {}
