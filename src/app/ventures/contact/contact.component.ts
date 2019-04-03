import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../../services/contentful.service';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public contacts: Entry<any>[];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.cdaClient.getEntries({
      content_type: 'contact'
    }).then(contacts => {
      this.contacts = contacts.items;
      console.log(this.contacts[0])
      // Quick implementation. Change this to get the Page content type, similar to the 
      // Venture Investing page
    })
  }

}
