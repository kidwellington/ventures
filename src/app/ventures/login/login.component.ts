import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public page: Entry<any>;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.cdaClient.getEntries({
      content_type: 'page',
      'sys.id': '2SJJqTs6gJSlhBJKDApzqM',
      include: 3
    }).then(page => {
      this.page = page.items[0];
      console.log(this.page);
    })
  }


}
