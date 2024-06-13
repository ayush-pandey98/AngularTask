import { Component } from '@angular/core';
import { MultiselectFilterComponent } from '../multiselect-filter/multiselect-filter.component';
import { RoleCardComponent } from '../role-card/role-card.component';
import { CommonModule } from '@angular/common';
import { TopNavComponent } from '../top-nav/top-nav.component';
import { RouterOutlet,RouterLinkActive,RouterModule } from '@angular/router'
@Component({
  selector: 'app-role',
  standalone: true,
  imports: [MultiselectFilterComponent,RoleCardComponent,CommonModule,TopNavComponent,RouterOutlet,RouterLinkActive,RouterModule],
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
})
export class RoleComponent {
Role =[
  {
     Id : 1 ,
     Name : "Full Stack Devloper",
     Description : "He does everything",
     LocationId : "1",
     LocationName : "New York",
     DepartmentName : "Product Engineering",
     DepartmentId : "1",
     ProfilePictures : "/assets/employee-avatar/avatar-1.svg"
  }
  ,
  {
     Id : 1 ,
     Name : "Marketing Manager",
     Description : "He does marketing",
     LocationId : "1",
     LocationName : "New York",
     DepartmentName : "Marketing",
     DepartmentId : "1",
     ProfilePictures : "/assets/employee-avatar/avatar-1.svg"
  }
  ,
  {
    Id : 1 ,
    Name : "Marketing Manager",
    Description : "He does everything",
    LocationId : "1",
    LocationName : "New York",
    DepartmentName : "Marketing",
    DepartmentId : "1",
    ProfilePictures : "/assets/employee-avatar/avatar-1.svg"
  }
  ,
  {
    Id : 3,
    Name: "Customer Service Manager",
    LocationId : "1",
    LocationName : "New York",
    DepartmentName : "Marketing",
    DepartmentId : "1",
    ProfilePictures : "/assets/employee-avatar/avatar-1.svg"
  }
]
}
