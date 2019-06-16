import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-ventures',
  templateUrl: './ventures.component.html',
  styleUrls: ['./ventures.component.scss']
})
export class VenturesComponent implements OnInit {
  public page: Entry<any>;
  cookieValue: any;

  constructor(private contentfulService: ContentfulService, private cookieService: CookieService) { }

  ngOnInit() {
    this.cookieValue = this.cookieService.get('locale');
    this.contentfulService.cdaClient.getEntries({
      content_type: 'page',
      'sys.id': '6ifAixFPcFtHkOpOBhfMYV',
      include: 3,
      locale: this.cookieValue
    }).then(page => {
      this.page = page.items[0];
      console.log(this.page);
      // console.log(this.page.fields.component[0].fields);
    });
  }
}