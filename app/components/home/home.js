"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.cart = function () {
        this.router.navigate(["cart"]); // come from path in routing ts
    };
    HomeComponent.prototype.menu = function () {
        this.router.navigate(["menu"]); // come from path in routing ts
    };
    HomeComponent.prototype.product = function () {
        this.router.navigate(["product"]); // come from path in routing ts
    };
    HomeComponent.prototype.onSubmit = function (value) {
        alert("You are searching for " + value);
    };
    HomeComponent.prototype.onSearchLayoutLoaded = function (event) {
        if (event.object.android) {
            event.object.android.setFocusableInTouchMode(true);
        }
    };
    HomeComponent.prototype.onSearchBarLoaded = function (event) {
        if (event.object.android) {
            event.object.android.clearFocus();
        }
    };
    HomeComponent.prototype.clearTextfieldFocus = function (event) {
        event.layout.android.dismissSoftInput();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "home",
        templateUrl: "./components/home/home.html",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQUN4QywwQ0FBdUM7QUFXdkMsSUFBYSxhQUFhO0lBRXRCLHVCQUEyQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFFLENBQUM7SUFFeEMsNEJBQUksR0FBWDtRQUVDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFVLCtCQUErQjtJQUV6RSxDQUFDO0lBRU0sNEJBQUksR0FBWDtRQUVDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFVLCtCQUErQjtJQUV6RSxDQUFDO0lBRU0sK0JBQU8sR0FBZDtRQUVDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFVLCtCQUErQjtJQUU1RSxDQUFDO0lBSVMsZ0NBQVEsR0FBZixVQUFnQixLQUFLO1FBQ2pCLEtBQUssQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsNENBQW9CLEdBQXBCLFVBQXFCLEtBQUs7UUFDdEIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUM7SUFDTCxDQUFDO0lBRUQseUNBQWlCLEdBQWpCLFVBQWtCLEtBQUs7UUFDbkIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3RDLENBQUM7SUFDTCxDQUFDO0lBRUQsMkNBQW1CLEdBQW5CLFVBQW9CLEtBQUs7UUFDeEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBRUwsb0JBQUM7QUFBRCxDQUFDLEFBNUNELElBNENDO0FBNUNZLGFBQWE7SUFUekIsZ0JBQVMsQ0FBQztRQUVQLFFBQVEsRUFBRSxNQUFNO1FBRWhCLFdBQVcsRUFBRSw2QkFBNkI7S0FFN0MsQ0FBQztxQ0FLcUMsZUFBTTtHQUZoQyxhQUFhLENBNEN6QjtBQTVDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG5cbiAgICBzZWxlY3RvcjogXCJob21lXCIsXG5cbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvbXBvbmVudHMvaG9tZS9ob21lLmh0bWxcIixcblxufSlcblxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG5cdFxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKXt9XG5cblx0cHVibGljIGNhcnQoKXtcblxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImNhcnRcIl0pOyAgICAgICAgICAvLyBjb21lIGZyb20gcGF0aCBpbiByb3V0aW5nIHRzXG5cblx0fVxuXG5cdHB1YmxpYyBtZW51KCl7XG5cblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJtZW51XCJdKTsgICAgICAgICAgLy8gY29tZSBmcm9tIHBhdGggaW4gcm91dGluZyB0c1xuXG5cdH1cblxuXHRwdWJsaWMgcHJvZHVjdCgpe1xuXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wicHJvZHVjdFwiXSk7ICAgICAgICAgIC8vIGNvbWUgZnJvbSBwYXRoIGluIHJvdXRpbmcgdHNcblxuXHR9XG5cblx0cHVibGljIHNlYXJjaFBocmFzZTogc3RyaW5nO1xuXG4gICAgcHVibGljIG9uU3VibWl0KHZhbHVlKSB7XG4gICAgICAgIGFsZXJ0KFwiWW91IGFyZSBzZWFyY2hpbmcgZm9yIFwiICsgdmFsdWUpO1xuICAgIH1cblxuICAgIG9uU2VhcmNoTGF5b3V0TG9hZGVkKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC5vYmplY3QuYW5kcm9pZCkge1xuICAgICAgICAgICAgZXZlbnQub2JqZWN0LmFuZHJvaWQuc2V0Rm9jdXNhYmxlSW5Ub3VjaE1vZGUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNlYXJjaEJhckxvYWRlZChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQub2JqZWN0LmFuZHJvaWQpIHtcbiAgICAgICAgICAgIGV2ZW50Lm9iamVjdC5hbmRyb2lkLmNsZWFyRm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyVGV4dGZpZWxkRm9jdXMoZXZlbnQpe1xuICAgIFx0ZXZlbnQubGF5b3V0LmFuZHJvaWQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuICAgIH1cblxufVxuXG5cbiAgICBcbiAgICAiXX0=