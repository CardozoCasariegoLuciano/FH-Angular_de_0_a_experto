import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() sendCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0,
  };

  sabeCharacter() {
    this.sendCharacter.emit(this.character);
    this.character = {
      name: '',
      power: 0,
    };
  }
}
