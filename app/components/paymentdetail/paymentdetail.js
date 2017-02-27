"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var PaymentdetailComponent = (function () {
    function PaymentdetailComponent(router) {
        this.router = router;
    }
    PaymentdetailComponent.prototype.home = function () {
        this.router.navigate(["home"]); // come from path in routing ts
    };
    return PaymentdetailComponent;
}());
PaymentdetailComponent = __decorate([
    core_1.Component({
        selector: "paymentdetail",
        templateUrl: "./components/paymentdetail/paymentdetail.html",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], PaymentdetailComponent);
exports.PaymentdetailComponent = PaymentdetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudGRldGFpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBheW1lbnRkZXRhaWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQUN4QywwQ0FBdUM7QUFXdkMsSUFBYSxzQkFBc0I7SUFFL0IsZ0NBQTJCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUUsQ0FBQztJQUV4QyxxQ0FBSSxHQUFYO1FBRUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQVUsK0JBQStCO0lBRXpFLENBQUM7SUFHRiw2QkFBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBWFksc0JBQXNCO0lBVGxDLGdCQUFTLENBQUM7UUFFUCxRQUFRLEVBQUUsZUFBZTtRQUV6QixXQUFXLEVBQUUsK0NBQStDO0tBRS9ELENBQUM7cUNBS3FDLGVBQU07R0FGaEMsc0JBQXNCLENBV2xDO0FBWFksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcblxuICAgIHNlbGVjdG9yOiBcInBheW1lbnRkZXRhaWxcIixcblxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29tcG9uZW50cy9wYXltZW50ZGV0YWlsL3BheW1lbnRkZXRhaWwuaHRtbFwiLFxuXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBQYXltZW50ZGV0YWlsQ29tcG9uZW50IHtcblx0XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpe31cblxuXHRwdWJsaWMgaG9tZSgpe1xuXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiaG9tZVwiXSk7ICAgICAgICAgIC8vIGNvbWUgZnJvbSBwYXRoIGluIHJvdXRpbmcgdHNcblxuXHR9XG5cblxufVxuXG4gICAgXG4gICAgIl19