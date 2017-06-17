"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var reportproblem_services_1 = require("./reportproblem.services");
var serverurl_1 = require("./../serverurl"); // get server test
var LocalStorage = require("nativescript-localstorage");
var ReportproblemComponent = (function () {
    function ReportproblemComponent(router, myService, server) {
        this.router = router;
        this.myService = myService;
        this.server = server;
        this.content = null;
        this.contact = null;
        this.getlocalorderid = null;
        this.localid = null;
        this.localorderid = null;
        this.localid = LocalStorage.getItem("customer_id");
        this.localorderid = LocalStorage.getItem("order_id");
    }
    ReportproblemComponent.prototype.ngOnInit = function () {
        this.onGetData();
    };
    ReportproblemComponent.prototype.onGetData = function () {
        this.getlocalorderid = this.localorderid;
    };
    ReportproblemComponent.prototype.makePostRequest = function () {
        var _this = this;
        console.log("makePostRequest");
        this.myService
            .postData({
            order: this.getlocalorderid,
            customer: this.localid,
            content_report: this.content,
            contact: this.contact,
        })
            .subscribe(function (res) {
            alert("Report Problem Success");
            _this.makePatchRequest();
        }, function (err) {
            alert("Report Problem Error\nPlease try again");
            console.log("Error : " + JSON.stringify(err));
        });
        LocalStorage.setItem("local_orderid_report", this.getlocalorderid);
    };
    ReportproblemComponent.prototype.makePatchRequest = function () {
        console.log("makePatchRequest");
        this.myService
            .patchData({
            status_payment: "3"
        })
            .subscribe(function (res) { }, function (err) { return console.log(JSON.stringify(err)); });
    };
    ReportproblemComponent.prototype.submit = function () {
        if (this.getlocalorderid == null) {
            alert("Please Fill Order id");
            this.router.navigate(["menu"]);
        }
        else if (this.content == null) {
            alert("Please Fill Content Problem");
            this.router.navigate(["menu"]);
        }
        else if (this.contact == null) {
            alert("Please Fill Contact");
            this.router.navigate(["menu"]);
        }
        else {
            this.makePostRequest();
            this.router.navigate(["menu"]);
        }
    };
    ReportproblemComponent.prototype.back = function () {
        this.router.navigate(["myorder"]); // come from path in routing ts
    };
    ReportproblemComponent.prototype.home = function () {
        this.router.navigate(["home"]); // come from path in routing ts
    };
    return ReportproblemComponent;
}());
ReportproblemComponent = __decorate([
    core_1.Component({
        selector: "reportproblem",
        templateUrl: "./components/reportproblem/reportproblem.html",
        providers: [reportproblem_services_1.MyHttpPostService, serverurl_1.ServerComponent]
    }),
    __metadata("design:paramtypes", [router_1.Router, reportproblem_services_1.MyHttpPostService, serverurl_1.ServerComponent])
], ReportproblemComponent);
exports.ReportproblemComponent = ReportproblemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0cHJvYmxlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9ydHByb2JsZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQUN4QywwQ0FBdUM7QUFDdkMsbUVBQTZEO0FBQzdELDRDQUFpRCxDQUFDLGtCQUFrQjtBQUNwRSxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUUsMkJBQTJCLENBQUUsQ0FBQztBQVcxRCxJQUFhLHNCQUFzQjtJQVkvQixnQ0FBMkIsTUFBYyxFQUFVLFNBQTRCLEVBQVUsTUFBdUI7UUFBckYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFWekcsWUFBTyxHQUFXLElBQUksQ0FBQztRQUN2QixZQUFPLEdBQVcsSUFBSSxDQUFDO1FBS3ZCLG9CQUFlLEdBQVcsSUFBSSxDQUFDO1FBQy9CLFlBQU8sR0FBVyxJQUFJLENBQUM7UUFDdkIsaUJBQVksR0FBVyxJQUFJLENBQUM7UUFHL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQseUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRU8sMENBQVMsR0FBakI7UUFFSSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0MsQ0FBQztJQUVPLGdEQUFlLEdBQXZCO1FBQUEsaUJBd0JDO1FBdkJHLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUUvQixJQUFJLENBQUMsU0FBUzthQUNULFFBQVEsQ0FBQztZQUVOLEtBQUssRUFBRSxJQUFJLENBQUMsZUFBZTtZQUMzQixRQUFR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aW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTXlIdHRwUG9zdFNlcnZpY2UgfSBmcm9tIFwiLi9yZXBvcnRwcm9ibGVtLnNlcnZpY2VzXCI7XG5pbXBvcnQgeyBTZXJ2ZXJDb21wb25lbnQgfSBmcm9tIFwiLi8uLi9zZXJ2ZXJ1cmxcIjsgLy8gZ2V0IHNlcnZlciB0ZXN0XG5sZXQgTG9jYWxTdG9yYWdlID0gcmVxdWlyZSggXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIgKTtcblxuQENvbXBvbmVudCh7XG5cbiAgICBzZWxlY3RvcjogXCJyZXBvcnRwcm9ibGVtXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jb21wb25lbnRzL3JlcG9ydHByb2JsZW0vcmVwb3J0cHJvYmxlbS5odG1sXCIsXG4gICAgcHJvdmlkZXJzOiBbTXlIdHRwUG9zdFNlcnZpY2UsU2VydmVyQ29tcG9uZW50XVxuXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBSZXBvcnRwcm9ibGVtQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBjb250ZW50OiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBjb250YWN0OiBzdHJpbmcgPSBudWxsO1xuXG4gICAgcHVibGljIGdldENvbnRlbnRfUmVwb3J0OiBzdHJpbmc7XG4gICAgcHVibGljIGdldE9yZGVyX0lkOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgZ2V0bG9jYWxvcmRlcmlkOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBsb2NhbGlkOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBsb2NhbG9yZGVyaWQ6IHN0cmluZyA9IG51bGw7XG5cdFxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIG15U2VydmljZTogTXlIdHRwUG9zdFNlcnZpY2UsIHByaXZhdGUgc2VydmVyOiBTZXJ2ZXJDb21wb25lbnQpe1xuICAgICAgICB0aGlzLmxvY2FsaWQgPSBMb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1c3RvbWVyX2lkXCIpO1xuICAgICAgICB0aGlzLmxvY2Fsb3JkZXJpZCA9IExvY2FsU3RvcmFnZS5nZXRJdGVtKFwib3JkZXJfaWRcIik7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMub25HZXREYXRhKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkdldERhdGEoKSB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmdldGxvY2Fsb3JkZXJpZCA9IHRoaXMubG9jYWxvcmRlcmlkO1xuICAgIH1cbiAgICBcbiAgICBwcml2YXRlIG1ha2VQb3N0UmVxdWVzdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJtYWtlUG9zdFJlcXVlc3RcIik7XG5cbiAgICAgICAgdGhpcy5teVNlcnZpY2VcbiAgICAgICAgICAgIC5wb3N0RGF0YSh7IFxuXG4gICAgICAgICAgICAgICAgb3JkZXI6IHRoaXMuZ2V0bG9jYWxvcmRlcmlkLFxuICAgICAgICAgICAgICAgIGN1c3RvbWVyOiB0aGlzLmxvY2FsaWQsXG4gICAgICAgICAgICBcdGNvbnRlbnRfcmVwb3J0OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgY29udGFjdDogdGhpcy5jb250YWN0LFxuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUmVwb3J0IFByb2JsZW0gU3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1ha2VQYXRjaFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycj0+e1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiUmVwb3J0IFByb2JsZW0gRXJyb3JcXG5QbGVhc2UgdHJ5IGFnYWluXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgOiBcIitKU09OLnN0cmluZ2lmeShlcnIpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgTG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbF9vcmRlcmlkX3JlcG9ydFwiLCB0aGlzLmdldGxvY2Fsb3JkZXJpZCk7XG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG1ha2VQYXRjaFJlcXVlc3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibWFrZVBhdGNoUmVxdWVzdFwiKTtcblxuICAgICAgICB0aGlzLm15U2VydmljZVxuICAgICAgICAgICAgLnBhdGNoRGF0YSh7IFxuICAgICAgICAgICAgICAgIHN0YXR1c19wYXltZW50OiBcIjNcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHt9LFxuICAgICAgICAgICAgZXJyPT5jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnIpKSk7XG5cblxuICAgIH1cblxuXHRwdWJsaWMgc3VibWl0KCl7XG5cbiAgICAgICAgaWYodGhpcy5nZXRsb2NhbG9yZGVyaWQgPT0gbnVsbCl7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBGaWxsIE9yZGVyIGlkXCIpXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJtZW51XCJdKTsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLmNvbnRlbnQgPT0gbnVsbCl7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBGaWxsIENvbnRlbnQgUHJvYmxlbVwiKVxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wibWVudVwiXSk7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5jb250YWN0ID09IG51bGwpe1xuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgRmlsbCBDb250YWN0XCIpXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJtZW51XCJdKTsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMubWFrZVBvc3RSZXF1ZXN0KCk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJtZW51XCJdKTsgXG4gICAgICAgIH1cblxuXG5cdH1cblxuICAgIHB1YmxpYyBiYWNrKCl7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm15b3JkZXJcIl0pOyAgICAgICAgICAvLyBjb21lIGZyb20gcGF0aCBpbiByb3V0aW5nIHRzXG5cbiAgICB9XG5cbiAgICBwdWJsaWMgaG9tZSgpe1xuXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImhvbWVcIl0pOyAgICAgICAgICAvLyBjb21lIGZyb20gcGF0aCBpbiByb3V0aW5nIHRzXG5cbiAgICB9XG5cbn1cblxuICAgIFxuICAgICJdfQ==