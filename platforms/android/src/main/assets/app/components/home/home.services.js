"use strict";
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var http_1 = require("@angular/http");
var serverurl_1 = require("./../serverurl"); // get server test
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var MyHttpGetService = (function () {
    function MyHttpGetService(http, server) {
        this.http = http;
        this.server = server;
        this.serverUrl = this.server.getserver() + 'myapp/products/';
        this.serverUrl_orders = this.server.getserver() + 'myapp/orders/';
        this.serverUrl_new = this.server.getserver() + 'myapp/newproducts/';
        this.serverUrl_random = this.server.getserver() + 'myapp/randomproducts/';
    }
    MyHttpGetService.prototype.getDataRandom = function () {
        var headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MyHttpGetService.prototype.getDataOrder = function () {
        var headers = this.createRequestHeader();
        return this.http.get(this.serverUrl_orders, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MyHttpGetService.prototype.getDataNew = function () {
        var headers = this.createRequestHeader();
        return this.http.get(this.serverUrl_new, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MyHttpGetService.prototype.createRequestHeader = function () {
        var headers = new http_1.Headers();
        // set headers here e.g.
        // headers.append("AuthKey", "my-key");
        // headers.append("AuthToken", "my-token");
        headers.append("Content-Type", "application/json");
        return headers;
    };
    return MyHttpGetService;
}());
MyHttpGetService = __decorate([
    core_1.Component({
        providers: [serverurl_1.ServerComponent]
    }),
    core_2.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, serverurl_1.ServerComponent])
], MyHttpGetService);
exports.MyHttpGetService = MyHttpGetService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhvbWUuc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUNsRCxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBR3hELDRDQUFpRCxDQUFDLGtCQUFrQjtBQUVwRSxpQ0FBK0I7QUFDL0IsZ0NBQThCO0FBUzlCLElBQWEsZ0JBQWdCO0lBR3pCLDBCQUFvQixJQUFVLEVBQVUsTUFBdUI7UUFBM0MsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBRXZELGNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFDLGlCQUFpQixDQUFDO1FBQ3RELHFCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUMsZUFBZSxDQUFDO1FBQzNELGtCQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBQyxvQkFBb0IsQ0FBQztRQUM3RCxxQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFDLHVCQUF1QixDQUFDO0lBTFIsQ0FBQztJQU9wRSx3Q0FBYSxHQUFiO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDckQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCx1Q0FBWSxHQUFaO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUM1RCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELHFDQUFVLEdBQVY7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUN6RCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUdPLDhDQUFtQixHQUEzQjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsd0JBQXdCO1FBQ3hCLHVDQUF1QztRQUN2QywyQ0FBMkM7UUFDM0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7QUFyQ1ksZ0JBQWdCO0lBUDVCLGdCQUFTLENBQUM7UUFFUCxTQUFTLEVBQUUsQ0FBQywyQkFBZSxDQUFDO0tBRS9CLENBQUM7SUFFRCxpQkFBVSxFQUFFO3FDQUlpQixXQUFJLEVBQWtCLDJCQUFlO0dBSHRELGdCQUFnQixDQXFDNUI7QUFyQ1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIFJ4T2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5pbXBvcnQgeyBTZXJ2ZXJDb21wb25lbnQgfSBmcm9tIFwiLi8uLi9zZXJ2ZXJ1cmxcIjsgLy8gZ2V0IHNlcnZlciB0ZXN0XHJcblxyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cclxuICAgIHByb3ZpZGVyczogW1NlcnZlckNvbXBvbmVudF1cclxuXHJcbn0pXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNeUh0dHBHZXRTZXJ2aWNlIHtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHNlcnZlcjogU2VydmVyQ29tcG9uZW50KSB7IH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmwgPSB0aGlzLnNlcnZlci5nZXRzZXJ2ZXIoKSsnbXlhcHAvcHJvZHVjdHMvJztcclxuICAgIHByaXZhdGUgc2VydmVyVXJsX29yZGVycyA9IHRoaXMuc2VydmVyLmdldHNlcnZlcigpKydteWFwcC9vcmRlcnMvJztcclxuICAgIHByaXZhdGUgc2VydmVyVXJsX25ldyA9IHRoaXMuc2VydmVyLmdldHNlcnZlcigpKydteWFwcC9uZXdwcm9kdWN0cy8nO1xyXG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmxfcmFuZG9tID0gdGhpcy5zZXJ2ZXIuZ2V0c2VydmVyKCkrJ215YXBwL3JhbmRvbXByb2R1Y3RzLyc7XHJcblxyXG4gICAgZ2V0RGF0YVJhbmRvbSgpIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlUmVxdWVzdEhlYWRlcigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc2VydmVyVXJsLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0YU9yZGVyKCkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5jcmVhdGVSZXF1ZXN0SGVhZGVyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5zZXJ2ZXJVcmxfb3JkZXJzLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0YU5ldygpIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlUmVxdWVzdEhlYWRlcigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc2VydmVyVXJsX25ldywgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RIZWFkZXIoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIC8vIHNldCBoZWFkZXJzIGhlcmUgZS5nLlxyXG4gICAgICAgIC8vIGhlYWRlcnMuYXBwZW5kKFwiQXV0aEtleVwiLCBcIm15LWtleVwiKTtcclxuICAgICAgICAvLyBoZWFkZXJzLmFwcGVuZChcIkF1dGhUb2tlblwiLCBcIm15LXRva2VuXCIpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICByZXR1cm4gaGVhZGVycztcclxuICAgIH1cclxufVxyXG4iXX0=