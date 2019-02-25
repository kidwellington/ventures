import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../../../services/contentful.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public header: Entry<any>;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.cdaClient.getEntries({
      content_type: 'navigation',
      'sys.id': '3f6Nj4v8Nad2kVNId4eBL7'
    }).then(header => {
      this.header = header.items[0];
      console.log(this.header)
    
      // TODO: write logic to distinguish internal links from external links so that
      // internal links use routerLink and external links use href. Will likely need
      // to update the Link content type.

      // TODO: get sub-menu links from Contentful and handle like on the main Ventures site

      // TODO: clean up menu link styling


    })
  }

}
