import { Component, OnChanges } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.Component.html'    

})
export class Starcomponent implements OnChanges{
    rating:number = 4;
    starWidth:number;

    ngOnChanges(){ 

    }
}