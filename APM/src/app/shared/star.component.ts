import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.Component.html',
    styleUrls: ['./star.component.css']
})
export class Starcomponent implements OnChanges {
    @Input()
    rating: number;
    starWidth: number;

    @Output()
    ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`show ${this.rating} is clicked!`);
    }
}