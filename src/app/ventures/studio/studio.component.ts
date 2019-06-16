import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { CookieService } from 'ngx-cookie-service';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss']
})

export class StudioComponent implements OnInit {
  public page: Entry<any>;
  private cookieValue;

  constructor(private contentfulService: ContentfulService, private cookieService: CookieService) { }

  ngOnInit() {
    this.cookieValue = this.cookieService.get('locale');
    console.log('cookie', this.cookieValue);
    this.contentfulService.cdaClient.getEntries({
      content_type: 'page',
      'sys.id': '3F4MWF0dHTETyStK0Iewc1',
      locale: this.cookieValue,
      include: 3
    }).then(page => {
      this.page = page.items[0];
      console.log(this.page);
    });
  }
}