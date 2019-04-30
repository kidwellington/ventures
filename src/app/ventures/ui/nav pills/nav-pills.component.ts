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

    @ViewChildren(NavPillComponent) pillComponents: QueryList<NavPillComponent>;

    constructor() {
        this.activeIndex = 0;
        this.pillClicked = new EventEmitter();
    }

    /**
     * Setting the active pill status and emitting index of clicked pill
     * @param pillIndex The index of the pill that was clicked
     */
    pillClick(pillIndex: number) {
        if (pillIndex === this.activeIndex) {
            // do nothing, active pill clicked
        }
        else {
            // alter the active state for both the old and new pills
            const pillArray = this.pillComponents.toArray();
            pillArray[this.activeIndex].setIsActive(false);
            pillArray[pillIndex].setIsActive(true);
            this.activeIndex = pillIndex;
            this.pillClicked.emit(pillIndex);
        }
    }
}
