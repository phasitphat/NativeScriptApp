import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({

    selector: "home",

    templateUrl: "./components/home/home.html",

})


export class HomeComponent {
	
    public constructor(private router: Router){}

	public cart(){

		this.router.navigate(["cart"]);          // come from path in routing ts

	}

	public menu(){

		this.router.navigate(["menu"]);          // come from path in routing ts

	}

	public product(){

		this.router.navigate(["product"]);          // come from path in routing ts

	}

	public searchPhrase: string;

    public onSubmit(value) {
        alert("You are searching for " + value);
    }

    onSearchLayoutLoaded(event) {
        if (event.object.android) {
            event.object.android.setFocusableInTouchMode(true);
        }
    }

    onSearchBarLoaded(event) {
        if (event.object.android) {
            event.object.android.clearFocus();
        }
    }

    clearTextfieldFocus(event){
    	event.layout.android.dismissSoftInput();
    }

}


    
    