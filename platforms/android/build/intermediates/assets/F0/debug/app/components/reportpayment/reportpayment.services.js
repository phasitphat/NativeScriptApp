"use strict";
// >> http-post-service
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var http_1 = require("@angular/http");
var serverurl_1 = require("./../serverurl"); // get server test
require("rxjs/add/operator/map");
var LocalStorage = require("nativescript-localstorage");
var MyHttpPostService = (function () {
    function MyHttpPostService(http, server) {
        this.http = http;
        this.server = server;
        this.serverUrl = this.server.getserver() + "myapp/payments/";
        this.serverUrl_order = this.server.getserver() + "myapp/orders/";
    }
    MyHttpPostService.prototype.postData = function (data) {
        // console.log(this.serverUrl);
        console.log(JSON.stringify(data));
        var options = this.createRequestOptions();
        // console.log(JSON.stringify(options));
        return this.http.post(this.serverUrl, data, options)
            .map(function (res) { return res.json(); });
    };
    MyHttpPostService.prototype.patchData = function (data) {
        this.local_orderid_payment = LocalStorage.getItem("local_orderid_payment");
        console.log("this.local_orderid_payment : " + this.local_orderid_payment);
        var options = this.createRequestOptions();
        return this.http.patch(this.serverUrl_order + this.local_orderid_payment + "/", data, options)
            .map(function (res) { return res.json(); });
    };
    MyHttpPostService.prototype.createRequestOptions = function () {
        // console.log("createRequestOptions");
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Cache-Control", "no-cache");
        var options = new http_1.RequestOptions({ headers: headers, withCredentials: true });
        return options;
    };
    return MyHttpPostService;
}());
MyHttpPostService = __decorate([
    core_1.Component({
        providers: [serverurl_1.ServerComponent]
    }),
    core_2.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, serverurl_1.ServerComponent])
], MyHttpPostService);
exports.MyHttpPostService = MyHttpPostService;
// << http-post-service
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0cGF5bWVudC5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9ydHBheW1lbnQuc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVCQUF1QjtBQUN2QixzQ0FBa0Q7QUFDbEQsc0NBQTJDO0FBQzNDLHNDQUF3RTtBQUd4RSw0Q0FBaUQsQ0FBQyxrQkFBa0I7QUFFcEUsaUNBQStCO0FBQy9CLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBRSwyQkFBMkIsQ0FBRSxDQUFDO0FBUzFELElBQWEsaUJBQWlCO0lBTTFCLDJCQUFvQixJQUFVLEVBQVUsTUFBdUI7UUFBM0MsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBRXZELGNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFDLGlCQUFpQixDQUFDO1FBQ3RELG9CQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBQyxlQUFlLENBQUM7SUFIQSxDQUFDO0lBS25FLG9DQUFRLEdBQVIsVUFBUyxJQUFTO1FBQ2QsK0JBQStCO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzFDLHdDQUF3QztRQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO2FBQy9DLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQscUNBQVMsR0FBVCxVQUFVLElBQVM7UUFFZixJQUFJLENBQUMscUJBQXFCLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUE7UUFFekUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFFMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUMsSUFBSSxDQUFDLHFCQUFxQixHQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDO2FBQ3JGLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU8sZ0RBQW9CLEdBQTVCO1FBQ0ksdUNBQXVDO1FBQ3ZDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM1QyxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBQzdFLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQXZDRCxJQXVDQztBQXZDWSxpQkFBaUI7SUFQN0IsZ0JBQVMsQ0FBQztRQUVQLFNBQVMsRUFBRSxDQUFDLDJCQUFlLENBQUM7S0FFL0IsQ0FBQztJQUVELGlCQUFVLEVBQUU7cUNBT2lCLFdBQUksRUFBa0IsMkJBQWU7R0FOdEQsaUJBQWlCLENBdUM3QjtBQXZDWSw4Q0FBaUI7QUF3QzlCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vID4+IGh0dHAtcG9zdC1zZXJ2aWNlXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgYXMgUnhPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvUnhcIjtcclxuXHJcbmltcG9ydCB7IFNlcnZlckNvbXBvbmVudCB9IGZyb20gXCIuLy4uL3NlcnZlcnVybFwiOyAvLyBnZXQgc2VydmVyIHRlc3RcclxuXHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5sZXQgTG9jYWxTdG9yYWdlID0gcmVxdWlyZSggXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIgKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cclxuICAgIHByb3ZpZGVyczogW1NlcnZlckNvbXBvbmVudF1cclxuXHJcbn0pXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNeUh0dHBQb3N0U2VydmljZSB7XHJcblxyXG4gICAgcHVibGljIGxvY2FsX29yZGVyaWRfcGF5bWVudDpzdHJpbmdcclxuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBzZXJ2ZXI6IFNlcnZlckNvbXBvbmVudCkge31cclxuXHJcbiAgICBwcml2YXRlIHNlcnZlclVybCA9IHRoaXMuc2VydmVyLmdldHNlcnZlcigpK1wibXlhcHAvcGF5bWVudHMvXCI7XHJcbiAgICBwcml2YXRlIHNlcnZlclVybF9vcmRlciA9IHRoaXMuc2VydmVyLmdldHNlcnZlcigpK1wibXlhcHAvb3JkZXJzL1wiO1xyXG4gICAgXHJcbiAgICBwb3N0RGF0YShkYXRhOiBhbnkpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVybCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5jcmVhdGVSZXF1ZXN0T3B0aW9ucygpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwsIGRhdGEsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdGNoRGF0YShkYXRhOiBhbnkpIHtcclxuXHJcbiAgICAgICAgdGhpcy5sb2NhbF9vcmRlcmlkX3BheW1lbnQgPSBMb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsX29yZGVyaWRfcGF5bWVudFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMubG9jYWxfb3JkZXJpZF9wYXltZW50IDogXCIgKyB0aGlzLmxvY2FsX29yZGVyaWRfcGF5bWVudClcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RPcHRpb25zKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2godGhpcy5zZXJ2ZXJVcmxfb3JkZXIrdGhpcy5sb2NhbF9vcmRlcmlkX3BheW1lbnQrXCIvXCIsIGRhdGEsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjcmVhdGVSZXF1ZXN0T3B0aW9uc1wiKTtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ2FjaGUtQ29udHJvbFwiLCBcIm5vLWNhY2hlXCIpO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyAsd2l0aENyZWRlbnRpYWxzOiB0cnVlfSk7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcbn1cclxuLy8gPDwgaHR0cC1wb3N0LXNlcnZpY2VcclxuIl19