import { Component } from '@angular/core';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { RoleDetailCardComponent } from '../role-detail-card/role-detail-card.component';
import {CommonModule} from '@angular/common';
import {RouterModule,RouterLinkActive,RouterOutlet} from '@angular/router'
@Component({
  selector: 'app-role-detail',
  standalone: true,
  imports: [TopNavComponent,RoleDetailCardComponent,CommonModule,RouterModule,RouterLinkActive,RouterOutlet],
  templateUrl: './role-detail.component.html',
  styleUrl: './role-detail.component.css'
})
export class RoleDetailComponent {
  employees = [
    {
      Profilepicture: '/assets/employee-avatar/avatar-1.svg',
      Name: 'John Doe',
      Email: 'john.doe@example.com',
      LocationName: 'New York',
      DepartmentName: 'Engineering',
      RoleName: 'Software Engineer',
      Id: 'TZ0021',
      JoiningDate: '2021-01-15'
    },
    {
      Profilepicture: '/assets/employee-avatar/avatar-2.svg',
      Name: 'Jane Smith',
      Email: 'jane.smith@example.com',
      LocationName: 'San Francisco',
      DepartmentName: 'Marketing',
      RoleName: 'Marketing Manager',
      Id: 'TZ0123',
      JoiningDate: '2020-07-22'
    },
    {
      Profilepicture: '/assets/employee-avatar/avatar-3.svg',
      Name: 'Alice Johnson',
      Email: 'alice.johnson@example.com',
      LocationName: 'Chicago',
      DepartmentName: 'Finance',
      RoleName: 'Accountant',
      Id: 'TZ1111',
      JoiningDate: '2019-03-30'
    } 
  ]; 
}
