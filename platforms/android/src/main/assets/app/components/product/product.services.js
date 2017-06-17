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
        this.sequence = LocalStorage.getItem("sequence");
        this.localid = LocalStorage.getItem("localid");
        this.serverUrl_sequence = this.server.getserver() + 'myapp/predicts/';
        this.serverUrl = this.server.getserver() + 'myapp/products/';
        this.serverUrl2 = this.server.getserver() + 'myapp/productinorders/';
        this.serverUrl_Cart = this.server.getserver() + 'myapp/carts/';
        this.serverUrl_predict = this.server.getserver() + 'myapp/predictproducts/';
    }
    MyHttpGetService.prototype.getData = function () {
        var headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MyHttpGetService.prototype.getDataPredict = function () {
        var headers = this.createPredictRequestHeader();
        return this.http.get(this.serverUrl_sequence, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MyHttpGetService.prototype.createRequestHeader = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return headers;
    };
    MyHttpGetService.prototype.createPredictRequestHeader = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Cache-Control", "no-cache");
        headers.append("X-Frame-Options", "SAMEORIGIN");
        return headers;
    };
    //////////////////////// post /////////////////////
    MyHttpGetService.prototype.postSequenceData = function (data) {
        var options = this.createPredictRequestOptions();
        return this.http.post(this.serverUrl_sequence, data, options)
            .map(function (res) { return res.json(); });
    };
    MyHttpGetService.prototype.postData = function (data) {
        var options = this.createRequestOptions();
        return this.http.post(this.serverUrl2, data, options)
            .map(function (res) { return res.json(); });
    };
    MyHttpGetService.prototype.postDataCart = function (data) {
        var options = this.createRequestOptions();
        return this.http.post(this.serverUrl_Cart, data, options)
            .map(function (res) { return res.json(); });
    };
    MyHttpGetService.prototype.createRequestOptions = function () {
        // console.log("createRequestOptions");
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Cache-Control", "no-cache");
        var options = new http_1.RequestOptions({ headers: headers, withCredentials: true });
        return options;
    };
    MyHttpGetService.prototype.createPredictRequestOptions = function () {
        // console.log("createRequestOptions");
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Cache-Control", "no-cache");
        headers.append("X-Frame-Options", "SAMEORIGIN");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb2R1Y3Quc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUNsRCxzQ0FBMkM7QUFDM0Msc0NBQXVFO0FBR3ZFLDRDQUFpRCxDQUFDLGtCQUFrQjtBQUVwRSxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUUsMkJBQTJCLENBQUUsQ0FBQztBQUUxRCxpQ0FBK0I7QUFDL0IsZ0NBQThCO0FBUzlCLElBQWEsZ0JBQWdCO0lBTXpCLDBCQUFvQixJQUFVLEVBQVUsTUFBdUI7UUFBM0MsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBSC9ELGFBQVEsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLFlBQU8sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBSWxDLHVCQUFrQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUMsaUJBQWlCLENBQUM7UUFDL0QsY0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUMsaUJBQWlCLENBQUM7UUFDdEQsZUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUMsd0JBQXdCLENBQUM7UUFDOUQsbUJBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFDLGNBQWMsQ0FBQztRQUN4RCxzQkFBaUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxHQUFDLHdCQUF3QixDQUFDO0lBTlYsQ0FBQztJQVFwRSxrQ0FBTyxHQUFQO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FB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QztRQUM3RSxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFTyxzREFBMkIsR0FBbkM7UUFDSSx1Q0FBdUM7UUFDdkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLE9BQU8sQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUM3RSxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUEvRUQsSUErRUM7QUEvRVksZ0JBQWdCO0lBUDVCLGdCQUFTLENBQUM7UUFFUCxTQUFTLEVBQUUsQ0FBQywyQkFBZSxDQUFDO0tBRS9CLENBQUM7SUFFRCxpQkFBVSxFQUFFO3FDQU9pQixXQUFJLEVBQWtCLDJCQUFlO0dBTnRELGdCQUFnQixDQStFNUI7QUEvRVksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UsUmVxdWVzdE9wdGlvbnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIFJ4T2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5pbXBvcnQgeyBTZXJ2ZXJDb21wb25lbnQgfSBmcm9tIFwiLi8uLi9zZXJ2ZXJ1cmxcIjsgLy8gZ2V0IHNlcnZlciB0ZXN0XHJcblxyXG5sZXQgTG9jYWxTdG9yYWdlID0gcmVxdWlyZSggXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIgKTtcclxuXHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblxyXG4gICAgcHJvdmlkZXJzOiBbU2VydmVyQ29tcG9uZW50XVxyXG5cclxufSlcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE15SHR0cEdldFNlcnZpY2Uge1xyXG5cclxuXHJcbiAgICBzZXF1ZW5jZSA9IExvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2VxdWVuY2VcIik7XHJcbiAgICBsb2NhbGlkID0gTG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2NhbGlkXCIpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBzZXJ2ZXI6IFNlcnZlckNvbXBvbmVudCkgeyB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmxfc2VxdWVuY2UgPSB0aGlzLnNlcnZlci5nZXRzZXJ2ZXIoKSsnbXlhcHAvcHJlZGljdHMvJztcclxuICAgIHByaXZhdGUgc2VydmVyVXJsID0gdGhpcy5zZXJ2ZXIuZ2V0c2VydmVyKCkrJ215YXBwL3Byb2R1Y3RzLyc7XHJcbiAgICBwcml2YXRlIHNlcnZlclVybDIgPSB0aGlzLnNlcnZlci5nZXRzZXJ2ZXIoKSsnbXlhcHAvcHJvZHVjdGlub3JkZXJzLyc7XHJcbiAgICBwcml2YXRlIHNlcnZlclVybF9DYXJ0ID0gdGhpcy5zZXJ2ZXIuZ2V0c2VydmVyKCkrJ215YXBwL2NhcnRzLyc7XHJcbiAgICBwcml2YXRlIHNlcnZlclVybF9wcmVkaWN0ID0gdGhpcy5zZXJ2ZXIuZ2V0c2VydmVyKCkrJ215YXBwL3ByZWRpY3Rwcm9kdWN0cy8nO1xyXG4gICAgXHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5jcmVhdGVSZXF1ZXN0SGVhZGVyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5zZXJ2ZXJVcmwsIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhUHJlZGljdCgpIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlUHJlZGljdFJlcXVlc3RIZWFkZXIoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnNlcnZlclVybF9zZXF1ZW5jZSwgeyBoZWFkZXJzOiBoZWFkZXJzIH0pXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RIZWFkZXIoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICByZXR1cm4gaGVhZGVycztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVByZWRpY3RSZXF1ZXN0SGVhZGVyKCkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDYWNoZS1Db250cm9sXCIsIFwibm8tY2FjaGVcIik7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJYLUZyYW1lLU9wdGlvbnNcIixcIlNBTUVPUklHSU5cIik7XHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIHBvc3QgLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgcG9zdFNlcXVlbmNlRGF0YShkYXRhOiBhbnkpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMuY3JlYXRlUHJlZGljdFJlcXVlc3RPcHRpb25zKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsX3NlcXVlbmNlLCBkYXRhLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0RGF0YShkYXRhOiBhbnkpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMuY3JlYXRlUmVxdWVzdE9wdGlvbnMoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5zZXJ2ZXJVcmwyLCBkYXRhLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0RGF0YUNhcnQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RPcHRpb25zKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsX0NhcnQsIGRhdGEsIG9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUmVxdWVzdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjcmVhdGVSZXF1ZXN0T3B0aW9uc1wiKTtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ2FjaGUtQ29udHJvbFwiLCBcIm5vLWNhY2hlXCIpO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyAsd2l0aENyZWRlbnRpYWxzOiB0cnVlfSk7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVQcmVkaWN0UmVxdWVzdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjcmVhdGVSZXF1ZXN0T3B0aW9uc1wiKTtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ2FjaGUtQ29udHJvbFwiLCBcIm5vLWNhY2hlXCIpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiWC1GcmFtZS1PcHRpb25zXCIsXCJTQU1FT1JJR0lOXCIpO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyAsd2l0aENyZWRlbnRpYWxzOiB0cnVlfSk7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcbn1cclxuIl19