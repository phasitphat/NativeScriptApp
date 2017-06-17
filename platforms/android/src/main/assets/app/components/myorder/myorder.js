"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var myorder_services_1 = require("./myorder.services");
var serverurl_1 = require("./../serverurl"); // get server test
var LocalStorage = require("nativescript-localstorage");
var MyorderComponent = (function () {
    function MyorderComponent(router, myService, server) {
        this.router = router;
        this.myService = myService;
        this.server = server;
        this.productinorder_name = [];
        this.price_per_product = [];
        this.orderlist = [];
    }
    MyorderComponent.prototype.ngOnInit = function () {
        this.localid = LocalStorage.getItem("customer_id");
        this.localorderid = LocalStorage.getItem("order_id");
        this.extractData();
    };
    MyorderComponent.prototype.extractData = function () {
        var _this = this;
        console.log("extractData");
        this.myService.getData()
            .subscribe(function (result) { return _this.onGetDataSuccess(result); }, function (error) { return _this.onGetDataError(error); });
    };
    MyorderComponent.prototype.onGetDataSuccess = function (res) {
        console.log("Type : " + typeof res);
        this.orderlist.push(res);
        // console.log("orderlist : "+JSON.stringify(this.orderlist));
        // console.log("Order List : "+this.orderlist)
        console.log("onGetDataSuccess (MyOrder)");
        if (res.status_payment == "1") {
            this.pstatus = "Waiting payment";
        }
        if (res.status_payment == "2") {
            this.pstatus = "Paid";
        }
        if (res.status_payment == "3") {
            this.pstatus = "Report Problem";
        }
        if (res.status_payment == "4") {
            this.pstatus = "Close"; // delete order
        }
        if (res.id == this.localorderid) {
            console.log("order id : " + res.id + " localorderid : " + this.localorderid);
            this.order_id = res.id;
            this.created_at = res.created_at;
            this.status_payment = this.pstatus;
            this.total_price = res.total_price;
            this.productinorder_name[0] = res.productinorder_set[0].product_name;
            this.price_per_product[0] = res.productinorder_set[0].totalprice_per_product;
            this.productinorder_name[1] = res.productinorder_set[1].product_name;
            this.price_per_product[1] = res.productinorder_set[1].totalprice_per_product;
            this.productinorder_name[2] = res.productinorder_set[2].product_name;
            this.price_per_product[2] = res.productinorder_set[2].totalprice_per_product;
            this.productinorder_name[3] = res.productinorder_set[3].product_name;
            this.price_per_product[3] = res.productinorder_set[3].totalprice_per_product;
            this.productinorder_name[4] = res.productinorder_set[4].product_name;
            this.price_per_product[4] = res.productinorder_set[4].totalprice_per_product;
        }
    };
    MyorderComponent.prototype.onGetDataError = function (error) {
        var body = error.json() || "";
        var err = body.error || JSON.stringify(body);
        console.log("onGetDataError: " + err);
    };
    MyorderComponent.prototype.menu = function () {
        this.router.navigate(["menu"]); // come from path in routing ts
    };
    MyorderComponent.prototype.paymentdetail = function () {
        this.router.navigate(["paymentdetail"]); // come from path in routing ts
    };
    MyorderComponent.prototype.reportproblem = function () {
        this.router.navigate(["reportproblem"]); // come from path in routing ts
    };
    MyorderComponent.prototype.reportpayment = function () {
        this.router.navigate(["reportpayment"]); // come from path in routing ts
    };
    return MyorderComponent;
}());
MyorderComponent = __decorate([
    core_1.Component({
        selector: "myorder",
        templateUrl: "./components/myorder/myorder.html",
        providers: [myorder_services_1.MyHttpGetService, serverurl_1.ServerComponent]
    }),
    __metadata("design:paramtypes", [router_1.Router, myorder_services_1.MyHttpGetService, serverurl_1.ServerComponent])
], MyorderComponent);
exports.MyorderComponent = MyorderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlvcmRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15b3JkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQUN4QywwQ0FBdUM7QUFDdkMsdURBQXNEO0FBQ3RELDRDQUFpRCxDQUFDLGtCQUFrQjtBQUNwRSxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUUsMkJBQTJCLENBQUUsQ0FBQztBQVcxRCxJQUFhLGdCQUFnQjtJQWdCekIsMEJBQTJCLE1BQWMsRUFBVSxTQUEyQixFQUFVLE1BQXVCO1FBQXBGLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBUHhHLHdCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUN6QixzQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFHdkIsY0FBUyxHQUFHLEVBQUUsQ0FBQTtJQUc0RixDQUFDO0lBRWxILG1DQUFRLEdBQVI7UUFFSSxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXJELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUFBLGlCQU9DO1FBTkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTthQUNuQixTQUFTLENBQ1YsVUFBQyxNQUFNLElBQUssT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQTdCLENBQTZCLEVBQ3pDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBMUIsQ0FBMEIsQ0FDcEMsQ0FBQztJQUNWLENBQUM7SUFFTywyQ0FB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QUM7cUNBbUJxQyxlQUFNLEVBQXFCLG1DQUFnQixFQUFrQiwyQkFBZTtHQWhCdEcsZ0JBQWdCLENBc0g1QjtBQXRIWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4vbXlvcmRlci5zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgU2VydmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vLi4vc2VydmVydXJsXCI7IC8vIGdldCBzZXJ2ZXIgdGVzdFxubGV0IExvY2FsU3RvcmFnZSA9IHJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiICk7XG5cbkBDb21wb25lbnQoe1xuXG4gICAgc2VsZWN0b3I6IFwibXlvcmRlclwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29tcG9uZW50cy9teW9yZGVyL215b3JkZXIuaHRtbFwiLFxuICAgIHByb3ZpZGVyczogW015SHR0cEdldFNlcnZpY2UsU2VydmVyQ29tcG9uZW50XVxuXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBNeW9yZGVyQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBsb2NhbGlkOiBzdHJpbmc7XG4gICAgcHVibGljIGxvY2Fsb3JkZXJpZDogc3RyaW5nO1xuXG5cdHB1YmxpYyBvcmRlcl9pZDogc3RyaW5nO1xuICAgIHB1YmxpYyBjcmVhdGVkX2F0OiBzdHJpbmc7XG4gICAgcHVibGljIHN0YXR1c19wYXltZW50OiBzdHJpbmc7XG4gICAgcHVibGljIHRvdGFsX3ByaWNlOiBzdHJpbmc7XG4gICAgcHVibGljIHByb2R1Y3Rpbm9yZGVyX25hbWUgPSBbXTtcbiAgICBwdWJsaWMgcHJpY2VfcGVyX3Byb2R1Y3QgPSBbXTtcblxuICAgIHB1YmxpYyBwc3RhdHVzOiBzdHJpbmc7XG4gICAgcHVibGljIG9yZGVybGlzdCA9IFtdXG5cblx0XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbXlTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlLCBwcml2YXRlIHNlcnZlcjogU2VydmVyQ29tcG9uZW50KXt9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICB0aGlzLmxvY2FsaWQgPSBMb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1c3RvbWVyX2lkXCIpO1xuICAgICAgICB0aGlzLmxvY2Fsb3JkZXJpZCA9IExvY2FsU3RvcmFnZS5nZXRJdGVtKFwib3JkZXJfaWRcIik7XG5cbiAgICAgICAgdGhpcy5leHRyYWN0RGF0YSgpO1xuICAgIH1cblxuICAgIGV4dHJhY3REYXRhKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImV4dHJhY3REYXRhXCIpO1xuICAgICAgICB0aGlzLm15U2VydmljZS5nZXREYXRhKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzdWx0KSA9PiB0aGlzLm9uR2V0RGF0YVN1Y2Nlc3MocmVzdWx0KSxcbiAgICAgICAgICAgIChlcnJvcikgPT4gdGhpcy5vbkdldERhdGFFcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkdldERhdGFTdWNjZXNzKHJlcykge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVHlwZSA6IFwiK3R5cGVvZiByZXMpXG5cbiAgICAgICAgdGhpcy5vcmRlcmxpc3QucHVzaChyZXMpXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJvcmRlcmxpc3QgOiBcIitKU09OLnN0cmluZ2lmeSh0aGlzLm9yZGVybGlzdCkpO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiT3JkZXIgTGlzdCA6IFwiK3RoaXMub3JkZXJsaXN0KVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwib25HZXREYXRhU3VjY2VzcyAoTXlPcmRlcilcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgaWYocmVzLnN0YXR1c19wYXltZW50ID09IFwiMVwiKXtcbiAgICAgICAgICAgIHRoaXMucHN0YXR1cyA9IFwiV2FpdGluZyBwYXltZW50XCJcbiAgICAgICAgfVxuICAgICAgICBpZihyZXMuc3RhdHVzX3BheW1lbnQgPT0gXCIyXCIpe1xuICAgICAgICAgICAgdGhpcy5wc3RhdHVzID0gXCJQYWlkXCJcbiAgICAgICAgfVxuICAgICAgICBpZihyZXMuc3RhdHVzX3BheW1lbnQgPT0gXCIzXCIpe1xuICAgICAgICAgICAgdGhpcy5wc3RhdHVzID0gXCJSZXBvcnQgUHJvYmxlbVwiXG4gICAgICAgIH1cbiAgICAgICAgaWYocmVzLnN0YXR1c19wYXltZW50ID09IFwiNFwiKXtcbiAgICAgICAgICAgIHRoaXMucHN0YXR1cyA9IFwiQ2xvc2VcIiAvLyBkZWxldGUgb3JkZXJcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHJlcy5pZCA9PSB0aGlzLmxvY2Fsb3JkZXJpZCl7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwib3JkZXIgaWQgOiBcIityZXMuaWQrXCIgbG9jYWxvcmRlcmlkIDogXCIrdGhpcy5sb2NhbG9yZGVyaWQpXG5cbiAgICAgICAgICAgIHRoaXMub3JkZXJfaWQgICAgICAgICAgICAgID0gcmVzLmlkO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVkX2F0ICAgICAgICAgICAgPSByZXMuY3JlYXRlZF9hdDtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzX3BheW1lbnQgICAgICAgID0gdGhpcy5wc3RhdHVzO1xuICAgICAgICAgICAgdGhpcy50b3RhbF9wcmljZSAgICAgICAgICAgPSByZXMudG90YWxfcHJpY2U7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3Rpbm9yZGVyX25hbWVbMF0gICA9IHJlcy5wcm9kdWN0aW5vcmRlcl9zZXRbMF0ucHJvZHVjdF9uYW1lO1xuICAgICAgICAgICAgdGhpcy5wcmljZV9wZXJfcHJvZHVjdFswXSAgICAgPSByZXMucHJvZHVjdGlub3JkZXJfc2V0WzBdLnRvdGFscHJpY2VfcGVyX3Byb2R1Y3Q7XG5cbiAgICAgICAgICAgIHRoaXMucHJvZHVjdGlub3JkZXJfbmFtZVsxXSAgID0gcmVzLnByb2R1Y3Rpbm9yZGVyX3NldFsxXS5wcm9kdWN0X25hbWU7XG4gICAgICAgICAgICB0aGlzLnByaWNlX3Blcl9wcm9kdWN0WzFdICAgICA9IHJlcy5wcm9kdWN0aW5vcmRlcl9zZXRbMV0udG90YWxwcmljZV9wZXJfcHJvZHVjdDtcblxuICAgICAgICAgICAgdGhpcy5wcm9kdWN0aW5vcmRlcl9uYW1lWzJdICAgPSByZXMucHJvZHVjdGlub3JkZXJfc2V0WzJdLnByb2R1Y3RfbmFtZTtcbiAgICAgICAgICAgIHRoaXMucHJpY2VfcGVyX3Byb2R1Y3RbMl0gICAgID0gcmVzLnByb2R1Y3Rpbm9yZGVyX3NldFsyXS50b3RhbHByaWNlX3Blcl9wcm9kdWN0O1xuXG4gICAgICAgICAgICB0aGlzLnByb2R1Y3Rpbm9yZGVyX25hbWVbM10gICA9IHJlcy5wcm9kdWN0aW5vcmRlcl9zZXRbM10ucHJvZHVjdF9uYW1lO1xuICAgICAgICAgICAgdGhpcy5wcmljZV9wZXJfcHJvZHVjdFszXSAgICAgPSByZXMucHJvZHVjdGlub3JkZXJfc2V0WzNdLnRvdGFscHJpY2VfcGVyX3Byb2R1Y3Q7XG5cbiAgICAgICAgICAgIHRoaXMucHJvZHVjdGlub3JkZXJfbmFtZVs0XSAgID0gcmVzLnByb2R1Y3Rpbm9yZGVyX3NldFs0XS5wcm9kdWN0X25hbWU7XG4gICAgICAgICAgICB0aGlzLnByaWNlX3Blcl9wcm9kdWN0WzRdICAgICA9IHJlcy5wcm9kdWN0aW5vcmRlcl9zZXRbNF0udG90YWxwcmljZV9wZXJfcHJvZHVjdDtcbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uR2V0RGF0YUVycm9yKGVycm9yOiBSZXNwb25zZSB8IGFueSkge1xuICAgICAgICBjb25zdCBib2R5ID0gZXJyb3IuanNvbigpIHx8IFwiXCI7XG4gICAgICAgIGNvbnN0IGVyciA9IGJvZHkuZXJyb3IgfHwgSlNPTi5zdHJpbmdpZnkoYm9keSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25HZXREYXRhRXJyb3I6IFwiICsgZXJyKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbWVudSgpe1xuXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm1lbnVcIl0pOyAgICAgICAgICAvLyBjb21lIGZyb20gcGF0aCBpbiByb3V0aW5nIHRzXG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcGF5bWVudGRldGFpbCgpe1xuXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicGF5bWVudGRldGFpbFwiXSk7ICAgICAgICAgIC8vIGNvbWUgZnJvbSBwYXRoIGluIHJvdXRpbmcgdHNcblxuXHR9XG5cbiAgICBwdWJsaWMgcmVwb3J0cHJvYmxlbSgpe1xuXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicmVwb3J0cHJvYmxlbVwiXSk7ICAgICAgICAgIC8vIGNvbWUgZnJvbSBwYXRoIGluIHJvdXRpbmcgdHNcblxuXHR9XG5cblx0cHVibGljIHJlcG9ydHBheW1lbnQoKXtcblxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInJlcG9ydHBheW1lbnRcIl0pOyAgICAgICAgICAvLyBjb21lIGZyb20gcGF0aCBpbiByb3V0aW5nIHRzXG5cblx0fVxuXG5cbn0iXX0=