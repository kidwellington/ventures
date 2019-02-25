import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../../../services/contentful.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public footer: Entry<any>;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.cdaClient.getEntries({
      content_type: 'navigation',
      'sys.id': '7rcTeMczusFndyhNyapFw8'
    }).then(footer => {
      this.footer = footer.items[0];
      console.log(this.footer)
      console.log(this.footer.fields.navLinks)
    })
  }

}
