import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({

    selector: "cart",

    templateUrl: "./components/cart/cart.html",

})


export class CartComponent {
	
    public constructor(private router: Router){}

	public paymentdetail(){

		this.router.navigate(["paymentdetail"]);          // come from path in routing ts

	}

	


}

    
    