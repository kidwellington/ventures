import { Component, OnInit, ViewChild } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/services/contentful.service';
import { MenuComponent } from '../menu/menu.component';
import { CookieService } from 'ngx-cookie-service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.scss']
})

export class BrandingComponent implements OnInit {
  @ViewChild('menu') appMenu: MenuComponent;
  @ViewChild('footer') appfooter: FooterComponent;

  private cookieValue: any;
  public branding: Entry<any>;

  constructor(private contentfulService: ContentfulService, private cookieService: CookieService) { }

  ngOnInit() {
    this.cookieValue = this.cookieService.get('locale');
    this.contentfulService.cdaClient.getEntries({
      content_type: 'branding',
      'sys.id': '7cRcq7wEM3bM2ch2yeBqLy',
      include: 10,
      locale: this.cookieValue
    }).then(branding => {
      this.branding = branding.items[0];
      console.log('branding', this.branding);
    });
  }

  public closeMenu(): void {
    this.appMenu.closeMenu();
    this.appfooter.closeMenu();
  }

}