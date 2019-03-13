import { Component } from "@angular/core";

let a:string = `moja nowa zmienna`;
let tab = [{id:1,name:'film1'},{id:2,name:'film2'}]


@Component({
    selector: 'app-moj',
    templateUrl:`./new.html`,
    styleUrls:['./style.scss']
})

export class MojComponent{
 title = tab.map((a)=>(a.id == 1 ? a.name : ''))
}