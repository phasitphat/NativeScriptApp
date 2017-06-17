import { Component } from "@angular/core";
import { MyHttpGetService } from "./paymentdetail.services";
import {Router} from "@angular/router";
import { ServerComponent } from "./../serverurl"; // get server test
let LocalStorage = require( "nativescript-localstorage" );

@Component({
    selector: "paymentdetail",
    templateUrl: "./components/paymentdetail/paymentdetail.html",
    providers: [MyHttpGetService,ServerComponent]
})


export class PaymentdetailComponent {

    public constructor(private router: Router, private myService: MyHttpGetService, private server: ServerComponent){}

	public back(){

		this.router.navigate(["myorder"]);          // come from path in routing ts

	}

    public home(){

        this.router.navigate(["home"]);          // come from path in routing ts

    }

}

    
    