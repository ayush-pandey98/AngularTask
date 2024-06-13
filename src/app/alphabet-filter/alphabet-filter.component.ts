import { Component, EventEmitter, Output } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-alphabet-filter',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './alphabet-filter.component.html',
  styleUrl: './alphabet-filter.component.css'
})
export class AlphabetFilterComponent {
  alphabets: string[];

  constructor() {
    this.alphabets = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));
  }
  selectedAlphabet: string = '';

  @Output() alphabetSelected = new EventEmitter<string>();

  onAlphabetButtonClick(alphabet: string): void {
    this.selectedAlphabet = alphabet;
    this.alphabetSelected.emit(this.selectedAlphabet);
  }
}
