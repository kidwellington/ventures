import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-investing',
  templateUrl: './investing.component.html',
  styleUrls: ['./investing.component.scss']
})
export class InvestingComponent implements OnInit {
  public page: Entry<any>;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.cdaClient.getEntries({
      content_type: 'page',
      'sys.id': '7tSaoV4RtIUJuLRhqrVzrm',
      include: 4
    }).then(page => {
      this.page = page.items[0];
      console.log(this.page);
      //console.log(this.page.fields.component[0].fields);
    })
  }

}
