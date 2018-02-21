import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";
// import { EventEmitter } from "events";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    // https://angular.io/guide/attribute-directives#pass-values-into-the-directive-with-an-input-data-binding
    @Input() rating: number;
    starWidth: number;
    // define event to output
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }

    onClick(): void {
        // emit event
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}
