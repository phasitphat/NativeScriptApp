"use strict";
// >> http-post-service
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var http_1 = require("@angular/http");
var serverurl_1 = require("./../serverurl"); // get server test
require("rxjs/add/operator/map");
var MyHttpPostService = (function () {
    function MyHttpPostService(http, server) {
        this.http = http;
        this.server = server;
        this.serverUrl = this.server.getserver() + "myapp/customers/";
    }
    MyHttpPostService.prototype.getData = function () {
        var headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MyHttpPostService.prototype.createRequestHeader = function () {
        var headers = new http_1.Headers();
        // set headers here e.g.
        // headers.append("AuthKey", "my-key");
        // headers.append("AuthToken", "my-token");
        headers.append("Content-Type", "application/json");
        return headers;
    };
    ///////////////////////////////////////////
    MyHttpPostService.prototype.postData = function (data) {
        // console.log(this.serverUrl);
        // console.log(JSON.stringify(data));
        var options = this.createRequestOptions();
        // console.log(JSON.stringify(options));
        return this.http.post(this.serverUrl, data, options)
            .map(function (res) { return res.json(); });
    };
    MyHttpPostService.prototype.createRequestOptions = function () {
        // console.log("createRequestOptions");
        var headers = new http_1.Headers();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        headers.append("Cache-Control", "no-cache");
        var options = new http_1.RequestOptions({ headers: headers, withCredentials: true });
        // console.log("OPTIONS : "+ JSON.stringify(options));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2lnbnVwLnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1QkFBdUI7QUFDdkIsc0NBQWtEO0FBQ2xELHNDQUEyQztBQUMzQyxzQ0FBd0U7QUFHeEUsNENBQWlELENBQUMsa0JBQWtCO0FBRXBFLGlDQUErQjtBQVMvQixJQUFhLGlCQUFpQjtJQUcxQiwyQkFBb0IsSUFBVSxFQUFVLE1BQXVCO1FBQTNDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUV2RCxjQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBQyxrQkFBa0IsQ0FBQztJQUZJLENBQUM7SUFJcEUsbUNBQU8sR0FBUDtRQUVJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQ3JELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU8sK0NBQW1CLEdBQTNCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1Qix3QkFBd0I7UUFDeEIsdUNBQXVDO1FBQ3ZDLDJDQUEyQztRQUMzQyxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQUVMLDJDQUEyQztJQUV2QyxvQ0FBUSxHQUFSLFVBQVMsSUFBUztRQUNkLCtCQUErQjtRQUMvQixxQ0FBcUM7UUFDckMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDMUMsd0NBQXdDO1FBRXhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUM7YUFDL0MsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTyxnREFBb0IsR0FBNUI7UUFDSSx1Q0FBdUM7UUFDdkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDNUMsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUM3RSxzREFBc0Q7UUFDdEQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLEFBN0NELElBNkNDO0FBN0NZLGlCQUFpQjtJQVA3QixnQkFBUyxDQUFDO1FBRVAsU0FBUyxFQUFFLENBQUMsMkJBQWUsQ0FBQztLQUUvQixDQUFDO0lBRUQsaUJBQVUsRUFBRTtxQ0FJaUIsV0FBSSxFQUFrQiwyQkFBZTtHQUh0RCxpQkFBaUIsQ0E2QzdCO0FBN0NZLDhDQUFpQjtBQThDOUIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPj4gaHR0cC1wb3N0LXNlcnZpY2VcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSBhcyBSeE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xyXG5cclxuaW1wb3J0IHsgU2VydmVyQ29tcG9uZW50IH0gZnJvbSBcIi4vLi4vc2VydmVydXJsXCI7IC8vIGdldCBzZXJ2ZXIgdGVzdFxyXG5cclxuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHJcbiAgICBwcm92aWRlcnM6IFtTZXJ2ZXJDb21wb25lbnRdXHJcblxyXG59KVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTXlIdHRwUG9zdFNlcnZpY2Uge1xyXG4gICAgXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHNlcnZlcjogU2VydmVyQ29tcG9uZW50KSB7IH1cclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzZXJ2ZXJVcmwgPSB0aGlzLnNlcnZlci5nZXRzZXJ2ZXIoKStcIm15YXBwL2N1c3RvbWVycy9cIjtcclxuXHJcbiAgICBnZXREYXRhKCkge1xyXG5cclxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlUmVxdWVzdEhlYWRlcigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc2VydmVyVXJsLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0SGVhZGVyKCkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICAvLyBzZXQgaGVhZGVycyBoZXJlIGUuZy5cclxuICAgICAgICAvLyBoZWFkZXJzLmFwcGVuZChcIkF1dGhLZXlcIiwgXCJteS1rZXlcIik7XHJcbiAgICAgICAgLy8gaGVhZGVycy5hcHBlbmQoXCJBdXRoVG9rZW5cIiwgXCJteS10b2tlblwiKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgICB9XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG4gICAgcG9zdERhdGEoZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVcmwpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMuY3JlYXRlUmVxdWVzdE9wdGlvbnMoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShvcHRpb25zKSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnNlcnZlclVybCwgZGF0YSwgb3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0T3B0aW9ucygpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNyZWF0ZVJlcXVlc3RPcHRpb25zXCIpO1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkFjY2VwdFwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ2FjaGUtQ29udHJvbFwiLCBcIm5vLWNhY2hlXCIpO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyAsd2l0aENyZWRlbnRpYWxzOiB0cnVlfSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJPUFRJT05TIDogXCIrIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpKTtcclxuICAgICAgICByZXR1cm4gb3B0aW9ucztcclxuICAgIH1cclxufVxyXG4vLyA8PCBodHRwLXBvc3Qtc2VydmljZVxyXG4iXX0=