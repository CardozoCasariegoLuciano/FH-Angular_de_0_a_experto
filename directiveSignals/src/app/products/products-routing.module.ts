import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProducPageComponent } from './pages/produc-page/produc-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ProducPageComponent },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
