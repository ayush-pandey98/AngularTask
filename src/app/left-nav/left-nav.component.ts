import { Component } from '@angular/core';
import { UpdateBoxComponent } from '../update-box/update-box.component';
import {RouterOutlet} from '@angular/router'
import {RouterModule} from '@angular/router'
import {RouterLinkActive,Router,NavigationEnd} from  '@angular/router'
@Component({
  selector: 'app-left-nav',
  standalone: true,
  imports: [UpdateBoxComponent,RouterLinkActive,RouterModule,RouterOutlet],
  templateUrl: './left-nav.component.html',
  styleUrl: './left-nav.component.css'
})
export class LeftNavComponent {
  isRoleActive: boolean = false;
  isEmployeeActive : boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isRoleActive = this.router.isActive('role', true);
        this.isEmployeeActive = this.router.isActive('employees',true);
      }
    });
  }

}
