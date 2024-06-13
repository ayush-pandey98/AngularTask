import { Component } from '@angular/core';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { DescriptionComponent } from '../description/description.component';
import { FiltersComponent } from '../filters/filters.component';
import { TableComponent } from '../table/table.component';
@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [TopNavComponent,DescriptionComponent,FiltersComponent,TableComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css'
})
export class MainSectionComponent {
  selectedAlphabet : string = '';
  employees = [
    {
      Profilepicture: '/assets/employee-avatar/avatar-1.svg',
      Name: 'John Doe',
      Email: 'john.doe@example.com',
      Location: 'New York',
      Department: 'Engineering',
      Role: 'Software Engineer',
      Id: 'TZ0021',
      JoiningDate: '2021-01-15'
    },
    {
      Profilepicture: '/assets/employee-avatar/avatar-2.svg',
      Name: 'Jane Smith',
      Email: 'jane.smith@example.com',
      Location: 'San Francisco',
      Department: 'Marketing',
      Role: 'Marketing Manager',
      Id: 'TZ0123',
      JoiningDate: '2020-07-22'
    },
    {
      Profilepicture: '/assets/employee-avatar/avatar-3.svg',
      Name: 'Alice Johnson',
      Email: 'alice.johnson@example.com',
      Location: 'Chicago',
      Department: 'Finance',
      Role: 'Accountant',
      Id: 'TZ1111',
      JoiningDate: '2019-03-30'
    } 
  ]; 
  onAlphabetSelection(alphabet : string){
     this.selectedAlphabet = alphabet;
  }
}
