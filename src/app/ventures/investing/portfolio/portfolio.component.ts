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
  }

  ngOnInit() {
    this.contentfulService.cdaClient.getEntries({
      content_type: 'partner',
      order: 'fields.name'
    }).then(partners => {
      this.partners = partners.items;
      console.log(this.partners);

      // loop through all partners and extract titles and then filter for unique list
      this.pills = this.partners
      .map((partner) => {
        return partner.fields.category.fields.title;
      })
      .filter((partner, index, self) => {
        return self.indexOf(partner) === index;
      });
      this.pills.unshift('All Companies');
    })
  }
}
