import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { Router, NavigationExtras } from "@angular/router";
import { MyHttpGetService } from "./signin.services";
import { Md5 } from 'ts-md5/dist/md5';
import { ServerComponent } from "./../serverurl"; // get server test

let LocalStorage = require( "nativescript-localstorage" );



@Component({

    selector: "signin",
    templateUrl: "./components/signin/signin.html",
    providers: [MyHttpGetService,ServerComponent]
})
    



export class SigninComponent implements OnInit{
    
    public getid: number;
    public getusername: string = null;
    public getusername2: string;
    public getpassword: string = null;

    public i: number=0;



    public constructor(private router: Router,private page: Page, private myService: MyHttpGetService, private server: ServerComponent){}

    ngOnInit() {
        // before app start
        // LocalStorage.clear();
        console.log("SERVER : "+ this.server.getserver())

        this.getid = LocalStorage.getItem("customer_id");
        console.log("Localstorage UserID (BEFORE SIGNIN): " + this.getid)
        this.page.actionBarHidden = true;     // hide action bar
    }

    public login() {
        if(this.getusername == null && this.getpassword == null){

                console.log("no input username or password")
                alert("Username or Password Incorrect")
            
        }else{
            this.extractData();
        }
        
    }

    extractData() {

        console.log("extractData");

        // console.log("Username (INPUT) : " + this.getusername)
        // console.log("Password (INPUT) : " + this.getpassword)

        this.myService.getData()
            .subscribe(
            (result) => this.onGetDataSuccess(result),
            (error) => this.onGetDataError(error)
            );
    }



    private onGetDataSuccess(res) {
        
        console.log("onGetDataSuccess");

        this.getusername2 = this.getusername.toLowerCase();

        let e = Md5.hashStr(this.getpassword);

        console.log("Username (INPUT) : " + this.getusername2)
        console.log("Password (INPUT) : " + e)

        for (let customer of res) {

            if(this.getid==customer.id){
                
               this.i=1;
               this.router.navigate(["/home"])

            }

            else if(customer.username == this.getusername2 && customer.password == e){

                LocalStorage.setItem("customer_id", customer.id); /// set
                this.getid = LocalStorage.getItem("customer_id"); /// get

                console.log("Customer id in localstorage (SIGNIN) : " + this.getid);

                this.i=1;

                this.router.navigate(["/home"])
            }
        }

        if(this.i==0){
            alert("Username or Password Incorrect");
        }
        

    }

    private onGetDataError(error: Response | any) {
        const body = error.json() || "";
        const err = body.error || JSON.stringify(body);
        alert("Connection Error")
        console.log("onGetDataError: " + err);
    }

    public signup(){
        this.router.navigate(["signup"]);          // come from path in routing ts

    }

}
