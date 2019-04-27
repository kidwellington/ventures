import { Component, ViewChild } from '@angular/core';
import { MenuComponent } from './ventures/ui/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('menu') appMenu: MenuComponent;
  title = 'ventures';

  /**
   * Forces the close of the Menu component
   */
  public closeMenu(): void {
    this.appMenu.closeMenu();
  }
}
