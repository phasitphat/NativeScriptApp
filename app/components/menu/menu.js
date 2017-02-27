"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var MenuComponent = (function () {
    function MenuComponent(router) {
        this.router = router;
    }
    MenuComponent.prototype.editProfile = function () {
        this.router.navigate(["editprofile"]);
    };
    MenuComponent.prototype.myOrder = function () {
        this.router.navigate(["myorder"]);
    };
    MenuComponent.prototype.contactUs = function () {
        this.router.navigate(["contactus"]);
    };
    MenuComponent.prototype.signOut = function () {
        this.router.navigate(["/"]);
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        selector: "menu",
        templateUrl: "./components/menu/menu.html",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQUN4QywwQ0FBdUM7QUFXdkMsSUFBYSxhQUFhO0lBRXRCLHVCQUEyQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFFLENBQUM7SUFFeEMsbUNBQVcsR0FBbEI7UUFFQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFFdkMsQ0FBQztJQUNNLCtCQUFPLEdBQWQ7UUFFQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFFbkMsQ0FBQztJQUNNLGlDQUFTLEdBQWhCO1FBRUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBRXJDLENBQUM7SUFDTSwrQkFBTyxHQUFkO1FBRUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRTdCLENBQUM7SUFLRixvQkFBQztBQUFELENBQUMsQUE1QkQsSUE0QkM7QUE1QlksYUFBYTtJQVR6QixnQkFBUyxDQUFDO1FBRVAsUUFBUSxFQUFFLE1BQU07UUFFaEIsV0FBVyxFQUFFLDZCQUE2QjtLQUU3QyxDQUFDO3FDQUtxQyxlQUFNO0dBRmhDLGFBQWEsQ0E0QnpCO0FBNUJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcblxuICAgIHNlbGVjdG9yOiBcIm1lbnVcIixcblxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29tcG9uZW50cy9tZW51L21lbnUuaHRtbFwiLFxuXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IHtcblx0XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpe31cblxuXHRwdWJsaWMgZWRpdFByb2ZpbGUoKXtcblxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImVkaXRwcm9maWxlXCJdKTsgICAgICAgICAgXG5cblx0fVxuXHRwdWJsaWMgbXlPcmRlcigpe1xuXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wibXlvcmRlclwiXSk7ICAgICAgICAgIFxuXG5cdH1cblx0cHVibGljIGNvbnRhY3RVcygpe1xuXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiY29udGFjdHVzXCJdKTsgICAgICAgICAgXG5cblx0fVxuXHRwdWJsaWMgc2lnbk91dCgpe1xuXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7ICAgICAgICAgIFxuXG5cdH1cblxuXHRcblxuXG59XG5cbiAgICBcbiAgICAiXX0=