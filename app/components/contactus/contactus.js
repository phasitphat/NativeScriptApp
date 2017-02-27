"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ContactusComponent = (function () {
    function ContactusComponent(router) {
        this.router = router;
    }
    ContactusComponent.prototype.menu = function () {
        this.router.navigate(["menu"]); // come from path in routing ts
    };
    return ContactusComponent;
}());
ContactusComponent = __decorate([
    core_1.Component({
        selector: "contactus",
        templateUrl: "./components/contactus/contactus.html",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ContactusComponent);
exports.ContactusComponent = ContactusComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBd0M7QUFDeEMsMENBQXVDO0FBV3ZDLElBQWEsa0JBQWtCO0lBRTNCLDRCQUEyQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFFLENBQUM7SUFFeEMsaUNBQUksR0FBWDtRQUVDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFVLCtCQUErQjtJQUV6RSxDQUFDO0lBR0YseUJBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLGtCQUFrQjtJQVQ5QixnQkFBUyxDQUFDO1FBRVAsUUFBUSxFQUFFLFdBQVc7UUFFckIsV0FBVyxFQUFFLHVDQUF1QztLQUV2RCxDQUFDO3FDQUtxQyxlQUFNO0dBRmhDLGtCQUFrQixDQVc5QjtBQVhZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG5cbiAgICBzZWxlY3RvcjogXCJjb250YWN0dXNcIixcblxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29tcG9uZW50cy9jb250YWN0dXMvY29udGFjdHVzLmh0bWxcIixcblxufSlcblxuXG5leHBvcnQgY2xhc3MgQ29udGFjdHVzQ29tcG9uZW50IHtcblx0XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpe31cblxuXHRwdWJsaWMgbWVudSgpe1xuXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wibWVudVwiXSk7ICAgICAgICAgIC8vIGNvbWUgZnJvbSBwYXRoIGluIHJvdXRpbmcgdHNcblxuXHR9XG5cblxufVxuXG4gICAgXG4gICAgIl19