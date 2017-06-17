"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var cart_services_1 = require("./cart.services");
var serverurl_1 = require("./../serverurl"); // get server test
var dialogs = require("ui/dialogs");
var LocalStorage = require("nativescript-localstorage");
var countCart = 1;
var CartComponent = (function () {
    function CartComponent(router, passing, myService, server) {
        this.router = router;
        this.passing = passing;
        this.myService = myService;
        this.server = server;
        this.localorderid = [];
        this.product_id = [];
        this.customer_id = [];
        this.price = [];
        this.product_name = [];
        this.product_price = [];
        this.product_image = [];
        this.productCart = [];
        this.i = 0;
        this.j = 0;
        this.num = 0;
        this.f = 0;
        this.count = 0;
        this.localid = LocalStorage.getItem("customer_id");
        countCart = LocalStorage.getItem("customer_id");
    }
    CartComponent.prototype.ngOnInit = function () {
        this.j = 0;
        // this.extractData();
        this.extractDataCart();
        this.extractData2();
    };
    CartComponent.prototype.extractDataCart = function () {
        var _this = this;
        console.log("extractData");
        this.myService.getDataCart()
            .subscribe(function (result) { return _this.onGetDataSuccessCart(result); }, function (error) { return _this.onGetDataError(error); });
    };
    CartComponent.prototype.extractData2 = function () {
        var _this = this;
        console.log("Get Products");
        this.myService.getData2()
            .subscribe(function (result) { return _this.onGetDataSuccess2(result); }, function (error) { return _this.onGetDataError(error); });
    };
    CartComponent.prototype.extractData3 = function () {
        var _this = this;
        console.log("ClearCart");
        this.myService.getDataCart()
            .subscribe(function (result) { return _this.onGetDataSuccess3(result); }, function (error) { return _this.onGetDataError(error); });
    };
    CartComponent.prototype.extractData4 = function () {
        var _this = this;
        console.log("Get Orders");
        this.myService.getData3()
            .subscribe(function (result) { return _this.onGetDataSuccess4(result); }, function (error) { return _this.onGetDataError(error); });
    };
    CartComponent.prototype.extractData5 = function () {
        var _this = this;
        console.log("Get ProductInOrders");
        this.myService.getData()
            .subscribe(function (result) { return _this.onGetDataSuccess5(result); }, function (error) { return _this.onGetDataError(error); });
    };
    ///////////////////////////// GET CART ////////////////////////////////
    CartComponent.prototype.onGetDataSuccessCart = function (res) {
        console.log("onGetDataSuccess (cart)");
        for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
            var cart = res_1[_i];
            if (cart.customer == this.localid) {
                this.product_id[this.i] = cart.product;
                this.customer_id[this.i] = cart.customer;
                this.price[this.i] = cart.totalprice_per_product;
                console.log("product_id : " + this.product_id[this.i]);
                console.log("customer_id : " + this.customer_id[this.i]);
                console.log("price : " + this.price[this.i]);
                console.log("i : " + this.i);
                this.i += 1;
            }
        }
    };
    ///////////////////////////// SHOW CART ////////////////////////////////
    CartComponent.prototype.onGetDataSuccess2 = function (res) {
        console.log("onGetDataSuccess2 (Product)");
        console.log(this.product_id[0]);
        console.log(this.product_id[1]);
        console.log(this.product_id[2]);
        console.log(this.product_id[3]);
        console.log(this.product_id[4]);
        for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
            var product = res_2[_i];
            if (this.product_id[0] == product.id) {
                this.product_name[0] = product.product_name;
                this.product_price[0] = product.product_price;
                this.product_image[0] = product.product_image;
                // console.log("1 : "+this.product_name[0])
                this.productCart.push(product);
            }
        }
        for (var _a = 0, res_3 = res; _a < res_3.length; _a++) {
            var product = res_3[_a];
            if (this.product_id[1] == product.id) {
                this.product_name[1] = product.product_name;
                this.product_price[1] = product.product_price;
                this.product_image[1] = product.product_image;
                // console.log("2 : "+this.product_name[1])
                this.productCart.push(product);
            }
        }
        for (var _b = 0, res_4 = res; _b < res_4.length; _b++) {
            var product = res_4[_b];
            if (this.product_id[2] == product.id) {
                this.product_name[2] = product.product_name;
                this.product_price[2] = product.product_price;
                this.product_image[2] = product.product_image;
                // console.log("3 : "+this.product_name[2])
                this.productCart.push(product);
            }
        }
        for (var _c = 0, res_5 = res; _c < res_5.length; _c++) {
            var product = res_5[_c];
            if (this.product_id[3] == product.id) {
                this.product_name[3] = product.product_name;
                this.product_price[3] = product.product_price;
                this.product_image[3] = product.product_image;
                // console.log("4 : "+this.product_name[3])
                this.productCart.push(product);
            }
        }
        for (var _d = 0, res_6 = res; _d < res_6.length; _d++) {
            var product = res_6[_d];
            if (this.product_id[4] == product.id) {
                this.product_name[4] = product.product_name;
                this.product_price[4] = product.product_price;
                this.product_image[4] = product.product_image;
                // console.log("5 : "+this.product_name[4])
                this.productCart.push(product);
            }
        }
        if (this.product_price[0] != null) {
            this.total = +parseInt(this.product_price[0]);
        }
        if (this.product_price[1] != null) {
            this.total = +parseInt(this.product_price[0]) + parseInt(this.product_price[1]);
        }
        if (this.product_price[2] != null) {
            this.total = +parseInt(this.product_price[0]) + parseInt(this.product_price[1]) + parseInt(this.product_price[2]);
        }
        if (this.product_price[3] != null) {
            this.total = +parseInt(this.product_price[0]) + parseInt(this.product_price[1]) + parseInt(this.product_price[2]) + parseInt(this.product_price[3]);
        }
        if (this.product_price[4] != null) {
            this.total = +parseInt(this.product_price[0]) + parseInt(this.product_price[1]) + parseInt(this.product_price[2]) + parseInt(this.product_price[3]) + parseInt(this.product_price[4]);
        }
        console.log("Total : " + this.total);
    };
    ///////////////////////////////// CLEAR CART ////////////////////////////////////
    CartComponent.prototype.onGetDataSuccess3 = function (res) {
        var _this = this;
        this.j = 0;
        console.log("onGetDataSuccess3 (ClearCart)");
        for (var _i = 0, res_7 = res; _i < res_7.length; _i++) {
            var cart = res_7[_i];
            if (cart.product == this.product_id[0]) {
                this.pid = cart.id;
                console.log("cart.id : " + this.pid);
                LocalStorage.setItem("del", this.pid);
                this.myService.deleteData()
                    .subscribe(function (result) { return console.log("Delete Product1 in Cart Success"); }, function (error) { return _this.onGetDataError(error); });
            }
        }
        for (var _a = 0, res_8 = res; _a < res_8.length; _a++) {
            var cart = res_8[_a];
            if (cart.product == this.product_id[1]) {
                this.pid = cart.id;
                console.log("cart.id : " + this.pid);
                LocalStorage.setItem("del", this.pid);
                this.myService.deleteData()
                    .subscribe(function (result) { return console.log("Delete Product2 in Cart Success"); }, function (error) { return _this.onGetDataError(error); });
            }
        }
        for (var _b = 0, res_9 = res; _b < res_9.length; _b++) {
            var cart = res_9[_b];
            if (cart.product == this.product_id[2]) {
                this.pid = cart.id;
                console.log("cart.id : " + this.pid);
                LocalStorage.setItem("del", this.pid);
                this.myService.deleteData()
                    .subscribe(function (result) { return console.log("Delete Product3 in Cart Success"); }, function (error) { return _this.onGetDataError(error); });
            }
        }
        for (var _c = 0, res_10 = res; _c < res_10.length; _c++) {
            var cart = res_10[_c];
            if (cart.product == this.product_id[3]) {
                this.pid = cart.id;
                console.log("cart.id : " + this.pid);
                LocalStorage.setItem("del", this.pid);
                this.myService.deleteData()
                    .subscribe(function (result) { return console.log("Delete Product4 in Cart Success"); }, function (error) { return _this.onGetDataError(error); });
            }
        }
        for (var _d = 0, res_11 = res; _d < res_11.length; _d++) {
            var cart = res_11[_d];
            if (cart.product == this.product_id[4]) {
                this.pid = cart.id;
                console.log("cart.id : " + this.pid);
                LocalStorage.setItem("del", this.pid);
                this.myService.deleteData()
                    .subscribe(function (result) { return console.log("Delete Product5 in Cart Success"); }, function (error) { return _this.onGetDataError(error); });
            }
        }
    };
    CartComponent.prototype.onGetDataError = function (error) {
        var body = error.json() || "";
        var err = body.error || JSON.stringify(body);
        console.log("onGetDataError: " + err);
        alert("Get Data Err");
        this.router.navigate(["home"]);
    };
    ///////////////////////////// POST ORDER /////////////////////////////////
    CartComponent.prototype.makePostRequest = function () {
        var _this = this;
        console.log("makePostRequest");
        this.myService
            .postData({
            customer: this.localid,
            tracking: "XXXXXXXXXXXX",
            status_payment: "1",
            total_price: this.total,
        })
            .subscribe(function (res) {
            alert("Create Order Success");
            _this.extractData4();
        }, function (err) {
            alert("Create Order Error\nPlease try again");
            console.log("Error : " + JSON.stringify(err));
        });
        this.extractData3();
    };
    //////////////////////////////// GET ORDER ////////////////////////////////////
    CartComponent.prototype.onGetDataSuccess4 = function (res) {
        console.log("onGetDataSuccess (Order)");
        console.log(this.localid);
        // console.log(JSON.stringify(res))
        for (var _i = 0, res_12 = res; _i < res_12.length; _i++) {
            var orders = res_12[_i];
            console.log("/////////////////////// GET ORDER /////////////////////////");
            console.log("order customer id : " + orders.customer);
            console.log("localid : " + this.localid);
            if (orders.customer == this.localid) {
                console.log("ORDERID : " + orders.id);
                LocalStorage.setItem("order_id", orders.id);
                this.localorderid = LocalStorage.getItem("order_id");
                console.log("ORDERID IN LOCAL : " + this.localorderid);
                this.extractData5();
            }
            console.log("////////////////////////////////////////////////////////////");
        }
    };
    //////////////////////////////////   PATCH    ////////////////////////////////////////
    CartComponent.prototype.onGetDataSuccess5 = function (res) {
        var _this = this;
        console.log("onGetDataSuccess5 (Patch Order in ProductInOrder)");
        var count = 0;
        for (var _i = 0, res_13 = res; _i < res_13.length; _i++) {
            var productinorder = res_13[_i];
            if (productinorder.customer == this.localid && productinorder.status_order == null) {
                LocalStorage.setItem("patch", productinorder.id);
                this.localorderid = LocalStorage.getItem("order_id");
                this.myService.patchData({
                    order: this.localorderid,
                    product_name: this.product_name[count],
                    totalprice_per_product: this.product_price[count],
                    status_order: "InOrder",
                })
                    .subscribe(function (res) {
                    // console.log("Patch Order to Product in Order Success "+count);  
                }, function (err) {
                    _this.onGetDataError(err);
                });
                count += 1;
            }
        }
    };
    //////////////////////////////////////////////////////////////////////////////////////////////////
    CartComponent.prototype.clearCart = function () {
        var _this = this;
        dialogs.confirm({
            title: "Clear Cart",
            message: "Do you want Clear Cart?",
            okButtonText: "yes",
            cancelButtonText: "no",
        }).then(function (result) {
            // result argument is boolean
            if (result == true) {
                if (_this.product_id.length == 0) {
                    _this.router.navigate(["home"]);
                }
                else {
                    countCart = LocalStorage.getItem("countCart");
                    countCart = 1;
                    LocalStorage.setItem("countCart", countCart);
                    console.log("countCart : " + countCart);
                    _this.extractData3();
                    _this.router.navigate(["home"]);
                    alert("Clear Cart Success");
                }
            }
            else {
                _this.router.navigate(["cart"]);
            }
        });
    };
    CartComponent.prototype.checkout = function () {
        var _this = this;
        countCart = 1;
        LocalStorage.setItem("countCart", countCart);
        console.log("countCart : " + countCart);
        dialogs.confirm({
            title: "Cart",
            message: "Do you want to Checkout?",
            okButtonText: "yes",
            cancelButtonText: "no",
        }).then(function (result) {
            // result argument is boolean
            if (result == true) {
                if (_this.product_id.length == 0) {
                    _this.router.navigate(["home"]);
                }
                else {
                    _this.makePostRequest(); // post order / get orderid / patch pio / clearcart
                    _this.router.navigate(["paymentdetail"]);
                }
            }
            else {
                _this.router.navigate(["cart"]);
            }
        });
    };
    CartComponent.prototype.product = function (product_id) {
        if (product_id === void 0) { product_id = 0; }
        if (product_id == 0) {
            this.router.navigate(["home"]);
        }
        else {
            this.router.navigate(["product/", product_id]);
        }
    };
    CartComponent.prototype.home = function () {
        this.router.navigate(["home"]);
    };
    return CartComponent;
}());
CartComponent = __decorate([
    core_1.Component({
        selector: "cart",
        templateUrl: "./components/cart/cart.html",
        providers: [cart_services_1.MyHttpGetService, serverurl_1.ServerComponent]
    }),
    __metadata("design:paramtypes", [router_1.Router, router_2.ActivatedRoute, cart_services_1.MyHttpGetService, serverurl_1.ServerComponent])
], CartComponent);
exports.CartComponent = CartComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQUN4QywwQ0FBd0Q7QUFDeEQsMENBQWlEO0FBQ2pELGlEQUFtRDtBQUNuRCw0Q0FBaUQsQ0FBQyxrQkFBa0I7QUFDcEUsb0NBQXVDO0FBQ3ZDLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBRSwyQkFBMkIsQ0FBRSxDQUFDO0FBRTFELElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztBQVdsQixJQUFhLGFBQWE7SUFrQ3RCLHVCQUEyQixNQUFjLEVBQVUsT0FBdUIsRUFBVSxTQUEyQixFQUFVLE1BQXVCO1FBQXJILFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUE5QnpJLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBTWxCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUtYLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBRW5CLGdCQUFXLEdBQUcsRUFBRSxDQUFBO1FBS2hCLE1BQUMsR0FBVSxDQUFDLENBQUE7UUFDWCxNQUFDLEdBQVUsQ0FBQyxDQUFBO1FBQ2IsUUFBRyxHQUFVLENBQUMsQ0FBQTtRQUNkLE1BQUMsR0FBVSxDQUFDLENBQUE7UUFFWixVQUFLLEdBQVUsQ0FBQyxDQUFBO1FBSW5CLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuRCxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUVwRCxDQUFDO0lBRUQs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LFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ2xELENBQUM7SUFFUixDQUFDO0lBRVMsNEJBQUksR0FBWDtRQUVJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUwsb0JBQUM7QUFBRCxDQUFDLEFBaGdCRCxJQWdnQkM7QUFoZ0JZLGFBQWE7SUFUekIsZ0JBQVMsQ0FBQztRQUVQLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSw2QkFBNkI7UUFDMUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdCLEVBQUMsMkJBQWUsQ0FBQztLQUVoRCxDQUFDO3FDQXFDcUMsZUFBTSxFQUFtQix1QkFBYyxFQUFxQixnQ0FBZ0IsRUFBa0IsMkJBQWU7R0FsQ3ZJLGFBQWEsQ0FnZ0J6QjtBQWhnQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyLE5hdmlnYXRpb25FeHRyYXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTXlIdHRwR2V0U2VydmljZSB9IGZyb20gXCIuL2NhcnQuc2VydmljZXNcIjtcbmltcG9ydCB7IFNlcnZlckNvbXBvbmVudCB9IGZyb20gXCIuLy4uL3NlcnZlcnVybFwiOyAvLyBnZXQgc2VydmVyIHRlc3RcbmltcG9ydCBkaWFsb2dzID0gcmVxdWlyZShcInVpL2RpYWxvZ3NcIik7XG5sZXQgTG9jYWxTdG9yYWdlID0gcmVxdWlyZSggXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIgKTtcblxubGV0IGNvdW50Q2FydCA9IDE7XG5cbkBDb21wb25lbnQoe1xuXG4gICAgc2VsZWN0b3I6IFwiY2FydFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29tcG9uZW50cy9jYXJ0L2NhcnQuaHRtbFwiLFxuICAgIHByb3ZpZGVyczogW015SHR0cEdldFNlcnZpY2UsU2VydmVyQ29tcG9uZW50XVxuXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBDYXJ0Q29tcG9uZW50IHtcblxuXHRwdWJsaWMgaWQ6bnVtYmVyO1xuICAgIHB1YmxpYyBsb2NhbGlkOiBudW1iZXI7XG4gICAgcHVibGljIGxvY2Fsb3JkZXJpZCA9IFtdO1xuXG4gICAgcHVibGljIGRlbDogbnVtYmVyO1xuXG4gICAgcHVibGljIHBpZDogbnVtYmVyO1xuXG4gICAgcHVibGljIHByb2R1Y3RfaWQgPSBbXTtcbiAgICBwdWJsaWMgY3VzdG9tZXJfaWQgPSBbXTtcbiAgICBwdWJsaWMgcHJpY2UgPSBbXTtcblxuICAgIHB1YmxpYyBwbmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyB0b3RhbDogbnVtYmVyO1xuXG4gICAgcHVibGljIHByb2R1Y3RfbmFtZSA9IFtdO1xuICAgIHB1YmxpYyBwcm9kdWN0X3ByaWNlID0gW107XG4gICAgcHVibGljIHByb2R1Y3RfaW1hZ2UgPSBbXTtcblxuICAgIHB1YmxpYyBwcm9kdWN0Q2FydCA9IFtdXG5cblxuICAgIFxuXG4gICAgcHVibGljIGk6bnVtYmVyID0gMFxuICAgIHByaXZhdGUgajpudW1iZXIgPSAwXG4gICAgcHVibGljIG51bTpudW1iZXIgPSAwXG4gICAgcHVibGljIGY6bnVtYmVyID0gMFxuXG4gICAgcHVibGljIGNvdW50Om51bWJlciA9IDBcblxuXHRcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBwYXNzaW5nOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBteVNlcnZpY2U6IE15SHR0cEdldFNlcnZpY2UsIHByaXZhdGUgc2VydmVyOiBTZXJ2ZXJDb21wb25lbnQpe1xuICAgICAgICB0aGlzLmxvY2FsaWQgPSBMb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1c3RvbWVyX2lkXCIpO1xuICAgICAgICBjb3VudENhcnQgPSBMb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1c3RvbWVyX2lkXCIpO1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuaiA9IDA7XG4gICAgICAgIC8vIHRoaXMuZXh0cmFjdERhdGEoKTtcbiAgICAgICAgdGhpcy5leHRyYWN0RGF0YUNhcnQoKTtcbiAgICAgICAgdGhpcy5leHRyYWN0RGF0YTIoKTtcbiBcbiAgICB9XG5cbiAgICBleHRyYWN0RGF0YUNhcnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXh0cmFjdERhdGFcIik7XG4gICAgICAgIHRoaXMubXlTZXJ2aWNlLmdldERhdGFDYXJ0KClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzdWx0KSA9PiB0aGlzLm9uR2V0RGF0YVN1Y2Nlc3NDYXJ0KHJlc3VsdCksXG4gICAgICAgICAgICAoZXJyb3IpID0+IHRoaXMub25HZXREYXRhRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuXG4gICAgZXh0cmFjdERhdGEyKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkdldCBQcm9kdWN0c1wiKTtcbiAgICAgICAgdGhpcy5teVNlcnZpY2UuZ2V0RGF0YTIoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXN1bHQpID0+IHRoaXMub25HZXREYXRhU3VjY2VzczIocmVzdWx0KSxcbiAgICAgICAgICAgIChlcnJvcikgPT4gdGhpcy5vbkdldERhdGFFcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgZXh0cmFjdERhdGEzKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNsZWFyQ2FydFwiKTtcbiAgICAgICAgdGhpcy5teVNlcnZpY2UuZ2V0RGF0YUNhcnQoKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXN1bHQpID0+IHRoaXMub25HZXREYXRhU3VjY2VzczMocmVzdWx0KSxcbiAgICAgICAgICAgIChlcnJvcikgPT4gdGhpcy5vbkdldERhdGFFcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgZXh0cmFjdERhdGE0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkdldCBPcmRlcnNcIik7XG4gICAgICAgIHRoaXMubXlTZXJ2aWNlLmdldERhdGEzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzdWx0KSA9PiB0aGlzLm9uR2V0RGF0YVN1Y2Nlc3M0KHJlc3VsdCksXG4gICAgICAgICAgICAoZXJyb3IpID0+IHRoaXMub25HZXREYXRhRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuICAgIGV4dHJhY3REYXRhNSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJHZXQgUHJvZHVjdEluT3JkZXJzXCIpO1xuICAgICAgICB0aGlzLm15U2VydmljZS5nZXREYXRhKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzdWx0KSA9PiB0aGlzLm9uR2V0RGF0YVN1Y2Nlc3M1KHJlc3VsdCksXG4gICAgICAgICAgICAoZXJyb3IpID0+IHRoaXMub25HZXREYXRhRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gR0VUIENBUlQgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHByaXZhdGUgb25HZXREYXRhU3VjY2Vzc0NhcnQocmVzKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJvbkdldERhdGFTdWNjZXNzIChjYXJ0KVwiKTtcblxuICAgICAgICBmb3IgKGxldCBjYXJ0IG9mIHJlcykge1xuXG4gICAgICAgICAgICBpZihjYXJ0LmN1c3RvbWVyID09IHRoaXMubG9jYWxpZCl7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RfaWRbdGhpcy5pXSA9ICBjYXJ0LnByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21lcl9pZFt0aGlzLmldID0gY2FydC5jdXN0b21lcjtcbiAgICAgICAgICAgICAgICB0aGlzLnByaWNlW3RoaXMuaV0gPSBjYXJ0LnRvdGFscHJpY2VfcGVyX3Byb2R1Y3Q7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm9kdWN0X2lkIDogXCIrdGhpcy5wcm9kdWN0X2lkW3RoaXMuaV0pXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXN0b21lcl9pZCA6IFwiK3RoaXMuY3VzdG9tZXJfaWRbdGhpcy5pXSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInByaWNlIDogXCIrdGhpcy5wcmljZVt0aGlzLmldKVxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpIDogXCIrdGhpcy5pKVxuICAgICAgICAgICAgICAgIHRoaXMuaSs9MTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICB9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gU0hPVyBDQVJUIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBwcml2YXRlIG9uR2V0RGF0YVN1Y2Nlc3MyKHJlcykge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25HZXREYXRhU3VjY2VzczIgKFByb2R1Y3QpXCIpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZHVjdF9pZFswXSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9kdWN0X2lkWzFdKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb2R1Y3RfaWRbMl0pXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvZHVjdF9pZFszXSlcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9kdWN0X2lkWzRdKVxuXG4gICAgICAgIGZvciAobGV0IHByb2R1Y3Qgb2YgcmVzKSB7XG5cbiAgICAgICAgICAgIGlmKHRoaXMucHJvZHVjdF9pZFswXT09cHJvZHVjdC5pZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0X25hbWVbMF0gPSBwcm9kdWN0LnByb2R1Y3RfbmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RfcHJpY2VbMF0gPSBwcm9kdWN0LnByb2R1Y3RfcHJpY2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0X2ltYWdlWzBdID0gcHJvZHVjdC5wcm9kdWN0X2ltYWdlO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiMSA6IFwiK3RoaXMucHJvZHVjdF9uYW1lWzBdKVxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdENhcnQucHVzaChwcm9kdWN0KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBwcm9kdWN0IG9mIHJlcykge1xuXG4gICAgICAgICAgICBpZih0aGlzLnByb2R1Y3RfaWRbMV09PXByb2R1Y3QuaWQpe1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdF9uYW1lWzFdID0gcHJvZHVjdC5wcm9kdWN0X25hbWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0X3ByaWNlWzFdID0gcHJvZHVjdC5wcm9kdWN0X3ByaWNlO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdF9pbWFnZVsxXSA9IHByb2R1Y3QucHJvZHVjdF9pbWFnZTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIjIgOiBcIit0aGlzLnByb2R1Y3RfbmFtZVsxXSlcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RDYXJ0LnB1c2gocHJvZHVjdClcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgcHJvZHVjdCBvZiByZXMpIHtcblxuICAgICAgICAgICAgaWYodGhpcy5wcm9kdWN0X2lkWzJdPT1wcm9kdWN0LmlkKXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RfbmFtZVsyXSA9IHByb2R1Y3QucHJvZHVjdF9uYW1lO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdF9wcmljZVsyXSA9IHByb2R1Y3QucHJvZHVjdF9wcmljZTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RfaW1hZ2VbMl0gPSBwcm9kdWN0LnByb2R1Y3RfaW1hZ2U7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCIzIDogXCIrdGhpcy5wcm9kdWN0X25hbWVbMl0pXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0Q2FydC5wdXNoKHByb2R1Y3QpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHByb2R1Y3Qgb2YgcmVzKSB7XG5cbiAgICAgICAgICAgIGlmKHRoaXMucHJvZHVjdF9pZFszXT09cHJvZHVjdC5pZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0X25hbWVbM10gPSBwcm9kdWN0LnByb2R1Y3RfbmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RfcHJpY2VbM10gPSBwcm9kdWN0LnByb2R1Y3RfcHJpY2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0X2ltYWdlWzNdID0gcHJvZHVjdC5wcm9kdWN0X2ltYWdlO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiNCA6IFwiK3RoaXMucHJvZHVjdF9uYW1lWzNdKVxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdENhcnQucHVzaChwcm9kdWN0KVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IHByb2R1Y3Qgb2YgcmVzKSB7XG5cbiAgICAgICAgICAgIGlmKHRoaXMucHJvZHVjdF9pZFs0XT09cHJvZHVjdC5pZCl7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0X25hbWVbNF0gPSBwcm9kdWN0LnByb2R1Y3RfbmFtZTtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RfcHJpY2VbNF0gPSBwcm9kdWN0LnByb2R1Y3RfcHJpY2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9kdWN0X2ltYWdlWzRdID0gcHJvZHVjdC5wcm9kdWN0X2ltYWdlO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiNSA6IFwiK3RoaXMucHJvZHVjdF9uYW1lWzRdKVxuICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdENhcnQucHVzaChwcm9kdWN0KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnByb2R1Y3RfcHJpY2VbMF0gIT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLnRvdGFsID0gK3BhcnNlSW50KHRoaXMucHJvZHVjdF9wcmljZVswXSlcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb2R1Y3RfcHJpY2VbMV0gIT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLnRvdGFsID0gK3BhcnNlSW50KHRoaXMucHJvZHVjdF9wcmljZVswXSkrcGFyc2VJbnQodGhpcy5wcm9kdWN0X3ByaWNlWzFdKVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucHJvZHVjdF9wcmljZVsyXSAhPSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMudG90YWwgPSArcGFyc2VJbnQodGhpcy5wcm9kdWN0X3ByaWNlWzBdKStwYXJzZUludCh0aGlzLnByb2R1Y3RfcHJpY2VbMV0pK3BhcnNlSW50KHRoaXMucHJvZHVjdF9wcmljZVsyXSlcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb2R1Y3RfcHJpY2VbM10gIT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLnRvdGFsID0gK3BhcnNlSW50KHRoaXMucHJvZHVjdF9wcmljZVswXSkrcGFyc2VJbnQodGhpcy5wcm9kdWN0X3ByaWNlWzFdKStwYXJzZUludCh0aGlzLnByb2R1Y3RfcHJpY2VbMl0pK3BhcnNlSW50KHRoaXMucHJvZHVjdF9wcmljZVszXSlcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnByb2R1Y3RfcHJpY2VbNF0gIT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLnRvdGFsID0gK3BhcnNlSW50KHRoaXMucHJvZHVjdF9wcmljZVswXSkrcGFyc2VJbnQodGhpcy5wcm9kdWN0X3ByaWNlWzFdKStwYXJzZUludCh0aGlzLnByb2R1Y3RfcHJpY2VbMl0pK3BhcnNlSW50KHRoaXMucHJvZHVjdF9wcmljZVszXSkrcGFyc2VJbnQodGhpcy5wcm9kdWN0X3ByaWNlWzRdKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhcIlRvdGFsIDogXCIgKyB0aGlzLnRvdGFsKVxuICAgIH1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIENMRUFSIENBUlQgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBwcml2YXRlIG9uR2V0RGF0YVN1Y2Nlc3MzKHJlcykge1xuICAgICAgICB0aGlzLmo9MFxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25HZXREYXRhU3VjY2VzczMgKENsZWFyQ2FydClcIik7XG5cbiAgICAgICAgZm9yIChsZXQgY2FydCBvZiByZXMpIHtcblxuICAgICAgICAgICAgaWYoY2FydC5wcm9kdWN0ID09IHRoaXMucHJvZHVjdF9pZFswXSl7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgdGhpcy5waWQgPSBjYXJ0LmlkO1xuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FydC5pZCA6IFwiKyB0aGlzLnBpZClcbiAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRlbFwiLCB0aGlzLnBpZCk7XG5cbiAgICAgICAgICAgICAgICAgICB0aGlzLm15U2VydmljZS5kZWxldGVEYXRhKClcbiAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3VsdCkgPT4gY29uc29sZS5sb2coXCJEZWxldGUgUHJvZHVjdDEgaW4gQ2FydCBTdWNjZXNzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB0aGlzLm9uR2V0RGF0YUVycm9yKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgY2FydCBvZiByZXMpIHtcblxuICAgICAgICAgICAgaWYoY2FydC5wcm9kdWN0ID09IHRoaXMucHJvZHVjdF9pZFsxXSl7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgdGhpcy5waWQgPSBjYXJ0LmlkO1xuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FydC5pZCA6IFwiKyB0aGlzLnBpZClcbiAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRlbFwiLCB0aGlzLnBpZCk7XG5cbiAgICAgICAgICAgICAgICAgICB0aGlzLm15U2VydmljZS5kZWxldGVEYXRhKClcbiAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3VsdCkgPT4gY29uc29sZS5sb2coXCJEZWxldGUgUHJvZHVjdDIgaW4gQ2FydCBTdWNjZXNzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB0aGlzLm9uR2V0RGF0YUVycm9yKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGNhcnQgb2YgcmVzKSB7XG5cbiAgICAgICAgICAgIGlmKGNhcnQucHJvZHVjdCA9PSB0aGlzLnByb2R1Y3RfaWRbMl0pe1xuXG4gICAgICAgICAgICAgICAgICAgdGhpcy5waWQgPSBjYXJ0LmlkO1xuICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2FydC5pZCA6IFwiKyB0aGlzLnBpZClcbiAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImRlbFwiLCB0aGlzLnBpZCk7XG5cbiAgICAgICAgICAgICAgICAgICB0aGlzLm15U2VydmljZS5kZWxldGVEYXRhKClcbiAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3VsdCkgPT4gY29uc29sZS5sb2coXCJEZWxldGUgUHJvZHVjdDMgaW4gQ2FydCBTdWNjZXNzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB0aGlzLm9uR2V0RGF0YUVycm9yKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGNhcnQgb2YgcmVzKSB7XG5cbiAgICAgICAgICAgIGlmKGNhcnQucHJvZHVjdCA9PSB0aGlzLnByb2R1Y3RfaWRbM10pe1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIHRoaXMucGlkID0gY2FydC5pZDtcbiAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhcnQuaWQgOiBcIisgdGhpcy5waWQpXG4gICAgICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkZWxcIiwgdGhpcy5waWQpO1xuXG4gICAgICAgICAgICAgICAgICAgdGhpcy5teVNlcnZpY2UuZGVsZXRlRGF0YSgpXG4gICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXN1bHQpID0+IGNvbnNvbGUubG9nKFwiRGVsZXRlIFByb2R1Y3Q0IGluIENhcnQgU3VjY2Vzc1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4gdGhpcy5vbkdldERhdGFFcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBjYXJ0IG9mIHJlcykge1xuXG4gICAgICAgICAgICBpZihjYXJ0LnByb2R1Y3QgPT0gdGhpcy5wcm9kdWN0X2lkWzRdKXtcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICB0aGlzLnBpZCA9IGNhcnQuaWQ7XG4gICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYXJ0LmlkIDogXCIrIHRoaXMucGlkKVxuICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGVsXCIsIHRoaXMucGlkKTtcblxuICAgICAgICAgICAgICAgICAgIHRoaXMubXlTZXJ2aWNlLmRlbGV0ZURhdGEoKVxuICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVzdWx0KSA9PiBjb25zb2xlLmxvZyhcIkRlbGV0ZSBQcm9kdWN0NSBpbiBDYXJ0IFN1Y2Nlc3NcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHRoaXMub25HZXREYXRhRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkdldERhdGFFcnJvcihlcnJvcjogUmVzcG9uc2UgfCBhbnkpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGVycm9yLmpzb24oKSB8fCBcIlwiO1xuICAgICAgICBjb25zdCBlcnIgPSBib2R5LmVycm9yIHx8IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uR2V0RGF0YUVycm9yOiBcIiArIGVycik7XG4gICAgICAgIGFsZXJ0KFwiR2V0IERhdGEgRXJyXCIpO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJob21lXCJdKTtcbiAgICB9XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFBPU1QgT1JERVIgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbiAgICBwcml2YXRlIG1ha2VQb3N0UmVxdWVzdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJtYWtlUG9zdFJlcXVlc3RcIik7XG4gICAgICAgIHRoaXMubXlTZXJ2aWNlXG4gICAgICAgICAgICAucG9zdERhdGEoeyBcblxuICAgICAgICAgICAgICAgIGN1c3RvbWVyOiB0aGlzLmxvY2FsaWQsXG4gICAgICAgICAgICAgICAgdHJhY2tpbmc6IFwiWFhYWFhYWFhYWFhYXCIsXG4gICAgICAgICAgICAgICAgc3RhdHVzX3BheW1lbnQ6IFwiMVwiLFxuICAgICAgICAgICAgICAgIHRvdGFsX3ByaWNlOiB0aGlzLnRvdGFsLFxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQ3JlYXRlIE9yZGVyIFN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0RGF0YTQoKTtcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycj0+e1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQ3JlYXRlIE9yZGVyIEVycm9yXFxuUGxlYXNlIHRyeSBhZ2FpblwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIDogXCIrSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmV4dHJhY3REYXRhMygpO1xuXG5cbiAgICB9XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIEdFVCBPUkRFUiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHByaXZhdGUgb25HZXREYXRhU3VjY2VzczQocmVzKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJvbkdldERhdGFTdWNjZXNzIChPcmRlcilcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubG9jYWxpZCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcykpXG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IG9yZGVycyBvZiByZXMpe1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIEdFVCBPUkRFUiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJvcmRlciBjdXN0b21lciBpZCA6IFwiKyBvcmRlcnMuY3VzdG9tZXIpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvY2FsaWQgOiBcIisgdGhpcy5sb2NhbGlkKVxuXG4gICAgICAgICAgICBpZihvcmRlcnMuY3VzdG9tZXIgPT0gdGhpcy5sb2NhbGlkKXsgICAgICAgICAgICAgICAgIC8vIGZpbHRlciBvcmRlciB3aXRoIGxvY2FsaWRcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9SREVSSUQgOiBcIisgb3JkZXJzLmlkKVxuXG4gICAgICAgICAgICAgICAgICAgIExvY2FsU3RvcmFnZS5zZXRJdGVtKFwib3JkZXJfaWRcIiwgb3JkZXJzLmlkKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2Fsb3JkZXJpZCA9IExvY2FsU3RvcmFnZS5nZXRJdGVtKFwib3JkZXJfaWRcIilcblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9SREVSSUQgSU4gTE9DQUwgOiBcIisgdGhpcy5sb2NhbG9yZGVyaWQpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRyYWN0RGF0YTUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cIik7XG4gICAgICAgICAgICAvLyB0aGlzLmo9MDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAgIFBBVENIICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuICAgIHByaXZhdGUgb25HZXREYXRhU3VjY2VzczUocmVzKSB7IC8vLyBQQVRDSCBjYWxsIGJ5IG9uR2V0RGF0YVN1Y2Nlc3M0XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJvbkdldERhdGFTdWNjZXNzNSAoUGF0Y2ggT3JkZXIgaW4gUHJvZHVjdEluT3JkZXIpXCIpO1xuXG4gICAgICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICAgICAgZm9yIChsZXQgcHJvZHVjdGlub3JkZXIgb2YgcmVzKSB7XG5cblxuICAgICAgICAgICAgaWYocHJvZHVjdGlub3JkZXIuY3VzdG9tZXIgPT0gdGhpcy5sb2NhbGlkICYmIHByb2R1Y3Rpbm9yZGVyLnN0YXR1c19vcmRlciA9PSBudWxsICl7XG5cbiAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInBhdGNoXCIsIHByb2R1Y3Rpbm9yZGVyLmlkKTtcblxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxvcmRlcmlkID0gTG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJvcmRlcl9pZFwiKTtcblxuXG5cbiAgICAgICAgICAgICAgICB0aGlzLm15U2VydmljZS5wYXRjaERhdGEoeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yZGVyOiB0aGlzLmxvY2Fsb3JkZXJpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfbmFtZTogdGhpcy5wcm9kdWN0X25hbWVbY291bnRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxwcmljZV9wZXJfcHJvZHVjdDogdGhpcy5wcm9kdWN0X3ByaWNlW2NvdW50XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c19vcmRlcjogXCJJbk9yZGVyXCIsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJQYXRjaCBPcmRlciB0byBQcm9kdWN0IGluIE9yZGVyIFN1Y2Nlc3MgXCIrY291bnQpOyAgXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uR2V0RGF0YUVycm9yKGVycilcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb3VudCs9MVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cblxuICAgIH1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG5cbiAgICBwdWJsaWMgY2xlYXJDYXJ0KCl7IC8vIGNsZWFyY2FydFxuXG5cbiAgICAgICAgZGlhbG9ncy5jb25maXJtKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkNsZWFyIENhcnRcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiRG8geW91IHdhbnQgQ2xlYXIgQ2FydD9cIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJ5ZXNcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwibm9cIixcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuXG4gICAgICAgICAgICAvLyByZXN1bHQgYXJndW1lbnQgaXMgYm9vbGVhblxuXG4gICAgICAgICAgICBpZihyZXN1bHQgPT0gdHJ1ZSl7XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLnByb2R1Y3RfaWQubGVuZ3RoID09IDApe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJob21lXCJdKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY291bnRDYXJ0ID0gTG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjb3VudENhcnRcIilcbiAgICAgICAgICAgICAgICAgICAgY291bnRDYXJ0ID0gMVxuICAgICAgICAgICAgICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvdW50Q2FydFwiLCBjb3VudENhcnQpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY291bnRDYXJ0IDogXCIrIGNvdW50Q2FydClcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0cmFjdERhdGEzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImhvbWVcIl0pO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkNsZWFyIENhcnQgU3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiY2FydFwiXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG5cblx0cHVibGljIGNoZWNrb3V0KCl7IC8vIGNoZWNrb3V0XG5cbiAgICAgICAgY291bnRDYXJ0PTFcbiAgICAgICAgTG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb3VudENhcnRcIiwgY291bnRDYXJ0KVxuICAgICAgICBjb25zb2xlLmxvZyhcImNvdW50Q2FydCA6IFwiKyBjb3VudENhcnQpXG5cbiAgICAgICAgZGlhbG9ncy5jb25maXJtKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkNhcnRcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiRG8geW91IHdhbnQgdG8gQ2hlY2tvdXQ/XCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwieWVzXCIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIm5vXCIsXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcblxuICAgICAgICAgICAgLy8gcmVzdWx0IGFyZ3VtZW50IGlzIGJvb2xlYW5cblxuICAgICAgICAgICAgaWYocmVzdWx0ID09IHRydWUpe1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcm9kdWN0X2lkLmxlbmd0aCA9PSAwKXtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJob21lXCJdKTtcblxuICAgICAgICAgICAgICAgIH1lbHNle1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFrZVBvc3RSZXF1ZXN0KCk7IC8vIHBvc3Qgb3JkZXIgLyBnZXQgb3JkZXJpZCAvIHBhdGNoIHBpbyAvIGNsZWFyY2FydFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJwYXltZW50ZGV0YWlsXCJdKTsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiY2FydFwiXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cblx0fVxuXG5cdHB1YmxpYyBwcm9kdWN0KHByb2R1Y3RfaWQ9MCl7XG5cbiAgICAgICAgaWYocHJvZHVjdF9pZD09MCl7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJob21lXCJdKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJwcm9kdWN0L1wiLHByb2R1Y3RfaWRdKTsgXG4gICAgICAgIH1cblxuXHR9XG5cbiAgICBwdWJsaWMgaG9tZSgpe1xuXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImhvbWVcIl0pO1xuICAgIH1cblxufVxuXG4gICAgXG4gICAgIl19