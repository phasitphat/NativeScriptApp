import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({

    selector: "paymentdetail",

    templateUrl: "./components/paymentdetail/paymentdetail.html",

})


export class PaymentdetailComponent {
	
    public constructor(private router: Router){}

	public home(){

		this.router.navigate(["home"]);          // come from path in routing ts

	}


}

    
    