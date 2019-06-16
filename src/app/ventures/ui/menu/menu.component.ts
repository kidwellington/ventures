import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'contentful';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() header: Entry<any>;
  public show: boolean;
  public show2: boolean;

  @Input() lang: string;

  constructor(private cookieService: CookieService) {
    this.show = false;
  }
  toggle(event: any) {
    this.show = !this.show;
    event.stopPropagation();
  }

  closeMenu(): void {
    this.show = false;
  }
  ngOnInit() {
  }
}