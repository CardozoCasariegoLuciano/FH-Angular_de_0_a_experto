import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBoxComponent } from './components/searchBox/search-box.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SidebarComponent, SearchBoxComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, SearchBoxComponent],
})
export class SharedModule {}
