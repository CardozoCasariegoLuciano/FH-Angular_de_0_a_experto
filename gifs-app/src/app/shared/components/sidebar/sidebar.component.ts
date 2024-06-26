import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private gifService: GifsService) {}

  get getHistory() {
    return this.gifService.tagHistory;
  }

  search(index: number) {
    const tag = this.getHistory[index];
    this.gifService.addTag(tag);
  }
}
