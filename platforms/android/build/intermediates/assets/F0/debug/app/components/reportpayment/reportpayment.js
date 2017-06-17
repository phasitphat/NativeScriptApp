"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var reportpayment_services_1 = require("./reportpayment.services");
var serverurl_1 = require("./../serverurl"); // get server test
var LocalStorage = require("nativescript-localstorage");
var ReportpaymentComponent = (function () {
    function ReportpaymentComponent(router, myService, server) {
        this.router = router;
        this.myService = myService;
        this.server = server;
        this.saveToGallery = true;
        this.keepAspectRatio = true;
        this.width = 300;
        this.height = 300;
        this.payment_owner = null;
        this.payment_target = null;
        this.payment_datetime = null;
        this.customer_name = null;
        this.total_price = null;
        this.getlocalorderid = null;
        this.localid = null;
        this.localorderid = null;
        this.localid = LocalStorage.getItem("customer_id");
        this.localorderid = LocalStorage.getItem("order_id");
    }
    ReportpaymentComponent.prototype.ngOnInit = function () {
        this.onGetData();
    };
    ReportpaymentComponent.prototype.onGetData = function () {
        this.getlocalorderid = this.localorderid;
        console.log("getlocal : " + this.getlocalorderid);
    };
    ReportpaymentComponent.prototype.makePostRequest = function () {
        var _this = this;
        console.log("makePostRequest");
        this.myService
            .postData({
            order: this.getlocalorderid,
            customer: this.localid,
            payment_owner: this.payment_owner,
            payment_target: this.payment_target,
            payment_datetime: this.payment_datetime,
            customer_name: this.customer_name,
            total_price: this.total_price,
        })
            .subscribe(function (res) {
            alert("Report Payment Success");
            _this.makePatchRequest();
        }, function (err) {
            alert("Report Payment Error\nPlease try again");
            console.log("Error : " + JSON.stringify(err));
        });
        LocalStorage.setItem("local_orderid_payment", this.getlocalorderid);
        console.log("getlocalorderid : " + this.getlocalorderid);
    };
    ReportpaymentComponent.prototype.makePatchRequest = function () {
        console.log("makePatchRequest");
        this.myService
            .patchData({
            status_payment: "2"
        })
            .subscribe(function (res) { }, function (err) { return console.log(JSON.stringify(err)); });
    };
    ReportpaymentComponent.prototype.submit = function () {
        if (this.getlocalorderid == null) {
            alert("Please Fill Order id");
            this.router.navigate(["menu"]);
        }
        else if (this.payment_owner == null) {
            alert("Please Fill Owner Bank");
            this.router.navigate(["menu"]);
        }
        else if (this.payment_target == null) {
            alert("Please Fill Target Bank");
            this.router.navigate(["menu"]);
        }
        else if (this.payment_datetime == null) {
            alert("Please Fill Payment Datetime");
            this.router.navigate(["menu"]);
        }
        else if (this.customer_name == null) {
            alert("Please Fill Customer Name");
            this.router.navigate(["menu"]);
        }
        else if (this.total_price == null) {
            alert("Please Fill Total Price");
            this.router.navigate(["menu"]);
        }
        else {
            this.makePostRequest();
            this.router.navigate(["menu"]);
        }
    };
    ReportpaymentComponent.prototype.back = function () {
        this.router.navigate(["myorder"]); // come from path in routing ts
    };
    ReportpaymentComponent.prototype.home = function () {
        this.router.navigate(["home"]); // come from path in routing ts
    };
    return ReportpaymentComponent;
}());
ReportpaymentComponent = __decorate([
    core_1.Component({
        selector: "reportpayment",
        templateUrl: "./components/reportpayment/reportpayment.html",
        providers: [reportpayment_services_1.MyHttpPostService, serverurl_1.ServerComponent]
    }),
    __metadata("design:paramtypes", [router_1.Router, reportpayment_services_1.MyHttpPostService, serverurl_1.ServerComponent])
], ReportpaymentComponent);
exports.ReportpaymentComponent = ReportpaymentComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0cGF5bWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9ydHBheW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQUN4QywwQ0FBdUM7QUFDdkMsbUVBQTZEO0FBRTdELDRDQUFpRCxDQUFDLGtCQUFrQjtBQUVwRSxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUUsMkJBQTJCLENBQUUsQ0FBQztBQVcxRCxJQUFhLHNCQUFzQjtJQWtCL0IsZ0NBQTJCLE1BQWMsRUFBVSxTQUE0QixFQUFVLE1BQXVCO1FBQXJGLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBZnpHLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLFVBQUssR0FBVyxHQUFHLENBQUM7UUFDcEIsV0FBTSxHQUFXLEdBQUcsQ0FBQztRQUV4QixrQkFBYSxHQUFXLElBQUksQ0FBQztRQUM3QixtQkFBYyxHQUFXLElBQUksQ0FBQztRQUM5QixxQkFBZ0IsR0FBVyxJQUFJLENBQUM7UUFDN0Isa0JBQWEsR0FBVyxJQUFJLENBQUM7UUFDN0IsZ0JBQVcsR0FBVyxJQUFJLENBQUM7UUFFM0Isb0JBQWUsR0FBVyxJQUFJLENBQUM7UUFDL0IsWUFBTyxHQUFXLElBQUksQ0FBQztRQUN2QixpQkFBWSxHQUFXLElBQUksQ0FBQztRQUcvQixJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBRUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFHTywwQ0FBUyxHQUFqQjtRQUVJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVPLGdEQUFlLEdBQXZCO1FBQUEsaUJBNEJDO1FBM0JHLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUUvQixJQUFJLENBQUMsU0FBUzthQUNULFFBQVEsQ0FBQztZQUViLEtBQUssRUFBRSxJQUFJLENBQUMsZUFBZTtZQUMzQixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDdEIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUM5QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FFOUIsQ0FBQzthQUNDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDVixLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUNoQyxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUU1QixDQUFDLEVBQ0QsVUFBQSxHQUFHO1lBQ0MsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7WUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxDQUFDO1FBRUgsWUFBWSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7SUFFMUQsQ0FBQztJQUVPLGlEQUFnQixHQUF4QjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUVoQyxJQUFJLENBQUMsU0FBUzthQUNULFNBQVMsQ0FBQztZQUNQLGNBQWMsRUFBRSxHQUFHO1NBQ3RCLENBQUM7YUFDRCxTQUFTLENBQUMsVUFBQSxHQUFHLElBQUssQ0FBQyxFQUNwQixVQUFBLEdBQUcsSUFBRSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFoQyxDQUFnQyxDQUFDLENBQUM7SUFHL0MsQ0FBQztJQUVHLHVDQUFNLEdBQWI7UUFFTyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDN0IsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUE7WUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQ2hDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1lBQy9CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztZQUNqQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQTtZQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLENBQUEsQ0FBQztZQUNuQyxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQTtZQUNyQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDaEMsS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUE7WUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQSxDQUFDO1lBQzlCLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFBO1lBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBQ0QsSUFBSSxDQUFBLENBQUM7WUFDRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUM7SUFFUixDQUFDO0lBRVMscUNBQUksR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFVLCtCQUErQjtJQUUvRSxDQUFDO0lBRU0scUNBQUksR0FBWDtRQUVJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFVLCtCQUErQjtJQUU1RSxDQUFDO0lBR0wsNkJBQUM7QUFBRCxDQUFDLEFBM0hELElBMkhDO0FBM0hZLHNCQUFzQjtJQVRsQyxnQkFBUyxDQUFDO1FBRVAsUUFBUSxFQUFFLGVBQWU7UUFDekIsV0FBVyxFQUFFLCtDQUErQztRQUM1RCxTQUFTLEVBQUUsQ0FBQywwQ0FBaUIsRUFBQywyQkFBZSxDQUFDO0tBRWpELENBQUM7cUNBcUJxQyxlQUFNLEVBQXFCLDBDQUFpQixFQUFrQiwyQkFBZTtHQWxCdkcsc0JBQXNCLENBMkhsQztBQTNIWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBNeUh0dHBQb3N0U2VydmljZSB9IGZyb20gXCIuL3JlcG9ydHBheW1lbnQuc2VydmljZXNcIjtcbmltcG9ydCB7IEltYWdlQXNzZXQgfSBmcm9tIFwiaW1hZ2UtYXNzZXRcIjtcbmltcG9ydCB7IFNlcnZlckNvbXBvbmVudCB9IGZyb20gXCIuLy4uL3NlcnZlcnVybFwiOyAvLyBnZXQgc2VydmVyIHRlc3RcblxubGV0IExvY2FsU3RvcmFnZSA9IHJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiICk7XG5cbkBDb21wb25lbnQoe1xuXG4gICAgc2VsZWN0b3I6IFwicmVwb3J0cGF5bWVudFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29tcG9uZW50cy9yZXBvcnRwYXltZW50L3JlcG9ydHBheW1lbnQuaHRtbFwiLFxuICAgIHByb3ZpZGVyczogW015SHR0cFBvc3RTZXJ2aWNlLFNlcnZlckNvbXBvbmVudF1cblxufSlcblxuXG5leHBvcnQgY2xhc3MgUmVwb3J0cGF5bWVudENvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgaW1hZ2VUYWtlbjogSW1hZ2VBc3NldDtcbiAgICBwdWJsaWMgc2F2ZVRvR2FsbGVyeTogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIGtlZXBBc3BlY3RSYXRpbzogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIHdpZHRoOiBudW1iZXIgPSAzMDA7XG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyID0gMzAwO1xuXG5cdHB1YmxpYyBwYXltZW50X293bmVyOiBzdHJpbmcgPSBudWxsO1xuXHRwdWJsaWMgcGF5bWVudF90YXJnZXQ6IHN0cmluZyA9IG51bGw7XG5cdHB1YmxpYyBwYXltZW50X2RhdGV0aW1lOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBjdXN0b21lcl9uYW1lOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyB0b3RhbF9wcmljZTogc3RyaW5nID0gbnVsbDtcblxuICAgIHB1YmxpYyBnZXRsb2NhbG9yZGVyaWQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIGxvY2FsaWQ6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIGxvY2Fsb3JkZXJpZDogc3RyaW5nID0gbnVsbDtcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIG15U2VydmljZTogTXlIdHRwUG9zdFNlcnZpY2UsIHByaXZhdGUgc2VydmVyOiBTZXJ2ZXJDb21wb25lbnQpe1xuICAgICAgICB0aGlzLmxvY2FsaWQgPSBMb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1c3RvbWVyX2lkXCIpO1xuICAgICAgICB0aGlzLmxvY2Fsb3JkZXJpZCA9IExvY2FsU3RvcmFnZS5nZXRJdGVtKFwib3JkZXJfaWRcIik7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG5cbiAgICAgICAgdGhpcy5vbkdldERhdGEoKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgb25HZXREYXRhKCkge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5nZXRsb2NhbG9yZGVyaWQgPSB0aGlzLmxvY2Fsb3JkZXJpZDtcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXRsb2NhbCA6IFwiK3RoaXMuZ2V0bG9jYWxvcmRlcmlkKTtcbiAgICB9XG4gICAgXG4gICAgcHJpdmF0ZSBtYWtlUG9zdFJlcXVlc3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibWFrZVBvc3RSZXF1ZXN0XCIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5teVNlcnZpY2VcbiAgICAgICAgICAgIC5wb3N0RGF0YSh7IFxuXG5cdCAgICAgICAgb3JkZXI6IHRoaXMuZ2V0bG9jYWxvcmRlcmlkLFxuXHQgICAgICAgIGN1c3RvbWVyOiB0aGlzLmxvY2FsaWQsXG5cdCAgICAgICAgcGF5bWVudF9vd25lcjogdGhpcy5wYXltZW50X293bmVyLFxuXHQgICAgICAgIHBheW1lbnRfdGFyZ2V0OiB0aGlzLnBheW1lbnRfdGFyZ2V0LFxuXHQgICAgICAgIHBheW1lbnRfZGF0ZXRpbWU6IHRoaXMucGF5bWVudF9kYXRldGltZSxcblx0ICAgICAgICBjdXN0b21lcl9uYW1lOiB0aGlzLmN1c3RvbWVyX25hbWUsXG4gICAgICAgICAgICB0b3RhbF9wcmljZTogdGhpcy50b3RhbF9wcmljZSxcblxuICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJSZXBvcnQgUGF5bWVudCBTdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMubWFrZVBhdGNoUmVxdWVzdCgpO1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyPT57XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJSZXBvcnQgUGF5bWVudCBFcnJvclxcblBsZWFzZSB0cnkgYWdhaW5cIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciA6IFwiK0pTT04uc3RyaW5naWZ5KGVycikpO1xuICAgICAgICB9KTtcblxuICAgICAgICBMb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2FsX29yZGVyaWRfcGF5bWVudFwiLCB0aGlzLmdldGxvY2Fsb3JkZXJpZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0bG9jYWxvcmRlcmlkIDogXCIrdGhpcy5nZXRsb2NhbG9yZGVyaWQpXG5cbiAgICB9XG5cbiAgICBwcml2YXRlIG1ha2VQYXRjaFJlcXVlc3QoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibWFrZVBhdGNoUmVxdWVzdFwiKTtcblxuICAgICAgICB0aGlzLm15U2VydmljZVxuICAgICAgICAgICAgLnBhdGNoRGF0YSh7IFxuICAgICAgICAgICAgICAgIHN0YXR1c19wYXltZW50OiBcIjJcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHt9LFxuICAgICAgICAgICAgZXJyPT5jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnIpKSk7XG5cblxuICAgIH1cblxuXHRwdWJsaWMgc3VibWl0KCl7XG5cbiAgICAgICAgaWYodGhpcy5nZXRsb2NhbG9yZGVyaWQgPT0gbnVsbCl7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBGaWxsIE9yZGVyIGlkXCIpXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJtZW51XCJdKTsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLnBheW1lbnRfb3duZXIgPT0gbnVsbCl7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBGaWxsIE93bmVyIEJhbmtcIilcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm1lbnVcIl0pOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMucGF5bWVudF90YXJnZXQgPT0gbnVsbCl7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBGaWxsIFRhcmdldCBCYW5rXCIpXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJtZW51XCJdKTsgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLnBheW1lbnRfZGF0ZXRpbWUgPT0gbnVsbCl7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBGaWxsIFBheW1lbnQgRGF0ZXRpbWVcIilcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm1lbnVcIl0pOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuY3VzdG9tZXJfbmFtZSA9PSBudWxsKXtcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIEZpbGwgQ3VzdG9tZXIgTmFtZVwiKVxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wibWVudVwiXSk7IFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy50b3RhbF9wcmljZSA9PSBudWxsKXtcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIEZpbGwgVG90YWwgUHJpY2VcIilcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm1lbnVcIl0pOyBcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy5tYWtlUG9zdFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIm1lbnVcIl0pOyBcbiAgICAgICAgfVxuICBcblx0fVxuXG4gICAgcHVibGljIGJhY2soKXtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wibXlvcmRlclwiXSk7ICAgICAgICAgIC8vIGNvbWUgZnJvbSBwYXRoIGluIHJvdXRpbmcgdHNcblxuICAgIH1cblxuICAgIHB1YmxpYyBob21lKCl7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiaG9tZVwiXSk7ICAgICAgICAgIC8vIGNvbWUgZnJvbSBwYXRoIGluIHJvdXRpbmcgdHNcblxuICAgIH1cblxuXG59XG5cbiAgICBcbiAgICAiXX0=