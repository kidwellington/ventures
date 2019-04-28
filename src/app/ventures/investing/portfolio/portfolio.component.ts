import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public partners: Entry<any>[];
  public pills: string[];

  constructor(private contentfulService: ContentfulService) {
    this.pills = ['All Companies', 'Financial Services & Technology', 'Data Analytics & Machine Learning',
                  'Commerce & Payments', 'Security & Enterprise IT', 'Customer Experience & Marketing'];
  }

  ngOnInit() {
    this.contentfulService.cdaClient.getEntries({
      content_type: 'partner',
      order: 'fields.name'
    }).then(partners => {
      this.partners = partners.items;
      console.log(this.partners)
    })
  }
}
