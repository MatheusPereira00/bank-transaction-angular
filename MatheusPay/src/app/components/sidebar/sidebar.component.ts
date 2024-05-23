import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public router = inject(Router);
  public menuService = inject(MenuService);

  selectMenu(menu: number) {
    switch (menu) {
      case 1:
        this.router.navigate(['/*']);
        break;

      case 2:
        this.router.navigate(['/wallet']);
        break;

      case 3:
        this.router.navigate(['/*']);
        break;

      case 4:
        this.router.navigate(['/*']);
        break;

      case 5:
        this.router.navigate(['/*']);
        break;

      case 100:
        localStorage.clear();
        this.router.navigate(['/login']);
        break;


      default:
        break;
    }
  }

}
