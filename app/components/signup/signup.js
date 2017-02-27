"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var SignupComponent = (function () {
    function SignupComponent(router) {
        this.router = router;
    }
    SignupComponent.prototype.signin = function () {
        this.router.navigate(["/"]); // come from path in routing ts
        alert("Sign Up Success");
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    core_1.Component({
        selector: "signup",
        templateUrl: "./components/signup/signup.html",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], SignupComponent);
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2lnbnVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBd0M7QUFFeEMsMENBQXVDO0FBaUJ2QyxJQUFhLGVBQWU7SUFJM0IseUJBQTJCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUUsQ0FBQztJQUlyQyxnQ0FBTSxHQUFiO1FBRUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQVUsK0JBQStCO1FBQ3JFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRixzQkFBQztBQUFELENBQUMsQUFkRCxJQWNDO0FBZFksZUFBZTtJQWIzQixnQkFBUyxDQUFDO1FBR1AsUUFBUSxFQUFFLFFBQVE7UUFHbEIsV0FBVyxFQUFFLGlDQUFpQztLQUVqRCxDQUFDO3FDQVNrQyxlQUFNO0dBSjdCLGVBQWUsQ0FjM0I7QUFkWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5cblxuQENvbXBvbmVudCh7XG5cblxuICAgIHNlbGVjdG9yOiBcInNpZ251cFwiLFxuXG5cbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5odG1sXCIsXG5cbn0pXG5cblxuXG5cbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQge1xuXG4gXG5cblx0cHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpe31cblxuXG5cblx0cHVibGljIHNpZ25pbigpe1xuXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7ICAgICAgICAgIC8vIGNvbWUgZnJvbSBwYXRoIGluIHJvdXRpbmcgdHNcblx0XHRhbGVydChcIlNpZ24gVXAgU3VjY2Vzc1wiKTtcblx0fVxuXG59XG4iXX0=