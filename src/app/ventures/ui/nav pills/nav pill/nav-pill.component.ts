import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'nav-pill',
    templateUrl: './nav-pill.component.html',
    styleUrls: ['./nav-pill.component.scss']
})
export class NavPillComponent implements OnInit {
    @Input() title: string;
    @Input() index: number;
    @Input() isLarge: string;
    @Output() pillClicked: EventEmitter<number>;
    isActive: boolean;
    isLargeScreen: boolean;

    constructor() {
        this.pillClicked = new EventEmitter();

        // check value of isLarge
        if (this.isLarge === undefined) {
            this.isLargeScreen = false;
        }
        else {
            this.isLargeScreen = this.isLarge === 'true';
        }
    }

    ngOnInit() {
        // on init, only the first pill should be active
        if (this.index === 0) {
            this.isActive = true;
        }
        else {
            this.isActive = false;
        }
    }

    public toggle(): void {
        this.isActive = !this.isActive;
    }

    /**
     * Sets the active status for the nav pill
     * @param active Boolean designating the status
     */
    public setIsActive(active: boolean): void {
        this.isActive = active;
    }

    /**
     * Emits the clicked pill event with the provided index
     * @param event The click event for the pill
     */
    public pillClick(event: any) {
        this.pillClicked.emit(parseInt(event.target.id.replace(/\D/g, ''), 10));
    }
}
