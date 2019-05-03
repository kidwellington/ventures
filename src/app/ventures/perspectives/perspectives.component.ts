import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../../services/contentful.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-perspectives',
  templateUrl: './perspectives.component.html',
  styleUrls: ['./perspectives.component.scss'],
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
        overflow: 'hidden',
        display: 'none'
      })),
      transition('visible=>invisible', animate('0ms')),
      transition('invisible=>visible', animate('0ms'))
    ]),
  ]
})
export class PerspectivesComponent implements OnInit {

  public perspectives: Entry<any>[];
  public selectedCategory: number;
  public pills: string[];

  constructor(private contentfulService: ContentfulService) {
    this.selectedCategory = 0;

  }

  ngOnInit() {
    // get all perspectives
    this.contentfulService.getPerspectives({
      order: '-fields.publishDate'
    })
    .then(perspectives => {
      this.perspectives = perspectives;
      console.log(this.perspectives);

      // loop through all perspectives and extract titles and then filter for unique list
      this.pills = this.perspectives
      .map((perspective) => {
        return perspective.fields.category.fields.title;
      })
      .filter((perspective, index, self) => {
        return self.indexOf(perspective) === index;
      });

      this.pills.unshift('All Perspectives');
    });
  }

  public filterCategories(pillIndex: number) {
    this.selectedCategory = pillIndex;
  }

  public isSectionVisible(index: number) {
    const isVisibleFlag = !(this.perspectives[index].fields.category.fields.title !== this.pills[this.selectedCategory] &&
                          this.selectedCategory !== 0);

    return isVisibleFlag ? 'visible' : 'invisible';
  }

}
