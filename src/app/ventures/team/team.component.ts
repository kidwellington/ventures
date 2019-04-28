import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../../services/contentful.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  public bios: Entry<any>[];
  public isLoaded : boolean = false;
  public categories: Entry<any>[];
  public biosForCategories: {} = {};
  public pills: string[];

  constructor(private contentfulService: ContentfulService) { 
    this.pills = ['Full Team', 'Venture Investing', 'D10X', 'Innovation Network & Emerging Technology', 'Studio', 'Finance Operations & Strategy'];
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
      console.log(this.categories)
      return Promise.all(this.categories.map(
        category => this.contentfulService.getBios({
          'fields.category.sys.id': category.sys.id,
          order: 'fields.teamRank',
          select: 'sys,fields.category,fields.headshot,fields.name,fields.slug,fields.teamLead,fields.teamRank,fields.title'
        })
        
      ))
    })
    .then(teamCategories => {
      this.categories.forEach((cat, i) => {
        this.biosForCategories[cat.sys.id] = teamCategories[i];
        console.log(this.biosForCategories[cat.sys.id])
        if (teamCategories[i].length == 0) {
          console.log('empty')
        }
        else {
          console.log('full')
        }
      });
    })

    
  }

}
