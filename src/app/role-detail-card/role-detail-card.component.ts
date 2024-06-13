import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-role-detail-card',
  standalone: true,
  imports: [],
  templateUrl: './role-detail-card.component.html',
  styleUrl: './role-detail-card.component.css'
})
export class RoleDetailCardComponent {
  @Input() employees : any;
}
