"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var MyorderComponent = (function () {
    function MyorderComponent(router) {
        this.router = router;
    }
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
    }),
    __metadata("design:paramtypes", [router_1.Router])
], MyorderComponent);
exports.MyorderComponent = MyorderComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlvcmRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15b3JkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQUN4QywwQ0FBdUM7QUFXdkMsSUFBYSxnQkFBZ0I7SUFFekIsMEJBQTJCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUUsQ0FBQztJQUVyQyx3Q0FBYSxHQUFwQjtRQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFVLCtCQUErQjtJQUVsRixDQUFDO0lBRVMsd0NBQWEsR0FBcEI7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBVSwrQkFBK0I7SUFFbEYsQ0FBQztJQUVNLHdDQUFhLEdBQXBCO1FBRUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQVUsK0JBQStCO0lBRWxGLENBQUM7SUFHRix1QkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUF2QlksZ0JBQWdCO0lBVDVCLGdCQUFTLENBQUM7UUFFUCxRQUFRLEVBQUUsU0FBUztRQUVuQixXQUFXLEVBQUUsbUNBQW1DO0tBRW5ELENBQUM7cUNBS3FDLGVBQU07R0FGaEMsZ0JBQWdCLENBdUI1QjtBQXZCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuXG4gICAgc2VsZWN0b3I6IFwibXlvcmRlclwiLFxuXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb21wb25lbnRzL215b3JkZXIvbXlvcmRlci5odG1sXCIsXG5cbn0pXG5cblxuZXhwb3J0IGNsYXNzIE15b3JkZXJDb21wb25lbnQge1xuXHRcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7fVxuXG4gICAgcHVibGljIHBheW1lbnRkZXRhaWwoKXtcblxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInBheW1lbnRkZXRhaWxcIl0pOyAgICAgICAgICAvLyBjb21lIGZyb20gcGF0aCBpbiByb3V0aW5nIHRzXG5cblx0fVxuXG4gICAgcHVibGljIHJlcG9ydHByb2JsZW0oKXtcblxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcInJlcG9ydHByb2JsZW1cIl0pOyAgICAgICAgICAvLyBjb21lIGZyb20gcGF0aCBpbiByb3V0aW5nIHRzXG5cblx0fVxuXG5cdHB1YmxpYyByZXBvcnRwYXltZW50KCl7XG5cblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJyZXBvcnRwYXltZW50XCJdKTsgICAgICAgICAgLy8gY29tZSBmcm9tIHBhdGggaW4gcm91dGluZyB0c1xuXG5cdH1cblxuXG59XG5cblxuICAgIFxuICAgICJdfQ==