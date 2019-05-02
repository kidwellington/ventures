import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from 'src/app/services/contentful.service';

interface PartnerObj {
  title: string;
  visible: boolean;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public partners: Entry<any>[];
  public selectedCategory: number;
  public pills: string[];
  public pillSections: PartnerObj[];

  constructor(private contentfulService: ContentfulService) {
    this.selectedCategory = 0;
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

      // create the pill Section array
      this.pillSections = this.partners
      .map((partner) => {
        return {
          title: partner.fields.category.fields.title,
          visible: true
        }
      });

      this.pills.unshift('All Companies');
    });
  }

  public filterCategories(pillIndex: number) {
    // loop through the pills and check for the old and new index to swap
    // the visibility
    for (let i = 0; i < this.pillSections.length; i++) {
      // true cases - pill index = 0
      // or the pill clicked matches the title saved for that partner
      if (pillIndex === 0 || this.pills[pillIndex] === this.pillSections[i].title) {
        this.pillSections[i].visible = true;
      }
      else {
        this.pillSections[i].visible = false;
      }
    }

    this.selectedCategory = pillIndex;
  }
}
