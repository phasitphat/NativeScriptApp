import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({

    selector: "editprofile",

    templateUrl: "./components/editprofile/editprofile.html",

})


export class EditprofileComponent {
	
    public constructor(private router: Router){}

	public menu(){

		alert("Edit Profile Success");
		this.router.navigate(["menu"]);          // come from path in routing ts

	}

}


    
    