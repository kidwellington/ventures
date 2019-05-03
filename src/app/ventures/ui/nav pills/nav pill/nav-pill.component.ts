import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription, Observable, fromEvent } from 'rxjs';


@Component({
    selector: 'nav-pill',
    templateUrl: './nav-pill.component.html',
    styleUrls: ['./nav-pill.component.scss']
})
export class NavPillComponent implements OnInit, OnDestroy {
    @Input() title: string;
    @Input() index: number;
    @Input() isLarge: string;
    @Output() pillClicked: EventEmitter<number>;
    isActive: boolean;
    isLargeScreen: boolean;
    private resizeObservable: Observable<Event>;
    private resizeSubscription: Subscription;

    constructor() {
        this.pillClicked = new EventEmitter();
    }

    ngOnInit() {
        // on init, only the first pill should be active
        if (this.index === 0) {
            this.isActive = true;
        }
        else {
            this.isActive = false;
        }

        // check value of isLarge on load
        if (this.isLarge === undefined) {
            this.isLargeScreen = false;
        }
        else {
            this.isLargeScreen = this.isLarge === 'true';
        }

        // track the isLargeScreen value through observable
        this.resizeObservable = fromEvent(window, 'resize');
        this.resizeSubscription = this.resizeObservable.subscribe(evt => {
            console.log('event: ', evt);
        });
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

    ngOnDestroy() {
        this.resizeSubscription.unsubscribe();
    }
}
