import { Component, OnInit } from '@angular/core';
import { Entry } from 'contentful';
import { ContentfulService } from '../../services/contentful.service';

@Component({
  selector: 'app-perspectives',
  templateUrl: './perspectives.component.html',
  styleUrls: ['./perspectives.component.scss']
})
export class PerspectivesComponent implements OnInit {

  public perspectives: Entry<any>[];
  public pills: string[];

  constructor(private contentfulService: ContentfulService) { 
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
    })
  }

}
