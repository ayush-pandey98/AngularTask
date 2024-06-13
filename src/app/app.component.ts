import { Component } from '@angular/core';
import { RouterOutlet,RouterLinkActive,RouterModule,RouterLink } from '@angular/router';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { MainSectionComponent } from './main-section/main-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LeftNavComponent,MainSectionComponent,RouterLinkActive,RouterModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmployeeApp';
}
