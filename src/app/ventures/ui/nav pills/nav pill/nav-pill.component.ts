import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'nav-pill',
    templateUrl: './nav-pill.component.html',
    styleUrls: ['./nav-pill.component.scss']
})
export class NavPillComponent implements OnInit {
    @Input() title: string;
    @Input() index: number;
    isActive: boolean;

    ngOnInit() {
        // on init, only the first pill should be active
        if (this.index === 0) {
            this.isActive = true;
        }
        else {
            this.isActive = false;
        }
    }

    toggle() {
        this.isActive = !this.isActive;
    }
}
