import { Component } from "@angular/core";

@Component({
  selector:'pm-root',
  template:`<div style="text-align:center">
  <h1>
    Welcome to {{title}}!!
  </h1>
  ... Starter Files LA ...
</div>
   `
})
export class AppComponent{
  pageTitle:string = 'Default Value';
}