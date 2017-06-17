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
        this.serverUrl = this.server.getserver() + "myapp/contactuss/";
    }
    MyHttpPostService.prototype.getData = function () {
        var headers = this.createRequestHeader();
        return this.http.get(this.serverUrl + "1/", { headers: headers })
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
    MyHttpPostService.prototype.postData = function (data) {
        // console.log(this.serverUrl);
        console.log(JSON.stringify(data));
        var options = this.createRequestOptions();
        // console.log(JSON.stringify(options));
        return this.http.post(this.serverUrl, data, options)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdHVzLnNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29udGFjdHVzLnNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1QkFBdUI7QUFDdkIsc0NBQWtEO0FBQ2xELHNDQUEyQztBQUMzQyxzQ0FBd0U7QUFHeEUsNENBQWlELENBQUMsa0JBQWtCO0FBRXBFLGlDQUErQjtBQVMvQixJQUFhLGlCQUFpQjtJQUcxQiwyQkFBb0IsSUFBVSxFQUFVLE1BQXVCO1FBQTNDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUV2RCxjQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsR0FBQyxtQkFBbUIsQ0FBQztJQUZHLENBQUM7SUFJcEUsbUNBQU8sR0FBUDtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUMxRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVPLCtDQUFtQixHQUEzQjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsd0JBQXdCO1FBQ3hCLHVDQUF1QztRQUN2QywyQ0FBMkM7UUFDM0MsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFFRCxvQ0FBUSxHQUFSLFVBQVMsSUFBUztRQUNkLCtCQUErQjtRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUMxQyx3Q0FBd0M7UUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQzthQUMvQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVPLGdEQUFvQixHQUE1QjtRQUNJLHVDQUF1QztRQUN2QyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDNUMsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztRQUM3RSxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQUF2Q0QsSUF1Q0M7QUF2Q1ksaUJBQWlCO0lBUDdCLGdCQUFTLENBQUM7UUFFUCxTQUFTLEVBQUUsQ0FBQywyQkFBZSxDQUFDO0tBRS9CLENBQUM7SUFFRCxpQkFBVSxFQUFFO3FDQUlpQixXQUFJLEVBQWtCLDJCQUFlO0dBSHRELGlCQUFpQixDQXVDN0I7QUF2Q1ksOENBQWlCO0FBd0M5Qix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA+PiBodHRwLXBvc3Qtc2VydmljZVxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSwgUmVxdWVzdE9wdGlvbnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIGFzIFJ4T2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XHJcblxyXG5pbXBvcnQgeyBTZXJ2ZXJDb21wb25lbnQgfSBmcm9tIFwiLi8uLi9zZXJ2ZXJ1cmxcIjsgLy8gZ2V0IHNlcnZlciB0ZXN0XHJcblxyXG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cclxuICAgIHByb3ZpZGVyczogW1NlcnZlckNvbXBvbmVudF1cclxuXHJcbn0pXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNeUh0dHBQb3N0U2VydmljZSB7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgc2VydmVyOiBTZXJ2ZXJDb21wb25lbnQpIHsgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIHNlcnZlclVybCA9IHRoaXMuc2VydmVyLmdldHNlcnZlcigpK1wibXlhcHAvY29udGFjdHVzcy9cIjtcclxuXHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5jcmVhdGVSZXF1ZXN0SGVhZGVyKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5zZXJ2ZXJVcmwrXCIxL1wiLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSlcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0SGVhZGVyKCkge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICAvLyBzZXQgaGVhZGVycyBoZXJlIGUuZy5cclxuICAgICAgICAvLyBoZWFkZXJzLmFwcGVuZChcIkF1dGhLZXlcIiwgXCJteS1rZXlcIik7XHJcbiAgICAgICAgLy8gaGVhZGVycy5hcHBlbmQoXCJBdXRoVG9rZW5cIiwgXCJteS10b2tlblwiKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdERhdGEoZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zZXJ2ZXJVcmwpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHRoaXMuY3JlYXRlUmVxdWVzdE9wdGlvbnMoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShvcHRpb25zKSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuc2VydmVyVXJsLCBkYXRhLCBvcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RPcHRpb25zKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3JlYXRlUmVxdWVzdE9wdGlvbnNcIik7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcclxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkNhY2hlLUNvbnRyb2xcIiwgXCJuby1jYWNoZVwiKTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgLHdpdGhDcmVkZW50aWFsczogdHJ1ZX0pO1xyXG4gICAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgfVxyXG59XHJcbi8vIDw8IGh0dHAtcG9zdC1zZXJ2aWNlXHJcbiJdfQ==