import {Component} from "@angular/core";
import {Router} from "@angular/router";
import { MyHttpGetService } from "./myorder.services";
import { ServerComponent } from "./../serverurl"; // get server test
let LocalStorage = require( "nativescript-localstorage" );

@Component({

    selector: "myorder",
    templateUrl: "./components/myorder/myorder.html",
    providers: [MyHttpGetService,ServerComponent]

})


export class MyorderComponent {

    public localid: string;
    public localorderid: string;

	public order_id: string;
    public created_at: string;
    public status_payment: string;
    public total_price: string;
    public productinorder_name = [];
    public price_per_product = [];

    public pstatus: string;
    public orderlist = []

	
    public constructor(private router: Router, private myService: MyHttpGetService, private server: ServerComponent){}

    ngOnInit() {

        this.localid = LocalStorage.getItem("customer_id");
        this.localorderid = LocalStorage.getItem("order_id");

        this.extractData();
    }

    extractData() {
        console.log("extractData");
        this.myService.getData()
            .subscribe(
            (result) => this.onGetDataSuccess(result),
            (error) => this.onGetDataError(error)
            );
    }

    private onGetDataSuccess(res) {

        console.log("Type : "+typeof res)

        this.orderlist.push(res)

        // console.log("orderlist : "+JSON.stringify(this.orderlist));

        // console.log("Order List : "+this.orderlist)

        console.log("onGetDataSuccess (MyOrder)");
            
        if(res.status_payment == "1"){
            this.pstatus = "Waiting payment"
        }
        if(res.status_payment == "2"){
            this.pstatus = "Paid"
        }
        if(res.status_payment == "3"){
            this.pstatus = "Report Problem"
        }
        if(res.status_payment == "4"){
            this.pstatus = "Close" // delete order
        }

        if(res.id == this.localorderid){

            console.log("order id : "+res.id+" localorderid : "+this.localorderid)

            this.order_id              = res.id;
            this.created_at            = res.created_at;
            this.status_payment        = this.pstatus;
            this.total_price           = res.total_price;
            this.productinorder_name[0]   = res.productinorder_set[0].product_name;
            this.price_per_product[0]     = res.productinorder_set[0].totalprice_per_product;

            this.productinorder_name[1]   = res.productinorder_set[1].product_name;
            this.price_per_product[1]     = res.productinorder_set[1].totalprice_per_product;

            this.productinorder_name[2]   = res.productinorder_set[2].product_name;
            this.price_per_product[2]     = res.productinorder_set[2].totalprice_per_product;

            this.productinorder_name[3]   = res.productinorder_set[3].product_name;
            this.price_per_product[3]     = res.productinorder_set[3].totalprice_per_product;

            this.productinorder_name[4]   = res.productinorder_set[4].product_name;
            this.price_per_product[4]     = res.productinorder_set[4].totalprice_per_product;
        }


    }

    private onGetDataError(error: Response | any) {
        const body = error.json() || "";
        const err = body.error || JSON.stringify(body);
        console.log("onGetDataError: " + err);
    }

    public menu(){

        this.router.navigate(["menu"]);          // come from path in routing ts

    }

    public paymentdetail(){

		this.router.navigate(["paymentdetail"]);          // come from path in routing ts

	}

    public reportproblem(){

		this.router.navigate(["reportproblem"]);          // come from path in routing ts

	}

	public reportpayment(){

		this.router.navigate(["reportpayment"]);          // come from path in routing ts

	}


}