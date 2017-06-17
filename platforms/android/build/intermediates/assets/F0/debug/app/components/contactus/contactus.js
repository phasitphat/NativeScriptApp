"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var contactus_services_1 = require("./contactus.services");
var serverurl_1 = require("./../serverurl"); // get server test
var LocalStorage = require("nativescript-localstorage");
var ContactusComponent = (function () {
    function ContactusComponent(router, myService, server) {
        this.router = router;
        this.myService = myService;
        this.server = server;
        this.getsubject = null;
        this.getcontent = null;
        this.localid = LocalStorage.getItem("customer_id");
    }
    ContactusComponent.prototype.makePostRequest = function () {
        console.log("makePostRequest");
        this.myService
            .postData({
            customer: this.localid,
            subject: this.getsubject,
            content: this.getcontent,
        })
            .subscribe(function (res) {
            alert("Contact Success");
            // this.isItemVisible = true;
        }, function (err) {
            alert("Contact Us Error\nPlease try again");
            console.log("Error : " + JSON.stringify(err));
        });
    };
    ContactusComponent.prototype.submit = function () {
        if (this.getsubject == null) {
            alert("Please Fill Subject");
            this.router.navigate(["contactus"]);
        }
        else if (this.getcontent == null) {
            alert("Please Fill Content");
            this.router.navigate(["contactus"]);
        }
        else {
            this.makePostRequest();
            this.router.navigate(["menu"]);
        }
    };
    ContactusComponent.prototype.back = function () {
        this.router.navigate(["menu"]); // come from path in routing ts
    };
    return ContactusComponent;
}());
ContactusComponent = __decorate([
    core_1.Component({
        selector: "contactus",
        templateUrl: "./components/contactus/contactus.html",
        providers: [contactus_services_1.MyHttpPostService, serverurl_1.ServerComponent]
    }),
    __metadata("design:paramtypes", [router_1.Router, contactus_services_1.MyHttpPostService, serverurl_1.ServerComponent])
], ContactusComponent);
exports.ContactusComponent = ContactusComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBd0M7QUFDeEMsMENBQXVDO0FBQ3ZDLDJEQUF5RDtBQUN6RCw0Q0FBaUQsQ0FBQyxrQkFBa0I7QUFDcEUsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFFLDJCQUEyQixDQUFFLENBQUM7QUFXMUQsSUFBYSxrQkFBa0I7SUFPM0IsNEJBQTJCLE1BQWMsRUFBVSxTQUE0QixFQUFVLE1BQXVCO1FBQXJGLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBSHpHLGVBQVUsR0FBVyxJQUFJLENBQUM7UUFDMUIsZUFBVSxHQUFXLElBQUksQ0FBQztRQUc3QixJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVPLDRDQUFlLEdBQXZCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxTQUFTO2FBQ1QsUUFBUSxDQUFDO1lBRVQsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3RCLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVTtZQUN4QixPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVU7U0FFeEIsQ0FBQzthQUNELFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDVixLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUN6Qiw2QkFBNkI7UUFFakMsQ0FBQyxFQUNELFVBQUEsR0FBRztZQUNDLEtBQUssQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFHRyxtQ0FBTSxHQUFiO1FBQ08sRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBRXhCLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUV4QyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztZQUU3QixLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQTtZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFeEMsQ0FBQztRQUNELElBQUksQ0FBQSxDQUFDO1lBQ0QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDO0lBRUwsQ0FBQztJQUVHLGlDQUFJLEdBQVg7UUFDTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBVSwrQkFBK0I7SUFDNUUsQ0FBQztJQUVMLHlCQUFDO0FBQUQsQ0FBQyxBQXpERCxJQXlEQztBQXpEWSxrQkFBa0I7SUFUOUIsZ0JBQVMsQ0FBQztRQUVQLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSx1Q0FBdUM7UUFDcEQsU0FBUyxFQUFFLENBQUMsc0NBQWlCLEVBQUMsMkJBQWUsQ0FBQztLQUVqRCxDQUFDO3FDQVVxQyxlQUFNLEVBQXFCLHNDQUFpQixFQUFrQiwyQkFBZTtHQVB2RyxrQkFBa0IsQ0F5RDlCO0FBekRZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE15SHR0cFBvc3RTZXJ2aWNlIH0gZnJvbSBcIi4vY29udGFjdHVzLnNlcnZpY2VzXCI7XG5pbXBvcnQgeyBTZXJ2ZXJDb21wb25lbnQgfSBmcm9tIFwiLi8uLi9zZXJ2ZXJ1cmxcIjsgLy8gZ2V0IHNlcnZlciB0ZXN0XG5sZXQgTG9jYWxTdG9yYWdlID0gcmVxdWlyZSggXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIgKTtcblxuQENvbXBvbmVudCh7XG5cbiAgICBzZWxlY3RvcjogXCJjb250YWN0dXNcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvbXBvbmVudHMvY29udGFjdHVzL2NvbnRhY3R1cy5odG1sXCIsXG4gICAgcHJvdmlkZXJzOiBbTXlIdHRwUG9zdFNlcnZpY2UsU2VydmVyQ29tcG9uZW50XVxuXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBDb250YWN0dXNDb21wb25lbnQge1xuXG4gICAgcHVibGljIGxvY2FsaWQ6IG51bWJlcjtcblxuICAgIHB1YmxpYyBnZXRzdWJqZWN0OiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBnZXRjb250ZW50OiBzdHJpbmcgPSBudWxsO1xuXHRcbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBteVNlcnZpY2U6IE15SHR0cFBvc3RTZXJ2aWNlLCBwcml2YXRlIHNlcnZlcjogU2VydmVyQ29tcG9uZW50KXtcbiAgICAgICAgdGhpcy5sb2NhbGlkID0gTG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXN0b21lcl9pZFwiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG1ha2VQb3N0UmVxdWVzdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJtYWtlUG9zdFJlcXVlc3RcIik7XG4gICAgICAgIHRoaXMubXlTZXJ2aWNlXG4gICAgICAgICAgICAucG9zdERhdGEoeyBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXHRjdXN0b21lcjogdGhpcy5sb2NhbGlkLFxuICAgICAgICAgICAgXHRzdWJqZWN0OiB0aGlzLmdldHN1YmplY3QsXG4gICAgICAgICAgICBcdGNvbnRlbnQ6IHRoaXMuZ2V0Y29udGVudCxcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChcIkNvbnRhY3QgU3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmlzSXRlbVZpc2libGUgPSB0cnVlO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyPT57XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJDb250YWN0IFVzIEVycm9yXFxuUGxlYXNlIHRyeSBhZ2FpblwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIDogXCIrSlNPTi5zdHJpbmdpZnkoZXJyKSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cblxuXHRwdWJsaWMgc3VibWl0KCkge1xuICAgICAgICBpZih0aGlzLmdldHN1YmplY3QgPT0gbnVsbCl7XG5cbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIEZpbGwgU3ViamVjdFwiKVxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiY29udGFjdHVzXCJdKTsgXG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuZ2V0Y29udGVudCA9PSBudWxsKXtcblxuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgRmlsbCBDb250ZW50XCIpXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJjb250YWN0dXNcIl0pOyBcblxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLm1ha2VQb3N0UmVxdWVzdCgpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wibWVudVwiXSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG5cdHB1YmxpYyBiYWNrKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJtZW51XCJdKTsgICAgICAgICAgLy8gY29tZSBmcm9tIHBhdGggaW4gcm91dGluZyB0c1xuICAgIH1cblxufVxuXG4gICAgXG4gICAgIl19