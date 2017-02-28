import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({

    selector: "myorder",

    templateUrl: "./components/myorder/myorder.html",

})


export class MyorderComponent {
	
    public constructor(private router: Router){}

    public paymentdetail(){

		this.router.navigate(["paymentdetail"]);          // come from path in routing ts

	}

    public reportproblem(){

		this.router.navigate(["reportproblem"]);          // come from path in routing ts

	}

	public reportpayment(){

		this.router.navigate(["reportpayment"]);          // come from path in routing ts

	}

	public product(){

		this.router.navigate(["product"]);          // come from path in routing ts

	}


}