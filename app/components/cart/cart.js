"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var CartComponent = (function () {
    function CartComponent(router) {
        this.router = router;
    }
    CartComponent.prototype.paymentdetail = function () {
        this.router.navigate(["paymentdetail"]); // come from path in routing ts
    };
    return CartComponent;
}());
CartComponent = __decorate([
    core_1.Component({
        selector: "cart",
        templateUrl: "./components/cart/cart.html",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], CartComponent);
exports.CartComponent = CartComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQUN4QywwQ0FBdUM7QUFXdkMsSUFBYSxhQUFhO0lBRXRCLHVCQUEyQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFFLENBQUM7SUFFeEMscUNBQWEsR0FBcEI7UUFFQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBVSwrQkFBK0I7SUFFbEYsQ0FBQztJQUtGLG9CQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFiWSxhQUFhO0lBVHpCLGdCQUFTLENBQUM7UUFFUCxRQUFRLEVBQUUsTUFBTTtRQUVoQixXQUFXLEVBQUUsNkJBQTZCO0tBRTdDLENBQUM7cUNBS3FDLGVBQU07R0FGaEMsYUFBYSxDQWF6QjtBQWJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcblxuICAgIHNlbGVjdG9yOiBcImNhcnRcIixcblxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29tcG9uZW50cy9jYXJ0L2NhcnQuaHRtbFwiLFxuXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBDYXJ0Q29tcG9uZW50IHtcblx0XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpe31cblxuXHRwdWJsaWMgcGF5bWVudGRldGFpbCgpe1xuXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicGF5bWVudGRldGFpbFwiXSk7ICAgICAgICAgIC8vIGNvbWUgZnJvbSBwYXRoIGluIHJvdXRpbmcgdHNcblxuXHR9XG5cblx0XG5cblxufVxuXG4gICAgXG4gICAgIl19