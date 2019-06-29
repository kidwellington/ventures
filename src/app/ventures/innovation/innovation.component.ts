import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-innovation',
  templateUrl: './innovation.component.html',
  styleUrls: ['./innovation.component.scss']
})
export class InnovationComponent implements OnInit {

  public page: Entry<any>;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.cdaClient.getEntries({
      content_type: 'page',
      'sys.id': '3S5YB36r6gMoaWiq98wTLf',
      include: 4
    }).then(page => {
      this.page = page.items[0];
      console.log(this.page);
      //console.log(this.page.fields.component[0].fields);
    })
  }

}
