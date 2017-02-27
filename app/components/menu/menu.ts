import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({

    selector: "menu",

    templateUrl: "./components/menu/menu.html",

})


export class MenuComponent {
	
    public constructor(private router: Router){}

	public editProfile(){

		this.router.navigate(["editprofile"]);          

	}
	public myOrder(){

		this.router.navigate(["myorder"]);          

	}
	public contactUs(){

		this.router.navigate(["contactus"]);          

	}
	public signOut(){

		this.router.navigate(["/"]);          

	}

	


}

    
    