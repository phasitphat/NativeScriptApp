import {Component} from "@angular/core";
import {Router} from "@angular/router";
import { MyHttpPostService } from "./reportproblem.services";
import { ServerComponent } from "./../serverurl"; // get server test
let LocalStorage = require( "nativescript-localstorage" );

@Component({

    selector: "reportproblem",
    templateUrl: "./components/reportproblem/reportproblem.html",
    providers: [MyHttpPostService,ServerComponent]

})


export class ReportproblemComponent {

    public content: string = null;
    public contact: string = null;

    public getContent_Report: string;
    public getOrder_Id: string;

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
    }
    
    private makePostRequest() {
        console.log("makePostRequest");

        this.myService
            .postData({ 

                order: this.getlocalorderid,
                customer: this.localid,
            	content_report: this.content,
                contact: this.contact,

            })
            .subscribe(res => {
                alert("Report Problem Success");
                this.makePatchRequest();
               
            },
            err=>{
                alert("Report Problem Error\nPlease try again");
                console.log("Error : "+JSON.stringify(err));
        });

        LocalStorage.setItem("local_orderid_report", this.getlocalorderid);

    }

    private makePatchRequest() {
        console.log("makePatchRequest");

        this.myService
            .patchData({ 
                status_payment: "3"
            })
            .subscribe(res => {},
            err=>console.log(JSON.stringify(err)));


    }

	public submit(){

        if(this.getlocalorderid == null){
            alert("Please Fill Order id")
            this.router.navigate(["menu"]); 
        }
        else if(this.content == null){
            alert("Please Fill Content Problem")
            this.router.navigate(["menu"]); 
        }
        else if(this.contact == null){
            alert("Please Fill Contact")
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

    
    