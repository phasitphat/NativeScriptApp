"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var SigninComponent = (function () {
    function SigninComponent(router) {
        this.router = router;
    }
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
    __metadata("design:paramtypes", [router_1.Router])
], SigninComponent);
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2lnbmluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBd0M7QUFFeEMsMENBQXVDO0FBaUJ2QyxJQUFhLGVBQWU7SUFJM0IseUJBQTJCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUUsQ0FBQztJQUlyQyw4QkFBSSxHQUFYO1FBRUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQVUsK0JBQStCO0lBRXpFLENBQUM7SUFFTSxnQ0FBTSxHQUFiO1FBRUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQVUsK0JBQStCO0lBRTNFLENBQUM7SUFFRixzQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksZUFBZTtJQWIzQixnQkFBUyxDQUFDO1FBR1AsUUFBUSxFQUFFLFFBQVE7UUFHbEIsV0FBVyxFQUFFLGlDQUFpQztLQUVqRCxDQUFDO3FDQVNrQyxlQUFNO0dBSjdCLGVBQWUsQ0FvQjNCO0FBcEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cblxuXG5AQ29tcG9uZW50KHtcblxuXG4gICAgc2VsZWN0b3I6IFwic2lnbmluXCIsXG5cblxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29tcG9uZW50cy9zaWduaW4vc2lnbmluLmh0bWxcIixcblxufSlcblxuXG5cblxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbXBvbmVudCB7XG5cbiBcblxuXHRwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7fVxuXG5cblxuXHRwdWJsaWMgaG9tZSgpe1xuXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiaG9tZVwiXSk7ICAgICAgICAgIC8vIGNvbWUgZnJvbSBwYXRoIGluIHJvdXRpbmcgdHNcblxuXHR9XG5cblx0cHVibGljIHNpZ251cCgpe1xuXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic2lnbnVwXCJdKTsgICAgICAgICAgLy8gY29tZSBmcm9tIHBhdGggaW4gcm91dGluZyB0c1xuXG5cdH1cblxufVxuIl19