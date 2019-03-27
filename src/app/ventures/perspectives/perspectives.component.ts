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

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    // get all perspectives
    this.contentfulService.getPerspectives()
    .then(perspectives => {
      this.perspectives = perspectives;
      console.log(this.perspectives)
    })
  }

}
