import {Component} from "@angular/core";
import { MyHttpGetService } from "./editprofile.services";
import {Router} from "@angular/router";
import { ServerComponent } from "./../serverurl"; // get server test
let LocalStorage = require( "nativescript-localstorage" );

@Component({
    selector: "editprofile",
    templateUrl: "./components/editprofile/editprofile.html",
    providers: [MyHttpGetService,ServerComponent]
})


export class EditprofileComponent {

	public localid: number;
    
    public id: string;
    public first_name: string;
    public last_name: string;
    public phone: number;
    public email: string;
    public address: string;
    public jobs: string;
    public typephone: string;
    public postcode: string;

    public constructor(private router: Router, private myService: MyHttpGetService, private server: ServerComponent){

        this.localid = LocalStorage.getItem("customer_id"); /// get
    }

    ngOnInit() {
        this.extractData();
        // this.extractResponseInfo();
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
        console.log("onGetDataSuccess");

        this.id = res.id;
        // this.username = res.user;
        // this.password = res.password;
        this.first_name = res.first_name;
        this.last_name = res.last_name;
        this.email = res.email;
        this.phone = res.tel;
        this.typephone = res.typeofphone;
        this.jobs = res.jobs;
        this.address = res.address;
        this.postcode = res.postcode;
    }

    private onGetDataError(error: Response | any) {
        const body = error.json() || "";
        const err = body.error || JSON.stringify(body);
        console.log("onGetDataError: " + err);
    }
///////////////////// PATCH  ////////////////////////

    public getfname: string = null;
    public getlname: string = null;
    public getphone: number = null;
    public getemail: string = null;
    public gettypephone: string = null;
    public getjob: string = null;
    public getaddress: string = null;
    public getpostcode: string = null;

    private makePostRequest() {
        console.log("makePostRequest");
        this.myService
            .postData({ 
                first_name: this.getfname,
                last_name: this.getlname,
                phone: this.getphone,
                email: this.getemail,
                typeofphone: this.gettypephone,
                jobs: this.getjob,
                address: this.getaddress,
                postcode: this.getpostcode,
            })
            .subscribe(res => {
                alert("Edit Profile Success");
                // this.isItemVisible = true;

            },
            err=>{
                alert("Edit Profile Error\nPlease try again");
                console.log("Error : "+JSON.stringify(err));
        });
    }
    
    public menu(){
    
        this.router.navigate(["menu"]);

    }
    
    public edit(){
        if(this.getfname == null){
            alert("Please Fill First Name")
            this.router.navigate(["editprofile"]);  
        }
        else if(this.getlname == null){
            alert("Please Fill Last Name")
            this.router.navigate(["editprofile"]);  
        }
        else if(this.getphone == null){
            alert("Please Fill Phone Number")
            this.router.navigate(["editprofile"]);  
        }
        else if(this.getemail == null){
            alert("Please Fill E-mail Address")
            this.router.navigate(["editprofile"]);  
        }
        else if(this.gettypephone == null){
            alert("Please Fill Type of Phone (IOS/ANDROID)")
            this.router.navigate(["editprofile"]);  
        }
        else if(this.getjob == null){
            alert("Please Fill Jobs")
            this.router.navigate(["editprofile"]);  
        }
        else if(this.getaddress == null){
            alert("Please Fill Address")
            this.router.navigate(["editprofile"]);  
        }
        else if(this.getpostcode == null){
            alert("Please Fill Postcode")
            this.router.navigate(["editprofile"]);  
        }else{
            this.makePostRequest();
            this.router.navigate(["menu"]);   
        }
           
    }

}


    
    