"use strict";
var core_1 = require("@angular/core");
var paymentdetail_services_1 = require("./paymentdetail.services");
var router_1 = require("@angular/router");
var serverurl_1 = require("./../serverurl"); // get server test
var LocalStorage = require("nativescript-localstorage");
var PaymentdetailComponent = (function () {
    function PaymentdetailComponent(router, myService, server) {
        this.router = router;
        this.myService = myService;
        this.server = server;
    }
    PaymentdetailComponent.prototype.back = function () {
        this.router.navigate(["myorder"]); // come from path in routing ts
    };
    PaymentdetailComponent.prototype.home = function () {
        this.router.navigate(["home"]); // come from path in routing ts
    };
    return PaymentdetailComponent;
}());
PaymentdetailComponent = __decorate([
    core_1.Component({
        selector: "paymentdetail",
        templateUrl: "./components/paymentdetail/paymentdetail.html",
        providers: [paymentdetail_services_1.MyHttpGetService, serverurl_1.ServerComponent]
    }),
    __metadata("design:paramtypes", [router_1.Router, paymentdetail_services_1.MyHttpGetService, serverurl_1.ServerComponent])
], PaymentdetailComponent);
exports.PaymentdetailComponent = PaymentdetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudGRldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBheW1lbnRkZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQUMxQyxtRUFBNEQ7QUFDNUQsMENBQXVDO0FBQ3ZDLDRDQUFpRCxDQUFDLGtCQUFrQjtBQUNwRSxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUUsMkJBQTJCLENBQUUsQ0FBQztBQVMxRCxJQUFhLHNCQUFzQjtJQUUvQixnQ0FBMkIsTUFBYyxFQUFVLFNBQTJCLEVBQVUsTUFBdUI7UUFBcEYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7SUFBRSxDQUFDO0lBRTlHLHFDQUFJLEdBQVg7UUFFQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBVSwrQkFBK0I7SUFFNUUsQ0FBQztJQUVTLHFDQUFJLEdBQVg7UUFFSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBVSwrQkFBK0I7SUFFNUUsQ0FBQztJQUVMLDZCQUFDO0FBQUQsQ0FBQyxBQWhCRCxJQWdCQztBQWhCWSxzQkFBc0I7SUFQbEMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFdBQVcsRUFBRSwrQ0FBK0M7UUFDNUQsU0FBUyxFQUFFLENBQUMseUNBQWdCLEVBQUMsMkJBQWUsQ0FBQztLQUNoRCxDQUFDO3FDQUtxQyxlQUFNLEVBQXFCLHlDQUFnQixFQUFrQiwyQkFBZTtHQUZ0RyxzQkFBc0IsQ0FnQmxDO0FBaEJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4vcGF5bWVudGRldGFpbC5zZXJ2aWNlc1wiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFNlcnZlckNvbXBvbmVudCB9IGZyb20gXCIuLy4uL3NlcnZlcnVybFwiOyAvLyBnZXQgc2VydmVyIHRlc3RcbmxldCBMb2NhbFN0b3JhZ2UgPSByZXF1aXJlKCBcIm5hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIiApO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJwYXltZW50ZGV0YWlsXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb21wb25lbnRzL3BheW1lbnRkZXRhaWwvcGF5bWVudGRldGFpbC5odG1sXCIsXG4gICAgcHJvdmlkZXJzOiBbTXlIdHRwR2V0U2VydmljZSxTZXJ2ZXJDb21wb25lbnRdXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBQYXltZW50ZGV0YWlsQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIG15U2VydmljZTogTXlIdHRwR2V0U2VydmljZSwgcHJpdmF0ZSBzZXJ2ZXI6IFNlcnZlckNvbXBvbmVudCl7fVxuXG5cdHB1YmxpYyBiYWNrKCl7XG5cblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJteW9yZGVyXCJdKTsgICAgICAgICAgLy8gY29tZSBmcm9tIHBhdGggaW4gcm91dGluZyB0c1xuXG5cdH1cblxuICAgIHB1YmxpYyBob21lKCl7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiaG9tZVwiXSk7ICAgICAgICAgIC8vIGNvbWUgZnJvbSBwYXRoIGluIHJvdXRpbmcgdHNcblxuICAgIH1cblxufVxuXG4gICAgXG4gICAgIl19