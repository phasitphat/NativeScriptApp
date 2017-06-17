import {Component} from "@angular/core";
import {Router} from "@angular/router";
import { MyHttpPostService } from "./reportpayment.services";
import { ImageAsset } from "image-asset";
import { ServerComponent } from "./../serverurl"; // get server test

let LocalStorage = require( "nativescript-localstorage" );

@Component({

    selector: "reportpayment",
    templateUrl: "./components/reportpayment/reportpayment.html",
    providers: [MyHttpPostService,ServerComponent]

})


export class ReportpaymentComponent {

    public imageTaken: ImageAsset;
    public saveToGallery: boolean = true;
    public keepAspectRatio: boolean = true;
    public width: number = 300;
    public height: number = 300;

	public payment_owner: string = null;
	public payment_target: string = null;
	public payment_datetime: string = null;
    public customer_name: string = null;
    public total_price: string = null;

    public getlocalorderid: string = null;
    public localid: string = null;
    public localorderid: string = null;

    public constructor(private router: Router, private myService: MyHttpPostService, private server: ServerComponent){
        this.localid = LocalStorage.getItem("customer_id");
        this.localorderid = LocalStorage.getItem("order_id");
    }

    ngOnInit() {

        this.onGetData();
    }


    private onGetData() {
        
        this.getlocalorderid = this.localorderid;
        console.log("getlocal : "+this.getlocalorderid);
    }
    
    private makePostRequest() {
        console.log("makePostRequest");
        
        this.myService
            .postData({ 

	        order: this.getlocalorderid,
	        customer: this.localid,
	        payment_owner: this.payment_owner,
	        payment_target: this.payment_target,
	        payment_datetime: this.payment_datetime,
	        customer_name: this.customer_name,
            total_price: this.total_price,

          })
            .subscribe(res => {
                alert("Report Payment Success");
                this.makePatchRequest();

            },
            err=>{
                alert("Report Payment Error\nPlease try again");
                console.log("Error : "+JSON.stringify(err));
        });

        LocalStorage.setItem("local_orderid_payment", this.getlocalorderid);
        console.log("getlocalorderid : "+this.getlocalorderid)

    }

    private makePatchRequest() {
        console.log("makePatchRequest");

        this.myService
            .patchData({ 
                status_payment: "2"
            })
            .subscribe(res => {},
            err=>console.log(JSON.stringify(err)));


    }

	public submit(){

        if(this.getlocalorderid == null){
            alert("Please Fill Order id")
            this.router.navigate(["menu"]); 
        }
        else if(this.payment_owner == null){
            alert("Please Fill Owner Bank")
            this.router.navigate(["menu"]); 
        }
        else if(this.payment_target == null){
            alert("Please Fill Target Bank")
            this.router.navigate(["menu"]); 
        }
        else if(this.payment_datetime == null){
            alert("Please Fill Payment Datetime")
            this.router.navigate(["menu"]); 
        }
        else if(this.customer_name == null){
            alert("Please Fill Customer Name")
            this.router.navigate(["menu"]); 
        }
        else if(this.total_price == null){
            alert("Please Fill Total Price")
            this.router.navigate(["menu"]); 
        }
        else{
            this.makePostRequest();
            this.router.navigate(["menu"]); 
        }
  
	}

    public back(){
        this.router.navigate(["myorder"]);          // come from path in routing ts

    }

    public home(){

        this.router.navigate(["home"]);          // come from path in routing ts

    }


}

    
    