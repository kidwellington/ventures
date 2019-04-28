import { Component, Input, ViewChildren, QueryList } from '@angular/core';
import { NavPillComponent } from './nav pill/nav-pill.component';

@Component({
    selector: 'nav-pills',
    templateUrl: './nav-pills.component.html',
    styleUrls: ['./nav-pills.component.scss']
})
export class NavPillsComponent {
    @Input() pills: string[];
    private activeIndex: number;

    @ViewChildren(NavPillComponent) pillComponents: QueryList<NavPillComponent>;

    constructor() {
        this.activeIndex = 0;
    }
    
    pillClick(event: any) {
        let pillIndex = event.target.parentNode.id.replace(/\D/g, '');
        
        if (pillIndex === this.activeIndex) {
            // do nothing, active pill clicked
        }
        else {
            // alter the active state for both the old and new pills
            let pillArray = this.pillComponents.toArray();
            pillArray[this.activeIndex].setIsActive(false);
            pillArray[pillIndex].setIsActive(true);
            this.activeIndex = pillIndex;
        }
    }
}
