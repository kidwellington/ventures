import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/services/contentful.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public page: Entry<any>;
  cookieValue: any;

  constructor(private contentfulService: ContentfulService,  private cookieService: CookieService) { }

  ngOnInit() {
    this.cookieValue = this.cookieService.get('locale');
    this.contentfulService.cdaClient.getEntries({
      content_type: 'page',
      'sys.id': '2UJxBIquSFk7IwejIdhAFJ',
      include: 3,
      locale: this.cookieValue

    }).then(page => {
      this.page = page.items[0];
      console.log(this.page);
    })
  }
}