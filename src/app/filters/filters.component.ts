import { Component } from '@angular/core';
import { AlphabetFilterComponent } from '../alphabet-filter/alphabet-filter.component';
import { MultiselectFilterComponent } from '../multiselect-filter/multiselect-filter.component';
@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [AlphabetFilterComponent,MultiselectFilterComponent],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  selectedAlphabet : string = '';
  onAlphabetSelection(alphabet : string){
    this.selectedAlphabet = alphabet;
 }
 
}
