import { Component,Input } from '@angular/core';
import {CommonModule} from '@angular/common'
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  sortDirection = 'asc';
  @Input() employees : any;
  
  ngOnInit() {
    
  }

  sortTable(column: string) {
 
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    
  }

  toggleAllCheckboxes(event: any) {
    
  }

  toggleDeleteButton(event: any) {
    
  }

  deleteSelectedEmployee() {
    
  }

  viewDetails(IdNo: string) {
   
  }

  editEmployee(IdNo: string) {
    
  }

  deleteEmp(IdNo: string) {
    
  }

  ellipsesShow(event: any) {
   
  }
}
