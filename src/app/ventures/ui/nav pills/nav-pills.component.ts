import { Component, Input, ViewChildren, QueryList, EventEmitter, Output } from '@angular/core';
import { NavPillComponent } from './nav pill/nav-pill.component';

@Component({
    selector: 'nav-pills',
    templateUrl: './nav-pills.component.html',
    styleUrls: ['./nav-pills.component.scss']
})
export class NavPillsComponent {
    @Input() pills: string[];
    @Output() pillClicked: EventEmitter<number>;
    private activeIndex: number;
    isLargeScreen: boolean;
    isOverlayOpen: boolean;

    @ViewChildren('deskPills') deskPillComponents: QueryList<NavPillComponent>;
    @ViewChildren('mobilePills') mobilePillComponents: QueryList<NavPillComponent>;

    constructor() {
        this.activeIndex = 0;
        this.pillClicked = new EventEmitter();
    }

    /**
     * Setting the active pill status and emitting index of clicked pill
     * @param pillIndex The index of the pill that was clicked
     */
    pillClick(pillIndex: number) {
        // close overlay in case it is open
        this.closeOverlay();

        if (pillIndex === this.activeIndex) {
            // do nothing, active pill clicked
        }
        else {
            // alter the active state for both the old and new pills in both desktop and mobile versions
            const deskArray = this.deskPillComponents.toArray();
            const mobileArray = this.mobilePillComponents.toArray();
            deskArray[this.activeIndex].setIsActive(false);
            deskArray[pillIndex].setIsActive(true);
            mobileArray[this.activeIndex].setIsActive(false);
            mobileArray[pillIndex].setIsActive(true);
            this.activeIndex = pillIndex;
            this.pillClicked.emit(pillIndex);
        }
    }

    openOverlay() {
        this.isOverlayOpen = true;
    }

    closeOverlay() {
        this.isOverlayOpen = false;
    }
}
