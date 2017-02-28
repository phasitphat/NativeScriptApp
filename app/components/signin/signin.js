"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var SigninComponent = (function () {
    function SigninComponent(router, page) {
        this.router = router;
        this.page = page;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    SigninComponent.prototype.home = function () {
        this.router.navigate(["home"]); // come from path in routing ts
    };
    SigninComponent.prototype.signup = function () {
        this.router.navigate(["signup"]); // come from path in routing ts
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    core_1.Component({
        selector: "signin",
        templateUrl: "./components/signin/signin.html",
    }),
    __metadata("design:paramtypes", [router_1.Router, page_1.Page])
], SigninComponent);
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2lnbmluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsZ0NBQStCO0FBQy9CLDBDQUF1QztBQWlCdkMsSUFBYSxlQUFlO0lBSTNCLHlCQUEyQixNQUFjLEVBQVMsSUFBVTtRQUFqQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFFLENBQUM7SUFFL0Qsa0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRU0sOEJBQUksR0FBWDtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFVLCtCQUErQjtJQUV6RSxDQUFDO0lBRU0sZ0NBQU0sR0FBYjtRQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFVLCtCQUErQjtJQUUzRSxDQUFDO0lBRUYsc0JBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLGVBQWU7SUFiM0IsZ0JBQVMsQ0FBQztRQUdQLFFBQVEsRUFBRSxRQUFRO1FBR2xCLFdBQVcsRUFBRSxpQ0FBaUM7S0FFakQsQ0FBQztxQ0FTa0MsZUFBTSxFQUFlLFdBQUk7R0FKaEQsZUFBZSxDQW9CM0I7QUFwQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cblxuXG5AQ29tcG9uZW50KHtcblxuXG4gICAgc2VsZWN0b3I6IFwic2lnbmluXCIsXG5cblxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmh0bWxcIixcblxufSlcblxuXG5cblxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcblxuIFxuXG5cdHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLHByaXZhdGUgcGFnZTogUGFnZSl7fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuXHR9XG5cblx0cHVibGljIGhvbWUoKXtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJob21lXCJdKTsgICAgICAgICAgLy8gY29tZSBmcm9tIHBhdGggaW4gcm91dGluZyB0c1xuXG5cdH1cblxuXHRwdWJsaWMgc2lnbnVwKCl7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic2lnbnVwXCJdKTsgICAgICAgICAgLy8gY29tZSBmcm9tIHBhdGggaW4gcm91dGluZyB0c1xuXG5cdH1cblxufVxuIl19