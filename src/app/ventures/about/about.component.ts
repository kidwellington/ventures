import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public page: Entry<any>;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.cdaClient.getEntries({
      content_type: 'page',
      'sys.id': '2UJxBIquSFk7IwejIdhAFJ',
      include: 3
    }).then(page => {
      this.page = page.items[0];
      console.log(this.page);
      //console.log(this.page.fields.component[0].fields);
    })
  }

}
