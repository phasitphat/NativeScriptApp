import {Component} from "@angular/core";
import {Router} from "@angular/router";
import dialogs = require("ui/dialogs");
let LocalStorage = require( "nativescript-localstorage" );

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

    public history(){

        this.router.navigate(["history"]);          

    }

    public back(){

        this.router.navigate(["home"]);          

    }

	public signOut(){

        dialogs.confirm({
            title: "Sign Out",
            message: "Do you want to Sign out?",
            okButtonText: "yes",
            cancelButtonText: "no",
        }).then(result => {

            // result argument is boolean

            if(result == true){
	  		  	LocalStorage.clear();
				this.router.navigate(["/"]); 
            }
            else{
  		  		this.router.navigate(["menu"]); 
            }
        });   

	}

}

    
    