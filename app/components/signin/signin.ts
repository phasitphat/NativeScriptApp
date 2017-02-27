import {Component} from "@angular/core";

import {Router} from "@angular/router";



@Component({


    selector: "signin",


    templateUrl: "./components/signin/signin.html",

})




export class SigninComponent {

 

	public constructor(private router: Router){}



	public home(){

		this.router.navigate(["home"]);          // come from path in routing ts

	}

	public signup(){

		this.router.navigate(["signup"]);          // come from path in routing ts

	}

}
