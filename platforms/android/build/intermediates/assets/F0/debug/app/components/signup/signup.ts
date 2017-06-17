import {Component} from "@angular/core";
import { MyHttpPostService } from "./signup.services";
import {Router} from "@angular/router";
import { Md5 } from 'ts-md5/dist/md5';
import { ServerComponent } from "./../serverurl"; // get server test

@Component({
    selector: "signup",
    templateUrl: "./components/signup/signup.html",
    providers: [MyHttpPostService,ServerComponent]
})

export class SignupComponent {
    public user: string = null;
    public pass: string = null;
    public repass: string = null;
    public fname: string = null;
    public lname: string = null;
    public gender: string = null;
    public age: string = null;
    public tel: string = null;
    public typeofphone: string = null;
    public email: string = null;
    public jobs: string = null;
    public address: string = null;
    public postcode: string = null;

    public exist_username = [];
    public i:number = 0;
    public j:number = 0;
    public k:number = 0;

    public aldy:number = 0;

    // >> (hide)
    public isItemVisible: boolean = false;


	public constructor(private router: Router, private myService: MyHttpPostService, private server: ServerComponent){}

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

        for(let user of res){

            this.exist_username[this.i] = user.username
            console.log("Exist Username : " + this.exist_username[this.i])
            this.i++;

        }

    }

    private onGetDataError(error: Response | any) {
        const body = error.json() || "";
        const err = body.error || JSON.stringify(body);
        alert("Connection Error")
        console.log("onGetDataError: " + err);
    }

/////////////////////////// POST /////////////////////////////////

    private makePostRequest() {
        
        this.user = this.user.toLowerCase();

        if(this.pass != this.repass){
            alert("Re-Password is Incorrect")
            this.router.navigate(["signup"]);
        }
        else if(this.tel.length != 10){
            alert("Phone Number is Incorrect")
            this.router.navigate(["signup"]);
        }
        else{
        
            let e = Md5.hashStr(this.pass);
           
            console.log("makePostRequest");

            for(this.k=0 ; this.k < this.exist_username.length ; this.k++){
                if(this.exist_username[this.k]==this.user){
                    this.aldy = 1;
                    alert("Username is already");
                    this.k = this.exist_username.length;
                }else{
                    this.aldy = 2;
                }
            }
                    
            if(this.aldy == 2){

                this.myService
                .postData({ 
                    username: this.user,
                    password: e,
                    first_name: this.fname,
                    last_name: this.lname,
                    gender: this.gender,
                    age: this.age,
                    tel: this.tel,
                    typeofphone: this.typeofphone,
                    email: this.email,
                    jobs: this.jobs,
                    address: this.address,
                    postcode: this.postcode,
                })
                .subscribe(res => {
                    alert("Sign Up Success \nusername is "+this.user);
                    console.log(JSON.stringify(res));
                    this.isItemVisible = true;
                },
                err=>{
                    // alert("Sign Up Error");
                    alert("Sign Up Error\nPlease try again")
                    console.log("Error : "+JSON.stringify(err));
                });
            } // if
        } // else
    } // makepost

    public back() {
        this.router.navigate(["/"]);
    }

    public submit() {
        if(this.user == null){
            alert("Please Fill Username")
            this.router.navigate(["signup"]);
        }
        else if(this.pass == null){
            alert("Please Fill Password")
            this.router.navigate(["signup"]);
        }
        else if(this.repass == null){
            alert("Please Fill Re-Password")
            this.router.navigate(["signup"]);
        }
        else if(this.fname == null){
            alert("Please Fill First Name")
            this.router.navigate(["signup"]);
        }
        else if(this.lname == null){
            alert("Please Fill Last Name")
            this.router.navigate(["signup"]);
        }
        // else if(this.gender == null){
        //     alert("Please Fill Gender")
        //     this.router.navigate(["signup"]);
        // }
        // else if(this.age == null){
        //     alert("Please Fill Age")
        //     this.router.navigate(["signup"]);
        // }
        else if(this.tel == null){
            alert("Please Fill Phone Number")
            this.router.navigate(["signup"]);
        }
        // else if(this.typeofphone == null){
        //     alert("Please Fill Type of Phone (IOS/ANDROID)")
        //     this.router.navigate(["signup"]);
        // }
        else if(this.email == null){
            alert("Please Fill E-mail Address")
            this.router.navigate(["signup"]);
        }
        // else if(this.jobs == null){
        //     alert("Please Fill Jobs")
        //     this.router.navigate(["signup"]);
        // }
        else if(this.address == null){
            alert("Please Fill Address")
            this.router.navigate(["signup"]);
        }
        else if(this.postcode == null){
            alert("Please Fill Postcode")
            this.router.navigate(["signup"]);
        }else{
            this.makePostRequest();
            this.router.navigate(["/"]); 
        }
        
    }
}
