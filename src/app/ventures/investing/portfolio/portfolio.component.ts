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
  public selectedCategory: number;
  public pills: string[];
  public pillSections: boolean[];

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
      this.pillSections = this.pills
      .map(() => {
        return false;
      });

      this.pills.unshift('All Companies');
      this.pillSections.unshift(true);
    });
  }

  public filterCategories(pillIndex: number) {
    this.pillSections[this.selectedCategory] = false;
    this.pillSections[pillIndex] = true;
    this.selectedCategory = pillIndex;
  }

  public isSectionVisible(sectionIndex: number) {
    return this.pillSections[sectionIndex] || this.pillSections[0];
  }
}
