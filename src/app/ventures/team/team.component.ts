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

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    // get all bio content items
    this.contentfulService.getBios()
    .then(bios => {
      this.bios = bios;
      console.log(this.bios)
    })
  }

}
