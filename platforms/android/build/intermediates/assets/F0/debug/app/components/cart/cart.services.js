"use strict";
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var http_1 = require("@angular/http");
var serverurl_1 = require("./../serverurl"); // get server test
var LocalStorage = require("nativescript-localstorage");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
var MyHttpGetService = (function () {
    function MyHttpGetService(http, server) {
        this.http = http;
        this.server = server;
        this.serverUrl_Cart = this.server.getserver() + 'myapp/carts/';
        this.serverUrl = this.server.getserver() + 'myapp/productinorders/';
        this.serverUrl2 = this.server.getserver() + 'myapp/products/';
        this.serverUrl3 = this.server.getserver() + 'myapp/orders/';
    }
    MyHttpGetService.prototype.getDataCart = function () {
        var headers = this.createRequestHeader();
        return this.http.get(this.serverUrl_Cart, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MyHttpGetService.prototype.getData = function () {
        var headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MyHttpGetService.prototype.getData2 = function () {
        var headers = this.createRequestHeader();
        return this.http.get(this.serverUrl2, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MyHttpGetService.prototype.getData3 = function () {
        var headers = this.createRequestHeader();
        return this.http.get(this.serverUrl3, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MyHttpGetService.prototype.createRequestHeader = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return headers;
    };
    //////////////////////// DELETE ////////////////////////
    MyHttpGetService.prototype.deleteData = function () {
        var options = this.createRequestOptions();
        this.productinorder_del = LocalStorage.getItem("del");
        return this.http.delete(this.serverUrl_Cart + this.productinorder_del + "/", options)
            .map(function (res) { return res.json(); });
    };
    ///////////////////////////////// POST //////////////////////////////
    MyHttpGetService.prototype.postData = function (data) {
        var options = this.createRequestOptions();
        return this.http.post(this.serverUrl3, data, options)
            .map(function (res) { return res.json(); });
    };
    /////////////////////////////// PATCH /////////////////////////////
    MyHttpGetService.prototype.patchData = function (data) {
        var options = this.createRequestOptions();
        this.patch = LocalStorage.getItem("patch");
        return this.http.patch(this.serverUrl + this.patch + "/", data, options)
            .map(function (res) { return res.json(); });
    };
    ///////////////////////////////////////////////////////////////////
    MyHttpGetService.prototype.createRequestOptions = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Cache-Control", "no-cache");
        var options = new http_1.RequestOptions({ headers: headers, withCredentials: true });
        return options;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcnQuc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUNsRCxzQ0FBMkM7QUFDM0Msc0NBQXdFO0FBR3hFLDRDQUFpRCxDQUFDLGtCQUFrQjtBQUVwRSxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUUsMkJBQTJCLENBQUUsQ0FBQztBQUUxRCxpQ0FBK0I7QUFDL0IsZ0NBQThCO0FBUzlCLElBQWEsZ0JBQWdCO0lBT3pCLDBCQUFvQixJQUFVLEVBQVUsTUFBdUI7UUFBM0MsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBRXZELG1CQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBQyxjQUFjLENBQUE7UUFDdkQsY0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUMsd0JBQXdCLENBQUM7UUFDN0QsZUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUMsaUJBQWlCLENBQUM7UUFDdkQsZUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUMsZUFBZSxDQUFDO0lBTE0sQ0FBQztJQU9wRSxzQ0FBVyxHQUFYO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDMUQsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxrQ0FBTyxHQUFQO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1C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Q0FBb0IsR0FBNUI7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDNUMsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUM3RSxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFTCx1QkFBQztBQUFELENBQUMsQUFsRkQsSUFrRkM7QUFsRlksZ0JBQWdCO0lBUDVCLGdCQUFTLENBQUM7UUFFUCxTQUFTLEVBQUUsQ0FBQywyQkFBZSxDQUFDO0tBRS9CLENBQUM7SUFFRCxpQkFBVSxFQUFFO3FDQVFpQixXQUFJLEVBQWtCLDJCQUFlO0dBUHRELGdCQUFnQixDQWtGNUI7QUFsRlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgLFJlcXVlc3RPcHRpb25zIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSBhcyBSeE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5cclxuaW1wb3J0IHsgU2VydmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vLi4vc2VydmVydXJsXCI7IC8vIGdldCBzZXJ2ZXIgdGVzdFxyXG5cclxubGV0IExvY2FsU3RvcmFnZSA9IHJlcXVpcmUoIFwibmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZVwiICk7XHJcblxyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cclxuICAgIHByb3ZpZGVyczogW1NlcnZlckNvbXBvbmVudF1cclxuXHJcbn0pXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNeUh0dHBHZXRTZXJ2aWNlIHtcclxuICAgIFxyXG5cclxuXHJcbiAgICBwdWJsaWMgcHJvZHVjdGlub3JkZXJfZGVsOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgcGF0Y2g6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgc2VydmVyOiBTZXJ2ZXJDb21wb25lbnQpIHsgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHNlcnZlclVybF9DYXJ0ID0gdGhpcy5zZXJ2ZXIuZ2V0c2VydmVyKCkrJ215YXBwL2NhcnRzLydcclxuICAgIHByaXZhdGUgc2VydmVyVXJsID0gdGhpcy5zZXJ2ZXIuZ2V0c2VydmVyKCkrJ215YXBwL3Byb2R1Y3Rpbm9yZGVycy8nO1xyXG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmwyID0gdGhpcy5zZXJ2ZXIuZ2V0c2VydmVyKCkrJ215YXBwL3Byb2R1Y3RzLyc7XHJcbiAgICBwcml2YXRlIHNlcnZlclVybDMgPSB0aGlzLnNlcnZlci5nZXRzZXJ2ZXIoKSsnbXlhcHAvb3JkZXJzLyc7XHJcblxyXG4gICAgZ2V0RGF0YUNhcnQoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnNlcnZlclVybF9DYXJ0LCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlUmVxdWVzdEhlYWRlcigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc2VydmVyVXJsLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0YTIoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnNlcnZlclVybDIsIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhMygpIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlUmVxdWVzdEhlYWRlcigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc2VydmVyVXJsMywgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdEhlYWRlcigpIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIHJldHVybiBoZWFkZXJzO1xyXG4gICAgfVxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBERUxFVEUgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgZGVsZXRlRGF0YSgpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMuY3JlYXRlUmVxdWVzdE9wdGlvbnMoKTtcclxuICAgICAgICB0aGlzLnByb2R1Y3Rpbm9yZGVyX2RlbCA9IExvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZGVsXCIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuc2VydmVyVXJsX0NhcnQrdGhpcy5wcm9kdWN0aW5vcmRlcl9kZWwrXCIvXCIsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFBPU1QgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgcG9zdERhdGEoZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RPcHRpb25zKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsMywgZGF0YSwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBQQVRDSCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIHBhdGNoRGF0YShkYXRhOiBhbnkpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMuY3JlYXRlUmVxdWVzdE9wdGlvbnMoKTtcclxuICAgICAgICB0aGlzLnBhdGNoID0gTG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwYXRjaFwiKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKHRoaXMuc2VydmVyVXJsK3RoaXMucGF0Y2grXCIvXCIsIGRhdGEsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNhY2hlLUNvbnRyb2xcIiwgXCJuby1jYWNoZVwiKTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgLHdpdGhDcmVkZW50aWFsczogdHJ1ZX0pO1xyXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=