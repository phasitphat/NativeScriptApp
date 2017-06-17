"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var history_services_1 = require("./history.services");
var dialogs = require("ui/dialogs");
var serverurl_1 = require("./../serverurl"); // get server test
var LocalStorage = require("nativescript-localstorage");
var HistoryComponent = (function () {
    // public items = [];
    function HistoryComponent(router, myService, server) {
        this.router = router;
        this.myService = myService;
        this.server = server;
        this.productinorder_name = [];
        this.price_per_product = [];
        this.orderlist = [];
        this.trackinglist = [];
    }
    HistoryComponent.prototype.ngOnInit = function () {
        this.localid = LocalStorage.getItem("customer_id");
        this.localorderid = LocalStorage.getItem("order_id");
        this.extractData();
    };
    HistoryComponent.prototype.Receive = function (historyid) {
        var _this = this;
        dialogs.confirm({
            title: "Receive Product",
            message: "Are you Receive all Product?\n(This order will Close when you say \"yes\")",
            okButtonText: "yes",
            cancelButtonText: "no",
        }).then(function (result) {
            // result argument is boolean
            if (result == true) {
                LocalStorage.setItem("localorderid_history", historyid); /// set
                console.log("makePatchRequest");
                _this.myService
                    .patchData({
                    status_payment: "4"
                })
                    .subscribe(function (res) {
                    alert("Receive Order Success");
                    _this.router.navigate(["menu"]);
                }, function (err) {
                    alert("Recevied Error\nPlease try again");
                    console.log("Error : " + JSON.stringify(err));
                });
            }
            else {
                _this.router.navigate(["history"]);
            }
        });
    };
    HistoryComponent.prototype.extractData = function () {
        var _this = this;
        console.log("extractData");
        this.myService.getData()
            .subscribe(function (result) { return _this.onGetDataSuccess(result); }, function (error) { return _this.onGetDataError(error); });
    };
    HistoryComponent.prototype.onGetDataSuccess = function (res) {
        console.log("Type : " + typeof res);
        for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
            var pio = res_1[_i];
            if (this.localid == pio.customer) {
                this.orderlist.push(pio);
            }
        }
        console.log("onGetDataSuccess (History)");
    };
    HistoryComponent.prototype.onGetDataError = function (error) {
        var body = error.json() || "";
        var err = body.error || JSON.stringify(body);
        console.log("onGetDataError: " + err);
    };
    HistoryComponent.prototype.menu = function () {
        this.router.navigate(["menu"]); // come from path in routing ts
    };
    HistoryComponent.prototype.home = function () {
        this.router.navigate(["home"]); // come from path in routing ts
    };
    return HistoryComponent;
}());
HistoryComponent = __decorate([
    core_1.Component({
        selector: "history",
        templateUrl: "./components/history/history.html",
        providers: [history_services_1.MyHttpGetService, serverurl_1.ServerComponent]
    }),
    __metadata("design:paramtypes", [router_1.Router, history_services_1.MyHttpGetService, serverurl_1.ServerComponent])
], HistoryComponent);
exports.HistoryComponent = HistoryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhpc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF3QztBQUN4QywwQ0FBdUM7QUFDdkMsdURBQXNEO0FBQ3RELG9DQUF1QztBQUN2Qyw0Q0FBaUQsQ0FBQyxrQkFBa0I7QUFDcEUsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFFLDJCQUEyQixDQUFFLENBQUM7QUFXMUQsSUFBYSxnQkFBZ0I7SUFnQnpCLHFCQUFxQjtJQUVyQiwwQkFBMkIsTUFBYyxFQUFVLFNBQTJCLEVBQVUsTUFBdUI7UUFBcEYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFUeEcsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUd2QixjQUFTLEdBQUcsRUFBRSxDQUFBO1FBQ2QsaUJBQVksR0FBRyxFQUFFLENBQUE7SUFJeUYsQ0FBQztJQUVsSCxtQ0FBUSxHQUFSO1FBRUksSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxTQUFTO1FBQWpCLGlCQW9DQztRQWxDRyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ1osS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixPQUFPLEVBQUUsNEVBQTRFO1lBQ3JGLFlBQVksRUFBRSxLQUFLO1lBQ25CLGdCQUFnQixFQUFFLElBQUk7U0FDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFFViw2QkFBNkI7WUFFN0IsRUFBRSxDQUFBLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBRWYsWUFBWSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU87Z0JBRWhFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFFaEMsS0FBSSxDQUFDLFNBQVM7cUJBQ1QsU0FBUyxDQUFDO29CQUNQLGNBQWMsRUFBRSxHQUFHO2lCQUN0QixDQUFDO3FCQUNELFNBQVMsQ0FBQyxVQUFBLEdBQUc7b0JBQ1YsS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUE7b0JBQzlCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtnQkFDbEMsQ0FBQyxFQUNMLFVBQUEsR0FBRztvQkFDQyxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztvQkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUM7WUFDRCxJQUFJLENBQUEsQ0FBQztnQkFDRyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBR1AsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFBQSxpQkFPQztRQU5HLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7YUFDbkIsU0FBUyxDQUNWLFVBQUMsTUFBTSxJQUFLLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUE3QixDQUE2QixFQUN6QyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQTFCLENBQTBCLENBQ3BDLENBQUM7SUFDVixDQUFDO0lBR08sMkNBQWdCLEdBQXhCLFVBQXlCLEdBQUc7UUFFeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtRQUVqQyxHQUFHLENBQUEsQ0FBWSxVQUFHLEVBQUgsV0FBRyxFQUFILGlCQUFHLEVBQUgsSUFBRztZQUFkLElBQUksR0FBRyxZQUFBO1lBRVAsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDM0IsQ0FBQztTQUVKO1FBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBRTlDLENBQUM7SUFHTyx5Q0FBYyxHQUF0QixVQUF1QixLQUFxQjtRQUN4QyxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ2hDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTSwrQkFBSSxHQUFYO1FBRUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQVUsK0JBQStCO0lBRTVFLENBQUM7SUFFTSwrQkFBSSxHQUFYO1FBRUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQVUsK0JBQStCO0lBRTVFLENBQUM7SUFJTCx1QkFBQztBQUFELENBQUMsQUFqSEQsSUFpSEM7QUFqSFksZ0JBQWdCO0lBVDVCLGdCQUFTLENBQUM7UUFFUCxRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsbUNBQW1DO1FBQ2hELFNBQVMsRUFBRSxDQUFDLG1DQUFnQixFQUFDLDJCQUFlLENBQUM7S0FFaEQsQ0FBQztxQ0FxQnFDLGVBQU0sRUFBcUIsbUNBQWdCLEVBQWtCLDJCQUFlO0dBbEJ0RyxnQkFBZ0IsQ0FpSDVCO0FBakhZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE15SHR0cEdldFNlcnZpY2UgfSBmcm9tIFwiLi9oaXN0b3J5LnNlcnZpY2VzXCI7XG5pbXBvcnQgZGlhbG9ncyA9IHJlcXVpcmUoXCJ1aS9kaWFsb2dzXCIpO1xuaW1wb3J0IHsgU2VydmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vLi4vc2VydmVydXJsXCI7IC8vIGdldCBzZXJ2ZXIgdGVzdFxubGV0IExvY2FsU3RvcmFnZSA9IHJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiICk7XG5cbkBDb21wb25lbnQoe1xuXG4gICAgc2VsZWN0b3I6IFwiaGlzdG9yeVwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY29tcG9uZW50cy9oaXN0b3J5L2hpc3RvcnkuaHRtbFwiLFxuICAgIHByb3ZpZGVyczogW015SHR0cEdldFNlcnZpY2UsU2VydmVyQ29tcG9uZW50XVxuXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBIaXN0b3J5Q29tcG9uZW50IHtcblxuICAgIHB1YmxpYyBsb2NhbGlkOiBzdHJpbmc7XG4gICAgcHVibGljIGxvY2Fsb3JkZXJpZDogc3RyaW5nO1xuXG5cdHB1YmxpYyBvcmRlcl9pZDogc3RyaW5nO1xuICAgIHB1YmxpYyBjcmVhdGVkX2F0OiBzdHJpbmc7XG4gICAgcHVibGljIHN0YXR1c19wYXltZW50OiBzdHJpbmc7XG4gICAgcHVibGljIHRvdGFsX3ByaWNlOiBzdHJpbmc7XG4gICAgcHVibGljIHByb2R1Y3Rpbm9yZGVyX25hbWUgPSBbXTtcbiAgICBwdWJsaWMgcHJpY2VfcGVyX3Byb2R1Y3QgPSBbXTtcblxuICAgIHB1YmxpYyBwc3RhdHVzOiBzdHJpbmc7XG4gICAgcHVibGljIG9yZGVybGlzdCA9IFtdXG4gICAgcHVibGljIHRyYWNraW5nbGlzdCA9IFtdXG5cbiAgICAvLyBwdWJsaWMgaXRlbXMgPSBbXTtcblx0XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgbXlTZXJ2aWNlOiBNeUh0dHBHZXRTZXJ2aWNlLCBwcml2YXRlIHNlcnZlcjogU2VydmVyQ29tcG9uZW50KXt9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICB0aGlzLmxvY2FsaWQgPSBMb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1c3RvbWVyX2lkXCIpO1xuICAgICAgICB0aGlzLmxvY2Fsb3JkZXJpZCA9IExvY2FsU3RvcmFnZS5nZXRJdGVtKFwib3JkZXJfaWRcIik7XG5cbiAgICAgICAgdGhpcy5leHRyYWN0RGF0YSgpO1xuICAgIH1cblxuICAgIFJlY2VpdmUoaGlzdG9yeWlkKSB7XG5cbiAgICAgICAgZGlhbG9ncy5jb25maXJtKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlJlY2VpdmUgUHJvZHVjdFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJBcmUgeW91IFJlY2VpdmUgYWxsIFByb2R1Y3Q/XFxuKFRoaXMgb3JkZXIgd2lsbCBDbG9zZSB3aGVuIHlvdSBzYXkgXFxcInllc1xcXCIpXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwieWVzXCIsXG4gICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIm5vXCIsXG4gICAgICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcblxuICAgICAgICAgICAgLy8gcmVzdWx0IGFyZ3VtZW50IGlzIGJvb2xlYW5cblxuICAgICAgICAgICAgaWYocmVzdWx0ID09IHRydWUpe1xuXG4gICAgICAgICAgICAgICAgTG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2NhbG9yZGVyaWRfaGlzdG9yeVwiLCBoaXN0b3J5aWQpOyAvLy8gc2V0XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1ha2VQYXRjaFJlcXVlc3RcIik7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm15U2VydmljZVxuICAgICAgICAgICAgICAgICAgICAucGF0Y2hEYXRhKHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNfcGF5bWVudDogXCI0XCJcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShyZXMgPT4geyBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiUmVjZWl2ZSBPcmRlciBTdWNjZXNzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJtZW51XCJdKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycj0+e1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIlJlY2V2aWVkIEVycm9yXFxuUGxlYXNlIHRyeSBhZ2FpblwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciA6IFwiK0pTT04uc3RyaW5naWZ5KGVycikpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiaGlzdG9yeVwiXSk7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTsgXG5cblxuICAgIH1cblxuICAgIGV4dHJhY3REYXRhKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImV4dHJhY3REYXRhXCIpO1xuICAgICAgICB0aGlzLm15U2VydmljZS5nZXREYXRhKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAocmVzdWx0KSA9PiB0aGlzLm9uR2V0RGF0YVN1Y2Nlc3MocmVzdWx0KSxcbiAgICAgICAgICAgIChlcnJvcikgPT4gdGhpcy5vbkdldERhdGFFcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG5cbiAgICBwcml2YXRlIG9uR2V0RGF0YVN1Y2Nlc3MocmVzKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJUeXBlIDogXCIrdHlwZW9mIHJlcylcblxuICAgICAgICBmb3IobGV0IHBpbyBvZiByZXMpe1xuXG4gICAgICAgICAgICBpZih0aGlzLmxvY2FsaWQgPT0gcGlvLmN1c3RvbWVyKSB7XG4gICAgICAgICAgICAgICB0aGlzLm9yZGVybGlzdC5wdXNoKHBpbylcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJvbkdldERhdGFTdWNjZXNzIChIaXN0b3J5KVwiKTtcblxuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBvbkdldERhdGFFcnJvcihlcnJvcjogUmVzcG9uc2UgfCBhbnkpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGVycm9yLmpzb24oKSB8fCBcIlwiO1xuICAgICAgICBjb25zdCBlcnIgPSBib2R5LmVycm9yIHx8IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uR2V0RGF0YUVycm9yOiBcIiArIGVycik7XG4gICAgfVxuXG4gICAgcHVibGljIG1lbnUoKXtcblxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJtZW51XCJdKTsgICAgICAgICAgLy8gY29tZSBmcm9tIHBhdGggaW4gcm91dGluZyB0c1xuXG4gICAgfVxuXG4gICAgcHVibGljIGhvbWUoKXtcblxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJob21lXCJdKTsgICAgICAgICAgLy8gY29tZSBmcm9tIHBhdGggaW4gcm91dGluZyB0c1xuXG4gICAgfVxuXG5cblxufSJdfQ==