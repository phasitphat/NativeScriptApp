import { Component } from "@angular/core";
import { Router,NavigationExtras} from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { MyHttpGetService } from "./product.services";
import { ServerComponent } from "./../serverurl"; // get server test

import dialogs = require("ui/dialogs");
let LocalStorage = require( "nativescript-localstorage" );

let sequence = [0]; 
let countCart = 1;
let url = 0;

@Component({

    selector: "product",
    templateUrl: "./components/product/product.html",
    providers: [MyHttpGetService,ServerComponent]

})


export class ProductComponent{

    public localid: number;

    public id:number;
	public product_id: number = null;
    public product_name: string;
    public product_price: number;
    public product_quantity: number;
    public product_detail: string;
    public product_image: string;


    public ran1:number;
    public ran2:number;
    public ran3:number;
    public ran4:number;
    public ran5:number;
    public ran6:number;
    public ran7:number;
    public ran8:number;
    public ran9:number;
    public ran10:number;

    public i:number = 0;

    public product_id_list = [];
    public product_image_list = [];


    public constructor(private router: Router, private passing: ActivatedRoute, private myService: MyHttpGetService,private server: ServerComponent){

        this.localid = LocalStorage.getItem("customer_id");

    }
    

    ngOnInit() {

        // this.extractData()
        this.passing.params.subscribe(params => {
            this.id = +params["id"];
        });
        
        console.log("constructor in product : "+this.id); 

        if(sequence.length == 1){
            LocalStorage.setItem("sequence", sequence)
        }
                  
            sequence = LocalStorage.getItem("sequence");     /// get
            console.log("Secquence b4 : "+sequence)
            sequence.push(this.id)                           /// how to append sequence
            LocalStorage.setItem("sequence", sequence);      /// set
            console.log("Secquence af : "+sequence)

            console.log("Secquence Length : "+sequence.length)
        // }


        if(sequence.length >= 3){
            this.extractData()
            this.makePostSequenceRequest()
            this.extractDataPredict();
            
        }
        else{
            this.extractData()
        }

        // console.log("constructor in product : "+this.id); 
        // this.sequence.push(this.id)
        // console.log("Secquence : "+this.sequence);
 
    }


    extractData() {
        console.log("extractData");
        this.myService.getData()
            .subscribe(
            (result) => this.onGetDataSuccess(result),
            (error) => this.onGetDataError(error)
            );
    }

    extractDataPredict() {
        console.log("extractData");
        this.myService.getDataPredict()
            .subscribe(
            (result) => this.onGetDataSuccessPredict(result),
            (error) => this.onGetDataError(error)
            );
    }


    private onGetDataSuccess(res) {
        
        console.log("onGetDataSuccess");
        // console.log("onGetDataSuccess : "+JSON.stringify(res)) // res is list

        this.ran1 = Math.floor(Math.random() * res.length) + 1;
        this.ran2 = Math.floor(Math.random() * res.length) + 1;
        this.ran3 = Math.floor(Math.random() * res.length) + 1;
        this.ran4 = Math.floor(Math.random() * res.length) + 1;
        this.ran5 = Math.floor(Math.random() * res.length) + 1;
        this.ran6 = Math.floor(Math.random() * res.length) + 1;
        this.ran7 = Math.floor(Math.random() * res.length) + 1;
        this.ran8 = Math.floor(Math.random() * res.length) + 1;
        this.ran9 = Math.floor(Math.random() * res.length) + 1;
        this.ran10 = Math.floor(Math.random() * res.length) + 1;

        for (let product of res) {

            if(this.id==product.id){

                this.product_id =  product.id;
                console.log("res.id : " + product.id +  " this.id : " + this.id);

                this.product_name = product.product_name;
                this.product_price = product.product_price;
                this.product_quantity = product.product_quantity;
                this.product_detail = product.product_detail;
                this.product_image = product.product_image;

                // console.log("Product_image: "+this.product_image);
            }

          
            if(sequence.length < 3){


                if(product.id == this.ran1){
                    this.product_id_list[0] = product.id;
                    this.product_image_list[0] = product.product_image;
                }
                if(product.id == this.ran2){
                    this.product_id_list[1] = product.id;
                    this.product_image_list[1] = product.product_image;
                }
                if(product.id == this.ran3){
                    this.product_id_list[2] = product.id;
                    this.product_image_list[2] = product.product_image;
                }
                if(product.id == this.ran4){
                    this.product_id_list[3] = product.id;
                    this.product_image_list[3] = product.product_image;
                }
                if(product.id == this.ran5){
                    this.product_id_list[4] = product.id;
                    this.product_image_list[4] = product.product_image;
                }
                if(product.id == this.ran6){
                    this.product_id_list[5] = product.id;
                    this.product_image_list[5] = product.product_image;
                }
                if(product.id == this.ran7){
                    this.product_id_list[6] = product.id;
                    this.product_image_list[6] = product.product_image;
                }
                if(product.id == this.ran8){
                    this.product_id_list[7] = product.id;
                    this.product_image_list[7] = product.product_image;
                }
                if(product.id == this.ran9){
                    this.product_id_list[8] = product.id;
                    this.product_image_list[8] = product.product_image;
                }
                if(product.id == this.ran10){
                    this.product_id_list[9] = product.id;
                    this.product_image_list[9] = product.product_image;
                }

            }
        }
    }

    private onGetDataSuccessPredict(res) {
        
        console.log("onGetDataSuccess_Predict");
        // console.log("GET RES PREDICT : "+JSON.stringify(res)) // must be list
        // console.log("TEST : "+ JSON.stringify(res["queryset"]))


        for (let product of res["queryset"]) {

            let picture = JSON.stringify(product.product_image).slice(1, -1); ;
            console.log("URL : "+picture)

            if(this.i < 10){

                this.product_id_list[this.i] = JSON.stringify(product.id);
                this.product_image_list[this.i] = this.server.getserver()+"media/"+picture;

                // console.log("Predict Product id : "+ this.product_id_list[this.i])
                // console.log("Predict Product image : "+this.product_image_list[this.i])

                this.i += 1
            }
                
        }

    }



    private onGetDataError(error: Response | any) {
        const body = error.json() || "";
        const err = body.error || JSON.stringify(body);
        console.log("onGetDataError: " + err);
    }

////////////////////////////////////// POST  //////////////////////////////////////////////


    public add(){

        countCart = LocalStorage.getItem("countCart")
        
        if(countCart <= 5){

            if(this.product_id != null){

                countCart+=1
                LocalStorage.setItem("countCart", countCart)
                this.makePostRequest()
                this.makePostRequestCart()
                

                // this.router.navigate(["cart"]);
            }else{
                alert("Please Wait")
            }

            console.log("Count Cart : " + countCart)

        }else{

            alert("Cart is full")
            
        }

        
    }

    private makePostRequest() {
        console.log("makePostRequest");
        this.myService
            .postData({ 
                product: this.product_id,
                customer: this.localid,
                totalprice_per_product: null,
                status_order: null,
            })
            .subscribe(res => {

            },
            err=>{
                console.log("Error : "+JSON.stringify(err));
        });
    }

    private makePostRequestCart() {
        console.log("makePostRequestCart");
        this.myService
            .postDataCart({ 
                product: this.product_id,
                customer: this.localid,
                totalprice_per_product: this.product_price,
            })
            .subscribe(res => {
                alert("Add to Cart Success");

            },
            err=>{
                alert("Add to Cart Error\nPlease try again");
                console.log("Error : "+JSON.stringify(err));
        });
    }

    private makePostSequenceRequest() {

    console.log("makePostSequenceRequest");

    let sequencelist = JSON.parse(JSON.stringify(sequence));
    console.log("sequencelist : "+sequencelist)

    this.myService.postSequenceData({ 

            sequencelist

        })
        .subscribe(res => {
            console.log("Post Sequence Success : "+JSON.stringify(res));
        },
        err=>{
            console.log("Error IN makePostSequenceRequest : "+err);
        });
    }
    
    public product(product_id=0){

        console.log("product_id : "+product_id)
        console.log("URL : "+url)

        if(product_id != 0 && url == 0){
            this.router.navigate(["product1/",product_id]);
            url = 1;
        }
        else if(product_id != 0 && url == 1){
            this.router.navigate(["product/",product_id]);
            url = 0;
        }

        if(product_id == 0){
            alert("Please Wait")
        }

    }

	public cart(){

		this.router.navigate(["cart"]);          // come from path in routing ts

	}

    public home(){

        this.router.navigate(["home"]);          // come from path in routing ts

    }

}


    
    