import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'contentful';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() entry: Entry<any>;

  constructor() { }

  ngOnInit() {
    console.log(this.entry.fields)
  }

}
