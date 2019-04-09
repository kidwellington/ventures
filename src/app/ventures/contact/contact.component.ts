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

  public page: Entry<any>;
  public contacts: Entry<any>[];
  public address: any;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.cdaClient.getEntries({
      content_type: 'page',
      'sys.id': '65noSk5axOZNDFI3wLhec'
    }).then(page => {
      this.page = page.items[0];
      console.log(this.page);
    })

    this.contentfulService.cdaClient.getEntries({
      content_type: 'contact'
    }).then(contacts => {
      this.contacts = contacts.items;
      console.log(this.contacts);
      
      // TODO: getting parsed html here, but i need this
      // returned as an array so i can iterate over it
      this.contacts.forEach((contact, i) => {
        this.address = documentToHtmlString(contact.fields.address1);
        console.log(this.address)
      });
    })
  }

}
