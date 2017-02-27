import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({

    selector: "reportproblem",

    templateUrl: "./components/reportproblem/reportproblem.html",

})


export class ReportproblemComponent {
	
    public constructor(private router: Router){}

	public menu(){

		this.router.navigate(["menu"]);          // come from path in routing ts

	}


}

    
    