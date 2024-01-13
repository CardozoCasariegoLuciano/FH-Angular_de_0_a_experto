import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPageComponent } from './page/basic-page/basic-page.component';
import { SwitchesPageComponent } from './page/switches-page/switches-page.component';
import { DynamicPageComponent } from './page/dynamic-page/dynamic-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'dynamic', component: DynamicPageComponent },
      { path: 'basic', component: BasicPageComponent },
      { path: 'switches', component: SwitchesPageComponent },
      { path: '**', redirectTo: 'basic' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReactiveRoutingModule {}
