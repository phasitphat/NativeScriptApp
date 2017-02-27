import {Component} from "@angular/core";

import {Router} from "@angular/router";



@Component({


    selector: "signup",


    templateUrl: "./components/signup/signup.html",

})




export class SignupComponent {

 

	public constructor(private router: Router){}



	public signin(){

		this.router.navigate(["/"]);          // come from path in routing ts
		alert("Sign Up Success");
	}

}
