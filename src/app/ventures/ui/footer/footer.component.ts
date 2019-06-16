import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'contentful';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() footer: Entry<any>;
  public show2: boolean;

  constructor(private cookieService: CookieService) {
    this.show2 = false;
  }

  toggle2(event: any) {
    if (event.target.id === 'eng') {
      if (this.cookieService.check('locale')) {
        this.cookieService.delete('locale');
      }
      this.cookieService.set('locale', 'en-US', 365, '/ventures');
      window.location.reload();
    }
    else if (event.target.id === 'nep') {
      if (this.cookieService.check('locale')) {
        this.cookieService.delete('locale');
      }
      this.cookieService.set('locale', 'ne', 365, '/ventures');
      window.location.reload();
    }
    else if (event.target.id === 'spa') {
      if (this.cookieService.check('locale')) {
        this.cookieService.delete('locale');
      }
      this.cookieService.set('locale', 'es-US', 365, '/ventures');
      window.location.reload();
    }
    this.show2 = !this.show2;
    event.stopPropagation();
  }
  
  closeMenu(): void {
    this.show2 = false;
  }
  ngOnInit() {
  }

}