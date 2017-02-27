import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({

    selector: "contactus",

    templateUrl: "./components/contactus/contactus.html",

})


export class ContactusComponent {
	
    public constructor(private router: Router){}

	public menu(){

		this.router.navigate(["menu"]);          // come from path in routing ts

	}


}

    
    