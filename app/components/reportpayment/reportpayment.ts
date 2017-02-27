import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({

    selector: "reportpayment",

    templateUrl: "./components/reportpayment/reportpayment.html",

})


export class ReportpaymentComponent {
	
    public constructor(private router: Router){}

	public menu(){

		this.router.navigate(["menu"]);          // come from path in routing ts

	}


}

    
    