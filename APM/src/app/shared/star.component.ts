import { Component, OnChanges, Input } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.Component.html'    

})
export class Starcomponent implements OnChanges{
    @Input() rating:number;
    starWidth:number;

    ngOnChanges(){ 
        this.starWidth = this.rating * 75 / 5;
        console.log('this.rating' + this.starWidth )
    }
}