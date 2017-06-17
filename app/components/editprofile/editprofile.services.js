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
        this.serverUrl = this.server.getserver() + 'myapp/customers/';
    }
    MyHttpGetService.prototype.getData = function () {
        var headers = this.createRequestHeader();
        this.localid = LocalStorage.getItem("customer_id"); /// get
        return this.http.get(this.serverUrl + this.localid + "/", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // getResponseInfo() {
    //     let headers = this.createRequestHeader();
    //     return this.http.get(this.serverUrl, { headers: headers })
    //         .do(res => res);
    // }
    MyHttpGetService.prototype.createRequestHeader = function () {
        var headers = new http_1.Headers();
        // set headers here e.g.
        // headers.append("AuthKey", "my-key");
        // headers.append("AuthToken", "my-token");
        headers.append("Content-Type", "application/json");
        return headers;
    };
    ///////////////////////////////// post //////////////////////////////
    MyHttpGetService.prototype.postData = function (data) {
        // console.log(this.serverUrl);
        // console.log(JSON.stringify(data));
        var options = this.createRequestOptions();
        // console.log(JSON.stringify(options));
        return this.http.patch(this.serverUrl + this.localid + "/", data, options)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdHByb2ZpbGUuc2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlZGl0cHJvZmlsZS5zZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQWtEO0FBQ2xELHNDQUEyQztBQUMzQyxzQ0FBdUU7QUFHdkUsNENBQWlELENBQUMsa0JBQWtCO0FBRXBFLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBRSwyQkFBMkIsQ0FBRSxDQUFDO0FBRTFELGlDQUErQjtBQUMvQixnQ0FBOEI7QUFTOUIsSUFBYSxnQkFBZ0I7SUFJekIsMEJBQW9CLElBQVUsRUFBVSxNQUF1QjtRQUEzQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFFdkQsY0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEdBQUMsa0JBQWtCLENBQUM7SUFGSyxDQUFDO0lBSXJFLGtDQUFPLEdBQVA7UUFFSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPO1FBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxPQUFPLEdBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQ3RFLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsc0JBQXNCO0lBQ3RCLGdEQUFnRDtJQUNoRCxpRUFBaUU7SUFDakUsMkJBQTJCO0lBQzNCLElBQUk7SUFFSSw4Q0FBbUIsR0FBM0I7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLHdCQUF3QjtRQUN4Qix1Q0FBdUM7UUFDdkMsMkNBQTJDO1FBQzNDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBRUwscUVBQXFFO0lBRWpFLG1DQUFRLEdBQVIsVUFBUyxJQUFTO1FBQ2QsK0JBQStCO1FBQy9CLHFDQUFxQztRQUNyQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUMxQyx3Q0FBd0M7UUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLE9BQU8sR0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzthQUNqRSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVPLCtDQUFvQixHQUE1QjtRQUNJLHVDQUF1QztRQUN2QyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDNUMsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUM3RSxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFsREQsSUFrREM7QUFsRFksZ0JBQWdCO0lBUDVCLGdCQUFTLENBQUM7UUFFUCxTQUFTLEVBQUUsQ0FBQywyQkFBZSxDQUFDO0tBRS9CLENBQUM7SUFFRCxpQkFBVSxFQUFFO3FDQUtpQixXQUFJLEVBQWtCLDJCQUFlO0dBSnRELGdCQUFnQixDQWtENUI7QUFsRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgLFJlcXVlc3RPcHRpb25zfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIFJ4T2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5pbXBvcnQgeyBTZXJ2ZXJDb21wb25lbnQgfSBmcm9tIFwiLi8uLi9zZXJ2ZXJ1cmxcIjsgLy8gZ2V0IHNlcnZlciB0ZXN0XHJcblxyXG5sZXQgTG9jYWxTdG9yYWdlID0gcmVxdWlyZSggXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIgKTtcclxuXHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblxyXG4gICAgcHJvdmlkZXJzOiBbU2VydmVyQ29tcG9uZW50XVxyXG5cclxufSlcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE15SHR0cEdldFNlcnZpY2Uge1xyXG4gICBcclxuICAgIHB1YmxpYyBsb2NhbGlkOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHNlcnZlcjogU2VydmVyQ29tcG9uZW50KSB7ICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmwgPSB0aGlzLnNlcnZlci5nZXRzZXJ2ZXIoKSsnbXlhcHAvY3VzdG9tZXJzLyc7XHJcblxyXG4gICAgZ2V0RGF0YSgpIHtcclxuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKTtcclxuICAgICAgICB0aGlzLmxvY2FsaWQgPSBMb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1c3RvbWVyX2lkXCIpOyAvLy8gZ2V0XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5zZXJ2ZXJVcmwrdGhpcy5sb2NhbGlkK1wiL1wiLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0UmVzcG9uc2VJbmZvKCkge1xyXG4gICAgLy8gICAgIGxldCBoZWFkZXJzID0gdGhpcy5jcmVhdGVSZXF1ZXN0SGVhZGVyKCk7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5zZXJ2ZXJVcmwsIHsgaGVhZGVyczogaGVhZGVycyB9KVxyXG4gICAgLy8gICAgICAgICAuZG8ocmVzID0+IHJlcyk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0SGVhZGVyKCkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICAvLyBzZXQgaGVhZGVycyBoZXJlIGUuZy5cclxuICAgICAgICAvLyBoZWFkZXJzLmFwcGVuZChcIkF1dGhLZXlcIiwgXCJteS1rZXlcIik7XHJcbiAgICAgICAgLy8gaGVhZGVycy5hcHBlbmQoXCJBdXRoVG9rZW5cIiwgXCJteS10b2tlblwiKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgICB9XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gcG9zdCAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICBwb3N0RGF0YShkYXRhOiBhbnkpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlcnZlclVybCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gdGhpcy5jcmVhdGVSZXF1ZXN0T3B0aW9ucygpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKHRoaXMuc2VydmVyVXJsK3RoaXMubG9jYWxpZCtcIi9cIiwgZGF0YSwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0T3B0aW9ucygpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNyZWF0ZVJlcXVlc3RPcHRpb25zXCIpO1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDYWNoZS1Db250cm9sXCIsIFwibm8tY2FjaGVcIik7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzICx3aXRoQ3JlZGVudGlhbHM6IHRydWV9KTtcclxuICAgICAgICByZXR1cm4gb3B0aW9ucztcclxuICAgIH1cclxufVxyXG4iXX0=