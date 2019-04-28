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
    this.pills = ['All Perspectives', 'News', 'Press Releases', 'Videos', 'Opinions'];
  }

  ngOnInit() {
    // get all perspectives
    this.contentfulService.getPerspectives({
      order: '-fields.publishDate'
    })
    .then(perspectives => {
      this.perspectives = perspectives;
      console.log(this.perspectives);
    })
  }

}
