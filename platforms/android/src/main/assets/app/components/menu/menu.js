"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs = require("ui/dialogs");
var LocalStorage = require("nativescript-localstorage");
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
    MenuComponent.prototype.history = function () {
        this.router.navigate(["history"]);
    };
    MenuComponent.prototype.back = function () {
        this.router.navigate(["home"]);
    };
    MenuComponent.prototype.signOut = function () {
        var _this = this;
        dialogs.confirm({
            title: "Sign Out",
            message: "Do you want to Sign out?",
            okButtonText: "yes",
            cancelButtonText: "no",
        }).then(function (result) {
            // result argument is boolean
            if (result == true) {
                LocalStorage.clear();
                _this.router.navigate(["/"]);
            }
            else {
                _this.router.navigate(["menu"]);
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQUN4QywwQ0FBdUM7QUFDdkMsb0NBQXVDO0FBQ3ZDLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBRSwyQkFBMkIsQ0FBRSxDQUFDO0FBVzFELElBQWEsYUFBYTtJQUV0Qix1QkFBMkIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRSxDQUFDO0lBRXhDLG1DQUFXLEdBQWxCO1FBRUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBRXZDLENBQUM7SUFFTSwrQkFBTyxHQUFkO1FBRUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBRW5DLENBQUM7SUFFTSxpQ0FBUyxHQUFoQjtRQUVDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUVyQyxDQUFDO0lBRVMsK0JBQU8sR0FBZDtRQUVJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUV0QyxDQUFDO0lBRU0sNEJBQUksR0FBWDtRQUVJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUVuQyxDQUFDO0lBRUcsK0JBQU8sR0FBZDtRQUFBLGlCQW9CQztRQWxCTSxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ1osS0FBSyxFQUFFLFVBQVU7WUFDakIsT0FBTyxFQUFFLDBCQUEwQjtZQUNuQyxZQUFZLEVBQUUsS0FBSztZQUNuQixnQkFBZ0IsRUFBRSxJQUFJO1NBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO1lBRVYsNkJBQTZCO1lBRTdCLEVBQUUsQ0FBQSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUN2QixZQUFZLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwQixDQUFDO1lBQ0QsSUFBSSxDQUFBLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzNCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUVWLENBQUM7SUFFRixvQkFBQztBQUFELENBQUMsQUF4REQsSUF3REM7QUF4RFksYUFBYTtJQVR6QixnQkFBUyxDQUFDO1FBRVAsUUFBUSxFQUFFLE1BQU07UUFFaEIsV0FBVyxFQUFFLDZCQUE2QjtLQUU3QyxDQUFDO3FDQUtxQyxlQUFNO0dBRmhDLGFBQWEsQ0F3RHpCO0FBeERZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IGRpYWxvZ3MgPSByZXF1aXJlKFwidWkvZGlhbG9nc1wiKTtcbmxldCBMb2NhbFN0b3JhZ2UgPSByZXF1aXJlKCBcIm5hdGl2ZXNjcmlwdC1sb2NhbHN0b3JhZ2VcIiApO1xuXG5AQ29tcG9uZW50KHtcblxuICAgIHNlbGVjdG9yOiBcIm1lbnVcIixcblxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29tcG9uZW50cy9tZW51L21lbnUuaHRtbFwiLFxuXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IHtcblx0XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpe31cblxuXHRwdWJsaWMgZWRpdFByb2ZpbGUoKXtcblxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImVkaXRwcm9maWxlXCJdKTsgICAgICAgICAgXG5cblx0fVxuXHRcblx0cHVibGljIG15T3JkZXIoKXtcblxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm15b3JkZXJcIl0pOyAgICAgICAgICBcblxuXHR9XG5cblx0cHVibGljIGNvbnRhY3RVcygpe1xuXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiY29udGFjdHVzXCJdKTsgICAgICAgICAgXG5cblx0fVxuXG4gICAgcHVibGljIGhpc3RvcnkoKXtcblxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJoaXN0b3J5XCJdKTsgICAgICAgICAgXG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYmFjaygpe1xuXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImhvbWVcIl0pOyAgICAgICAgICBcblxuICAgIH1cblxuXHRwdWJsaWMgc2lnbk91dCgpe1xuXG4gICAgICAgIGRpYWxvZ3MuY29uZmlybSh7XG4gICAgICAgICAgICB0aXRsZTogXCJTaWduIE91dFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJEbyB5b3Ugd2FudCB0byBTaWduIG91dD9cIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJ5ZXNcIixcbiAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwibm9cIixcbiAgICAgICAgfSkudGhlbihyZXN1bHQgPT4ge1xuXG4gICAgICAgICAgICAvLyByZXN1bHQgYXJndW1lbnQgaXMgYm9vbGVhblxuXG4gICAgICAgICAgICBpZihyZXN1bHQgPT0gdHJ1ZSl7XG5cdCAgXHRcdCAgXHRMb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblx0XHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgXHRcdCAgXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm1lbnVcIl0pOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7ICAgXG5cblx0fVxuXG59XG5cbiAgICBcbiAgICAiXX0=