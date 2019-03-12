import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Entry } from 'contentful';
import { ContentfulService } from '../../services/contentful.service';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent implements OnInit {
  public bio: Entry<any>;
  public htmlBio: any;
  public htmlExpertise: any;

  constructor(
    private contentfulService: ContentfulService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(switchMap((params: ParamMap) => this.contentfulService.getBio(params.get('slug'))))
    .subscribe(bio => {
      this.bio = bio;
      this.htmlBio = documentToHtmlString(bio.fields.bio);
      this.htmlExpertise = documentToHtmlString(bio.fields.expertise);
      console.log(this.bio)
    });


    // test contentful request/response by 
    // getting a single content item
    // this.contentfulService.cdaClient.getEntries({
    //   content_type: 'bio',
    //   'sys.id': '2WBDAb5Y2D5myrm1nCCH7o'
    // }).then(bio => {
    //   this.bio = bio.items[0].fields;
    //   console.log(this.bio)
    //   this.isLoaded = true;
    // })
  }

}
