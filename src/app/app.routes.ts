import { Routes } from '@angular/router';
import { MainSectionComponent } from './main-section/main-section.component';
import { AddEmployeeFormComponent } from './add-employee-form/add-employee-form.component';
import { RoleComponent } from './role/role.component';
import { RoleDetailComponent } from './role-detail/role-detail.component';
import { AddRoleComponent } from './add-role/add-role.component';
export const routes: Routes = [
   {
       path:"employees",
        component : MainSectionComponent,
   },
   {
       path:'add-employee',
    component:AddEmployeeFormComponent
   },
   {
      path:"role",
      component:RoleComponent
   },
   {
      path:"role-detail",
      component:RoleDetailComponent
   },
   {
      path:"add-role",
      component: AddRoleComponent
   }
];

