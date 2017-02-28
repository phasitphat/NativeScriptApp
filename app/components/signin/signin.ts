import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import {Router} from "@angular/router";



@Component({


    selector: "signin",


    templateUrl: "./components/signin/signin.html",

})




export class SigninComponent implements OnInit{

 

	public constructor(private router: Router,private page: Page){}

	ngOnInit() {
		this.page.actionBarHidden = true;
	}

	public home(){
		this.router.navigate(["home"]);          // come from path in routing ts

	}

	public signup(){
		this.router.navigate(["signup"]);          // come from path in routing ts

	}

}
