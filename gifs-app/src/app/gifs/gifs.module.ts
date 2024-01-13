import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { GifCardListComponent } from './components/gif-card-list/gif-card.component';
import { GifCardComponent } from './components/gif-card/gif-card.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    SearcherComponent,
    GifCardListComponent,
    GifCardComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent],
})
export class GifsModule {}
