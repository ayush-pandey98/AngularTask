import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router'
import {RouterModule} from '@angular/router'
import {RouterLinkActive} from  '@angular/router'
@Component({
  selector: 'app-description',
  standalone: true,
  imports: [RouterModule,RouterLinkActive,RouterOutlet],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
exportToCsv() {

}

}
