import { Component } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(private charServ: CharactersService) {}

  onDelete(index: number) {
    this.charServ.delete(index);
  }

  onAddCharacter(char: Character) {
    this.charServ.addCharacter(char);
  }
}
