import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({

    selector: "product",

    templateUrl: "./components/product/product.html",

})


export class ProductComponent {
	
    public constructor(private router: Router){}

	public cart(){

		this.router.navigate(["cart"]);          // come from path in routing ts

	}


	public product(){

		this.router.navigate(["product"]);          // come from path in routing ts

	}

	public add() {
        alert("Add to cart Success");
    }

	public searchPhrase: string;

    public onSubmit(value) {
        alert("You are searching for " + value);
    }

    

}


    
    