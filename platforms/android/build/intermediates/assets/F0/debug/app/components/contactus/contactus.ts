import {Component} from "@angular/core";
import {Router} from "@angular/router";
import { MyHttpPostService } from "./contactus.services";
import { ServerComponent } from "./../serverurl"; // get server test
let LocalStorage = require( "nativescript-localstorage" );

@Component({

    selector: "contactus",
    templateUrl: "./components/contactus/contactus.html",
    providers: [MyHttpPostService,ServerComponent]

})


export class ContactusComponent {

    public localid: number;

    public getsubject: string = null;
    public getcontent: string = null;
	
    public constructor(private router: Router, private myService: MyHttpPostService, private server: ServerComponent){
        this.localid = LocalStorage.getItem("customer_id");
    }

    private makePostRequest() {
        console.log("makePostRequest");
        this.myService
            .postData({ 
                  
            	customer: this.localid,
            	subject: this.getsubject,
            	content: this.getcontent,

            })
            .subscribe(res => {
                alert("Contact Success");
                // this.isItemVisible = true;

            },
            err=>{
                alert("Contact Us Error\nPlease try again");
                console.log("Error : "+JSON.stringify(err));
            });
    }


	public submit() {
        if(this.getsubject == null){

            alert("Please Fill Subject")
            this.router.navigate(["contactus"]); 

        }
        else if(this.getcontent == null){

            alert("Please Fill Content")
            this.router.navigate(["contactus"]); 

        }
        else{
            this.makePostRequest();
            this.router.navigate(["menu"]);
        }
        
    }

	public back() {
        this.router.navigate(["menu"]);          // come from path in routing ts
    }

}

    
    