import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent, FormComponent, ListComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainComponent],
})
export class DgzModule {}
