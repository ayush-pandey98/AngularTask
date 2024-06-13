import { Component, Input } from '@angular/core';
import { RouterModule,RouterLinkActive,RouterOutlet,Router} from '@angular/router';

@Component({
  selector: 'app-role-card',
  standalone: true,
  imports: [RouterLinkActive,RouterModule,RouterOutlet],
  templateUrl: './role-card.component.html',
  styleUrl: './role-card.component.css'
})
export class RoleCardComponent {
  @Input() Role : any;
  constructor(private router : Router){

  }
  navigateToRoleDetail(Id: number) {
   this.router.navigate(['role-detail'],{queryParams :{id: Id}});
  }
}
 