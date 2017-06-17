import {Component} from "@angular/core";
import {Router,NavigationExtras} from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { MyHttpGetService } from "./cart.services";
import { ServerComponent } from "./../serverurl"; // get server test
import dialogs = require("ui/dialogs");
let LocalStorage = require( "nativescript-localstorage" );

let countCart = 1;

@Component({

    selector: "cart",
    templateUrl: "./components/cart/cart.html",
    providers: [MyHttpGetService,ServerComponent]

})


export class CartComponent {

	public id:number;
    public localid: number;
    public localorderid = [];

    public del: number;

    public pid: number;

    public product_id = [];
    public customer_id = [];
    public price = [];

    public pname: string;
    public total: number;

    public product_name = [];
    public product_price = [];
    public product_image = [];

    public productCart = []


    

    public i:number = 0
    private j:number = 0
    public num:number = 0
    public f:number = 0

    public count:number = 0

	
    public constructor(private router: Router, private passing: ActivatedRoute, private myService: MyHttpGetService, private server: ServerComponent){
        this.localid = LocalStorage.getItem("customer_id");
        countCart = LocalStorage.getItem("customer_id");

    }

    ngOnInit() {
        this.j = 0;
        // this.extractData();
        this.extractDataCart();
        this.extractData2();
 
    }

    extractDataCart() {
        console.log("extractData");
        this.myService.getDataCart()
            .subscribe(
            (result) => this.onGetDataSuccessCart(result),
            (error) => this.onGetDataError(error)
            );
    }


    extractData2() {
        console.log("Get Products");
        this.myService.getData2()
            .subscribe(
            (result) => this.onGetDataSuccess2(result),
            (error) => this.onGetDataError(error)
            );
    }

    extractData3() {
        console.log("ClearCart");
        this.myService.getDataCart()
            .subscribe(
            (result) => this.onGetDataSuccess3(result),
            (error) => this.onGetDataError(error)
            );
    }

    extractData4() {
        console.log("Get Orders");
        this.myService.getData3()
            .subscribe(
            (result) => this.onGetDataSuccess4(result),
            (error) => this.onGetDataError(error)
            );
    }

    extractData5() {
        console.log("Get ProductInOrders");
        this.myService.getData()
            .subscribe(
            (result) => this.onGetDataSuccess5(result),
            (error) => this.onGetDataError(error)
            );
    }

///////////////////////////// GET CART ////////////////////////////////

    private onGetDataSuccessCart(res) {

        console.log("onGetDataSuccess (cart)");

        for (let cart of res) {

            if(cart.customer == this.localid){

                this.product_id[this.i] =  cart.product;
                this.customer_id[this.i] = cart.customer;
                this.price[this.i] = cart.totalprice_per_product;
                
                console.log("product_id : "+this.product_id[this.i])
                console.log("customer_id : "+this.customer_id[this.i])
                console.log("price : "+this.price[this.i])

                console.log("i : "+this.i)
                this.i+=1;
            }
            
        }

    }


///////////////////////////// SHOW CART ////////////////////////////////

    private onGetDataSuccess2(res) {

        console.log("onGetDataSuccess2 (Product)");

        console.log(this.product_id[0])
        console.log(this.product_id[1])
        console.log(this.product_id[2])
        console.log(this.product_id[3])
        console.log(this.product_id[4])

        for (let product of res) {

            if(this.product_id[0]==product.id){
                this.product_name[0] = product.product_name;
                this.product_price[0] = product.product_price;
                this.product_image[0] = product.product_image;
                // console.log("1 : "+this.product_name[0])
                this.productCart.push(product)
            }

        }

        for (let product of res) {

            if(this.product_id[1]==product.id){
                this.product_name[1] = product.product_name;
                this.product_price[1] = product.product_price;
                this.product_image[1] = product.product_image;
                // console.log("2 : "+this.product_name[1])
                this.productCart.push(product)
            }

        }

        for (let product of res) {

            if(this.product_id[2]==product.id){
                this.product_name[2] = product.product_name;
                this.product_price[2] = product.product_price;
                this.product_image[2] = product.product_image;
                // console.log("3 : "+this.product_name[2])
                this.productCart.push(product)
            }

        }

        for (let product of res) {

            if(this.product_id[3]==product.id){
                this.product_name[3] = product.product_name;
                this.product_price[3] = product.product_price;
                this.product_image[3] = product.product_image;
                // console.log("4 : "+this.product_name[3])
                this.productCart.push(product)

            }

        }

        for (let product of res) {

            if(this.product_id[4]==product.id){
                this.product_name[4] = product.product_name;
                this.product_price[4] = product.product_price;
                this.product_image[4] = product.product_image;
                // console.log("5 : "+this.product_name[4])
                this.productCart.push(product)
            }

        }

        if(this.product_price[0] != null){
            this.total = +parseInt(this.product_price[0])
        }
        if(this.product_price[1] != null){
            this.total = +parseInt(this.product_price[0])+parseInt(this.product_price[1])
        }
        if(this.product_price[2] != null){
            this.total = +parseInt(this.product_price[0])+parseInt(this.product_price[1])+parseInt(this.product_price[2])
        }
        if(this.product_price[3] != null){
            this.total = +parseInt(this.product_price[0])+parseInt(this.product_price[1])+parseInt(this.product_price[2])+parseInt(this.product_price[3])
        }
        if(this.product_price[4] != null){
            this.total = +parseInt(this.product_price[0])+parseInt(this.product_price[1])+parseInt(this.product_price[2])+parseInt(this.product_price[3])+parseInt(this.product_price[4])
        }
        
        console.log("Total : " + this.total)
    }

///////////////////////////////// CLEAR CART ////////////////////////////////////

    private onGetDataSuccess3(res) {
        this.j=0

        console.log("onGetDataSuccess3 (ClearCart)");

        for (let cart of res) {

            if(cart.product == this.product_id[0]){
                   
                   this.pid = cart.id;
                   console.log("cart.id : "+ this.pid)
                   LocalStorage.setItem("del", this.pid);

                   this.myService.deleteData()
                   .subscribe(
                        (result) => console.log("Delete Product1 in Cart Success"),
                        (error) => this.onGetDataError(error)
                   );
            }


        }

        for (let cart of res) {

            if(cart.product == this.product_id[1]){
                   
                   this.pid = cart.id;
                   console.log("cart.id : "+ this.pid)
                   LocalStorage.setItem("del", this.pid);

                   this.myService.deleteData()
                   .subscribe(
                        (result) => console.log("Delete Product2 in Cart Success"),
                        (error) => this.onGetDataError(error)
                   );
            }

        }

        for (let cart of res) {

            if(cart.product == this.product_id[2]){

                   this.pid = cart.id;
                   console.log("cart.id : "+ this.pid)
                   LocalStorage.setItem("del", this.pid);

                   this.myService.deleteData()
                   .subscribe(
                        (result) => console.log("Delete Product3 in Cart Success"),
                        (error) => this.onGetDataError(error)
                   );
            }

        }

        for (let cart of res) {

            if(cart.product == this.product_id[3]){
                   
                   this.pid = cart.id;
                   console.log("cart.id : "+ this.pid)
                   LocalStorage.setItem("del", this.pid);

                   this.myService.deleteData()
                   .subscribe(
                        (result) => console.log("Delete Product4 in Cart Success"),
                        (error) => this.onGetDataError(error)
                   );
            }

        }

        for (let cart of res) {

            if(cart.product == this.product_id[4]){
                   
                   this.pid = cart.id;
                   console.log("cart.id : "+ this.pid)
                   LocalStorage.setItem("del", this.pid);

                   this.myService.deleteData()
                   .subscribe(
                        (result) => console.log("Delete Product5 in Cart Success"),
                        (error) => this.onGetDataError(error)
                   );
            }

        }
    }

    private onGetDataError(error: Response | any) {
        const body = error.json() || "";
        const err = body.error || JSON.stringify(body);
        console.log("onGetDataError: " + err);
        alert("Get Data Err");
        this.router.navigate(["home"]);
    }

///////////////////////////// POST ORDER /////////////////////////////////

    private makePostRequest() {
        console.log("makePostRequest");
        this.myService
            .postData({ 

                customer: this.localid,
                tracking: "XXXXXXXXXXXX",
                status_payment: "1",
                total_price: this.total,
                

            })
            .subscribe(res => {
                alert("Create Order Success");
                this.extractData4();

            },
            err=>{
                alert("Create Order Error\nPlease try again");
                console.log("Error : "+JSON.stringify(err));
            });

        this.extractData3();


    }

//////////////////////////////// GET ORDER ////////////////////////////////////

    private onGetDataSuccess4(res) {

        console.log("onGetDataSuccess (Order)");
        console.log(this.localid);
        // console.log(JSON.stringify(res))
        
        for(let orders of res){

            console.log("/////////////////////// GET ORDER /////////////////////////");
            console.log("order customer id : "+ orders.customer)
            console.log("localid : "+ this.localid)

            if(orders.customer == this.localid){                 // filter order with localid

                    console.log("ORDERID : "+ orders.id)

                    LocalStorage.setItem("order_id", orders.id)
                    this.localorderid = LocalStorage.getItem("order_id")

                    console.log("ORDERID IN LOCAL : "+ this.localorderid)

                    this.extractData5();
            }

            console.log("////////////////////////////////////////////////////////////");
            // this.j=0;
        }
        
    }


//////////////////////////////////   PATCH    ////////////////////////////////////////

    private onGetDataSuccess5(res) { /// PATCH call by onGetDataSuccess4

        console.log("onGetDataSuccess5 (Patch Order in ProductInOrder)");

        let count = 0;

        for (let productinorder of res) {


            if(productinorder.customer == this.localid && productinorder.status_order == null ){

                LocalStorage.setItem("patch", productinorder.id);

                this.localorderid = LocalStorage.getItem("order_id");



                this.myService.patchData({ 
                        order: this.localorderid,
                        product_name: this.product_name[count],
                        totalprice_per_product: this.product_price[count],
                        status_order: "InOrder",
                })
                .subscribe(res => 
                    {
                        // console.log("Patch Order to Product in Order Success "+count);  
                    },
                    err => {
                        this.onGetDataError(err)
                    });

                count+=1

            }

            
        }


    }

//////////////////////////////////////////////////////////////////////////////////////////////////



    public clearCart(){ // clearcart


        dialogs.confirm({
            title: "Clear Cart",
            message: "Do you want Clear Cart?",
            okButtonText: "yes",
            cancelButtonText: "no",
        }).then(result => {

            // result argument is boolean

            if(result == true){

                if(this.product_id.length == 0){
                    this.router.navigate(["home"]);
                }else{
                    countCart = LocalStorage.getItem("countCart")
                    countCart = 1
                    LocalStorage.setItem("countCart", countCart)
                    console.log("countCart : "+ countCart)
                    
                    this.extractData3();
                    this.router.navigate(["home"]);
                    alert("Clear Cart Success");
                }

            }
            else{
                this.router.navigate(["cart"]);
            }

        });

    }

	public checkout(){ // checkout

        countCart=1
        LocalStorage.setItem("countCart", countCart)
        console.log("countCart : "+ countCart)

        dialogs.confirm({
            title: "Cart",
            message: "Do you want to Checkout?",
            okButtonText: "yes",
            cancelButtonText: "no",
        }).then(result => {

            // result argument is boolean

            if(result == true){

                if(this.product_id.length == 0){

                    this.router.navigate(["home"]);

                }else{

                    this.makePostRequest(); // post order / get orderid / patch pio / clearcart
                    this.router.navigate(["paymentdetail"]); 
                }
               
            }
            else
            {
                this.router.navigate(["cart"]);
            }

        });

	}

	public product(product_id=0){

        if(product_id==0){
            this.router.navigate(["home"]);
        }else{
            this.router.navigate(["product/",product_id]); 
        }

	}

    public home(){

        this.router.navigate(["home"]);
    }

}

    
    