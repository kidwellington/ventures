import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'nav-pills',
    templateUrl: './nav-pills.component.html',
    styleUrls: ['./nav-pills.component.scss']
})
export class NavPillsComponent implements OnInit {
    @Input() pills: string[];
    ngOnInit() {
    }
}
