import {Component} from "@angular/core";
import {Router} from "@angular/router";
import { MyHttpGetService } from "./history.services";
import dialogs = require("ui/dialogs");
import { ServerComponent } from "./../serverurl"; // get server test
let LocalStorage = require( "nativescript-localstorage" );

@Component({

    selector: "history",
    templateUrl: "./components/history/history.html",
    providers: [MyHttpGetService,ServerComponent]

})


export class HistoryComponent {

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
    public trackinglist = []

    // public items = [];
	
    public constructor(private router: Router, private myService: MyHttpGetService, private server: ServerComponent){}

    ngOnInit() {

        this.localid = LocalStorage.getItem("customer_id");
        this.localorderid = LocalStorage.getItem("order_id");

        this.extractData();
    }

    Receive(historyid) {

        dialogs.confirm({
            title: "Receive Product",
            message: "Are you Receive all Product?\n(This order will Close when you say \"yes\")",
            okButtonText: "yes",
            cancelButtonText: "no",
        }).then(result => {

            // result argument is boolean

            if(result == true){

                LocalStorage.setItem("localorderid_history", historyid); /// set

                console.log("makePatchRequest");

                this.myService
                    .patchData({ 
                        status_payment: "4"
                    })
                    .subscribe(res => { 
                        alert("Receive Order Success")
                        this.router.navigate(["menu"])
                    },
                err=>{
                    alert("Recevied Error\nPlease try again");
                    console.log("Error : "+JSON.stringify(err));
                });
            }
            else{
                    this.router.navigate(["history"]); 
            }
        }); 


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

        for(let pio of res){

            if(this.localid == pio.customer) {
               this.orderlist.push(pio)
            }

        }

        console.log("onGetDataSuccess (History)");

    }


    private onGetDataError(error: Response | any) {
        const body = error.json() || "";
        const err = body.error || JSON.stringify(body);
        console.log("onGetDataError: " + err);
    }

    public menu(){

        this.router.navigate(["menu"]);          // come from path in routing ts

    }

    public home(){

        this.router.navigate(["home"]);          // come from path in routing ts

    }



}