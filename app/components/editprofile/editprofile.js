"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var EditprofileComponent = (function () {
    function EditprofileComponent(router) {
        this.router = router;
    }
    EditprofileComponent.prototype.menu = function () {
        alert("Edit Profile Success");
        this.router.navigate(["menu"]); // come from path in routing ts
    };
    return EditprofileComponent;
}());
EditprofileComponent = __decorate([
    core_1.Component({
        selector: "editprofile",
        templateUrl: "./components/editprofile/editprofile.html",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], EditprofileComponent);
exports.EditprofileComponent = EditprofileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdHByb2ZpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlZGl0cHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXdDO0FBQ3hDLDBDQUF1QztBQVd2QyxJQUFhLG9CQUFvQjtJQUU3Qiw4QkFBMkIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRSxDQUFDO0lBRXhDLG1DQUFJLEdBQVg7UUFFQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBVSwrQkFBK0I7SUFFekUsQ0FBQztJQUVGLDJCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYWSxvQkFBb0I7SUFUaEMsZ0JBQVMsQ0FBQztRQUVQLFFBQVEsRUFBRSxhQUFhO1FBRXZCLFdBQVcsRUFBRSwyQ0FBMkM7S0FFM0QsQ0FBQztxQ0FLcUMsZUFBTTtHQUZoQyxvQkFBb0IsQ0FXaEM7QUFYWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuXG4gICAgc2VsZWN0b3I6IFwiZWRpdHByb2ZpbGVcIixcblxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29tcG9uZW50cy9lZGl0cHJvZmlsZS9lZGl0cHJvZmlsZS5odG1sXCIsXG5cbn0pXG5cblxuZXhwb3J0IGNsYXNzIEVkaXRwcm9maWxlQ29tcG9uZW50IHtcblx0XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpe31cblxuXHRwdWJsaWMgbWVudSgpe1xuXG5cdFx0YWxlcnQoXCJFZGl0IFByb2ZpbGUgU3VjY2Vzc1wiKTtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJtZW51XCJdKTsgICAgICAgICAgLy8gY29tZSBmcm9tIHBhdGggaW4gcm91dGluZyB0c1xuXG5cdH1cblxufVxuXG5cbiAgICBcbiAgICAiXX0=