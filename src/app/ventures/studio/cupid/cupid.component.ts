import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-cupid',
  templateUrl: './cupid.component.html',
  styleUrls: ['./cupid.component.scss']
})
export class CupidComponent implements OnInit {

  public page: Entry<any>;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.cdaClient.getEntries({
      content_type: 'page',
      'sys.id': '7mKBMuFX7m8wQ6Eb0unnT4',
      include: 4
    }).then(page => {
      this.page = page.items[0];
      console.log(this.page);
      //console.log(this.page.fields.component[0].fields);
    })
  }

}
