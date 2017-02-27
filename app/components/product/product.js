"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ProductComponent = (function () {
    function ProductComponent(router) {
        this.router = router;
    }
    ProductComponent.prototype.cart = function () {
        this.router.navigate(["cart"]); // come from path in routing ts
    };
    ProductComponent.prototype.product = function () {
        this.router.navigate(["product"]); // come from path in routing ts
    };
    ProductComponent.prototype.add = function () {
        alert("Add to cart Success");
    };
    ProductComponent.prototype.onSubmit = function (value) {
        alert("You are searching for " + value);
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: "product",
        templateUrl: "./components/product/product.html",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQUN4QywwQ0FBdUM7QUFXdkMsSUFBYSxnQkFBZ0I7SUFFekIsMEJBQTJCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUUsQ0FBQztJQUV4QywrQkFBSSxHQUFYO1FBRUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQVUsK0JBQStCO0lBRXpFLENBQUM7SUFHTSxrQ0FBTyxHQUFkO1FBRUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQVUsK0JBQStCO0lBRTVFLENBQUM7SUFFTSw4QkFBRyxHQUFWO1FBQ08sS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDakMsQ0FBQztJQUlNLG1DQUFRLEdBQWYsVUFBZ0IsS0FBSztRQUNqQixLQUFLLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUlMLHVCQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQztBQTdCWSxnQkFBZ0I7SUFUNUIsZ0JBQVMsQ0FBQztRQUVQLFFBQVEsRUFBRSxTQUFTO1FBRW5CLFdBQVcsRUFBRSxtQ0FBbUM7S0FFbkQsQ0FBQztxQ0FLcUMsZUFBTTtHQUZoQyxnQkFBZ0IsQ0E2QjVCO0FBN0JZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG5cbiAgICBzZWxlY3RvcjogXCJwcm9kdWN0XCIsXG5cbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0Lmh0bWxcIixcblxufSlcblxuXG5leHBvcnQgY2xhc3MgUHJvZHVjdENvbXBvbmVudCB7XG5cdFxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKXt9XG5cblx0cHVibGljIGNhcnQoKXtcblxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImNhcnRcIl0pOyAgICAgICAgICAvLyBjb21lIGZyb20gcGF0aCBpbiByb3V0aW5nIHRzXG5cblx0fVxuXG5cblx0cHVibGljIHByb2R1Y3QoKXtcblxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInByb2R1Y3RcIl0pOyAgICAgICAgICAvLyBjb21lIGZyb20gcGF0aCBpbiByb3V0aW5nIHRzXG5cblx0fVxuXG5cdHB1YmxpYyBhZGQoKSB7XG4gICAgICAgIGFsZXJ0KFwiQWRkIHRvIGNhcnQgU3VjY2Vzc1wiKTtcbiAgICB9XG5cblx0cHVibGljIHNlYXJjaFBocmFzZTogc3RyaW5nO1xuXG4gICAgcHVibGljIG9uU3VibWl0KHZhbHVlKSB7XG4gICAgICAgIGFsZXJ0KFwiWW91IGFyZSBzZWFyY2hpbmcgZm9yIFwiICsgdmFsdWUpO1xuICAgIH1cblxuICAgIFxuXG59XG5cblxuICAgIFxuICAgICJdfQ==