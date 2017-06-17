import { Component } from "@angular/core";
import { Router, NavigationExtras } from "@angular/router";
import { MyHttpGetService } from "./home.services";
import { ServerComponent } from "./../serverurl"; // get server test
// import * as observable from 'data/observable';
// import * as pages from 'ui/page';
// import {HelloWorldModel} from './main-view-model';

let LocalStorage = require( "nativescript-localstorage" );

@Component({
    selector: "home",
    templateUrl: "./components/home/home.html",
    providers: [MyHttpGetService,ServerComponent]
})


export class HomeComponent{

    // public products: ObservableArray<any>;
    public localid: string;
    public localsearch: string; 

    public product_id: string;
    public product_quantity: number;
    public product_detail: string;

    public new_product_id = [];
    public new_product_name = [];
    public new_product_price = [];
    public new_product_image = [];

    public random_product_id = [];
    public random_product_image = [];

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
    public count:number = 0;

    public myItems:any = [];

    public constructor(private router: Router, private myService: MyHttpGetService, private server: ServerComponent){

        this.localid = LocalStorage.getItem("customer_id");

    }
    
    
    ngOnInit() {

        this.extractDataRandom();
        this.extractDataOrder();
        this.extractDataNew();
        
    }

    extractDataRandom() {
        console.log("getDataRandom");
        this.myService.getDataRandom()
            .subscribe(
            (result) => this.onGetDataSuccessRandom(result),
            (error) => this.onGetDataError(error)
            );
    }

    extractDataOrder() {
        console.log("getDataOrder");
        this.myService.getDataOrder()
            .subscribe(
            (result) => this.onGetDataSuccessOrder(result),
            (error) => this.onGetDataError(error)
            );
    }

    extractDataNew() {
        console.log("getDataNew");
        this.myService.getDataNew()
            .subscribe(
            (result) => this.onGetDataSuccess_new(result),
            (error) => this.onGetDataError(error)
            );
    }

    extractDataSearch() {
        console.log("getDataSearch");
        this.myService.getDataRandom()
            .subscribe(
            (result) => this.onGetDataSuccessSearch(result),
            (error) => this.onGetDataError(error)
            );
    }

    private onGetDataSuccessRandom(res) {

        console.log("Push Items for Search")
        
        console.log("onGetDataSuccess_Random")

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

                if(this.myItems.length != res.length){
                    this.myItems.push(product.product_name.toLowerCase())
                }

                if(product.id == this.ran1){
                    this.random_product_id[0] = product.id;
                    this.random_product_image[0] = product.product_image;
                }
                if(product.id == this.ran2){
                    this.random_product_id[1] = product.id;
                    this.random_product_image[1] = product.product_image;
                }
                if(product.id == this.ran3){
                    this.random_product_id[2] = product.id;
                    this.random_product_image[2] = product.product_image;
                }
                if(product.id == this.ran4){
                    this.random_product_id[3] = product.id;
                    this.random_product_image[3] = product.product_image;
                }
                if(product.id == this.ran5){
                    this.random_product_id[4] = product.id;
                    this.random_product_image[4] = product.product_image;
                }
                if(product.id == this.ran6){
                    this.random_product_id[5] = product.id;
                    this.random_product_image[5] = product.product_image;
                }
                if(product.id == this.ran7){
                    this.random_product_id[6] = product.id;
                    this.random_product_image[6] = product.product_image;
                }
                if(product.id == this.ran8){
                    this.random_product_id[7] = product.id;
                    this.random_product_image[7] = product.product_image;
                }
                if(product.id == this.ran9){
                    this.random_product_id[8] = product.id;
                    this.random_product_image[8] = product.product_image;
                }
                if(product.id == this.ran10){
                    this.random_product_id[9] = product.id;
                    this.random_product_image[9] = product.product_image;
                }
           
        }

    }

    private onGetDataSuccessOrder(res) {
        
        console.log("onGetDataSuccess_Order");

        for (let order of res) {

            console.log("Order In Home : " + order.customer)

                if(order.customer == this.localid){

                     console.log("Order at home : " + order.customer)
                     console.log("Order id : " + order.id)
                     LocalStorage.setItem("order_id", order.id)

                }
        }

    }

    private onGetDataSuccess_new(res) {
        
        console.log("onGetDataSuccess_new_release");

        for (let product of res) {

            if(this.i < 10){

                this.new_product_id[this.i] = product.id;
                this.new_product_name[this.i] = product.product_name;
                this.new_product_price[this.i] = product.product_price;
                this.new_product_image[this.i] = product.product_image;
                // console.log("New Product id : "+ product.id)
                // console.log("New Product image : "+product.product_image)

                this.i += 1
            }
                
        }

    }

    private onGetDataSuccessSearch(res) {

        this.localsearch = LocalStorage.getItem("localsearch");

        for (let product of res) {

            if(product.product_name.toLowerCase() == this.localsearch){
                this.router.navigate(["product/",product.id]);
            }

        }

    }

    private onGetDataError(error: Response | any) {
        const body = error.json() || "";
        const err = body.error || JSON.stringify(body);
        console.log("onGetDataError: " + err);
    }

	public cart(){
		this.router.navigate(["cart"]);          // come from path in routing ts
	}

	public menu(){
		this.router.navigate(["menu"]);          // come from path in routing ts
	}

	public product(product_id=0){

        // let navigationExtras: NavigationExtras = {
        //     queryParams: {
        //         "id": product_id
        //     }
        // };
        // console.log(JSON.stringify(navigationExtras));
        // this.router.navigate(["product/"], navigationExtras);
        this.router.navigate(["product/",product_id]);
        // this.router.navigateByUrl('product/' + product_id);       
	}

	public searchPhrase: string;
    
    public onSubmit(value) {

        // alert("You are searching for " + value);

        // for(var _i = 0; _i < this.myItems.length; _i++){

        var x = 0;
        var out = 0;

        console.log("Search : "+value)
        console.log("this.myItems.length : "+this.myItems.length)

        for(this.count=0 ; this.count<this.myItems.length ; this.count++){

            // console.log("count : "+this.count)
            x += 1;
            if(this.myItems[this.count].toLowerCase() == value.toLowerCase()){

                console.log("Search : "+ value);
                LocalStorage.setItem("localsearch", value.toLowerCase());

                this.extractDataSearch();
                out = 1;

            }

            if(out==0 && x+1 > this.myItems.length){
               console.log("x : "+x)
               console.log("this.myItems.length : "+this.myItems.length)
               alert("No Product Name : "+value)

            }


        }

    }

    onSearchLayoutLoaded(event) {
            event.object.android.setFocusableInTouchMode(true);
        
    }

    onSearchBarLoaded(event) {
            event.object.android.clearFocus();
        
    }

    clearTextfieldFocus(event){
    	event.layout.android.dismissSoftInput();
    }

}

    