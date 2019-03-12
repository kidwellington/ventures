import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Entry } from 'contentful';


@Component({
  selector: 'cms-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Input() entry: Entry<any>;

  public domain = environment.contentful.webappUrl;
  public space = environment.contentful.space;
  public environment = environment.contentful.environment;

  constructor() { }

  ngOnInit() {
    console.log('Edit button system id is', this.entry.sys.id);
  }

}
