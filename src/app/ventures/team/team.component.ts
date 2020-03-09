import { Component, OnInit, ViewChild } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../../services/contentful.service';
import { NavPillsComponent } from '../ui/nav pills/nav-pills.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      state('visible', style({
        opacity: 1
      })),
      state('invisible', style({
        opacity: 0,
        height: 0,
        visibility: 'hidden',
        margin: 0,
        padding: 0,
        border: 0,
        overflow: 'hidden'
      })),
      transition('visible=>invisible', animate('0ms')),
      transition('invisible=>visible', animate('0ms'))
    ]),
  ]
})
export class TeamComponent implements OnInit {
  public bios: Entry<any>[];
  public isLoaded: boolean;
  public categories: Entry<any>[];
  public selectedCategory: number;
  public biosForCategories: {} = {};
  public pills: string[];
  public pillSections: boolean[];

  @ViewChild(NavPillsComponent) navPills: NavPillsComponent;

  constructor(private contentfulService: ContentfulService) {
    this.isLoaded = false;
    this.selectedCategory = 0;
  }

  ngOnInit() {
    // get all bio content items
    // this.contentfulService.getBios()
    // .then(bios => {
    //   this.bios = bios;
    //   console.log(this.bios)
    // })

    this.contentfulService.getCategories({
      order: 'fields.order',
      'fields.type': 'Team'
    })
    .then(categories => {
      this.categories = categories;
      console.log(this.categories);

      // loop through all categories and extract titles and then filter for unique list
      this.pills = this.categories
      .map((category) => {
        return category.fields.title;
      })
      .filter((category, index, self) => {
        return self.indexOf(category) === index && category !== 'Team Leader';
      });

      // create the pill Section array
      this.pillSections = this.pills
      .map(() => {
        return false;
      });

      this.pills.unshift('Full Team');
      this.pillSections.unshift(true);

      return Promise.all(this.categories.map(
        category => this.contentfulService.getBios({
          'fields.category.sys.id': category.sys.id,
          order: 'fields.teamRank',
          select: 'sys,fields.category,fields.headshot,fields.name,fields.slug,fields.teamLead,fields.teamRank,fields.title'
        })
      ));
    })
    .then(teamCategories => {
      this.categories.forEach((cat, i) => {
        this.biosForCategories[cat.sys.id] = teamCategories[i];
        /*console.log(this.biosForCategories[cat.sys.id]);
        if (teamCategories[i].length === 0) {
          console.log('empty');
        }
        else {
          console.log('full');
        }*/
      });
    });
  }

  public filterCategories(pillIndex: number) {
    this.pillSections[this.selectedCategory] = false;
    this.pillSections[pillIndex] = true;
    this.selectedCategory = pillIndex;
  }

  public isSectionVisible(sectionIndex: number) {
    const isVisibleFlag = this.pillSections[sectionIndex] || this.pillSections[0];

    return isVisibleFlag ? 'visible' : 'invisible';
  }
}
