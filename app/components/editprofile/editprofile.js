"use strict";
var core_1 = require("@angular/core");
var editprofile_services_1 = require("./editprofile.services");
var router_1 = require("@angular/router");
var serverurl_1 = require("./../serverurl"); // get server test
var LocalStorage = require("nativescript-localstorage");
var EditprofileComponent = (function () {
    function EditprofileComponent(router, myService, server) {
        this.router = router;
        this.myService = myService;
        this.server = server;
        ///////////////////// PATCH  ////////////////////////
        this.getfname = null;
        this.getlname = null;
        this.getphone = null;
        this.getemail = null;
        this.gettypephone = null;
        this.getjob = null;
        this.getaddress = null;
        this.getpostcode = null;
        this.localid = LocalStorage.getItem("customer_id"); /// get
    }
    EditprofileComponent.prototype.ngOnInit = function () {
        this.extractData();
        // this.extractResponseInfo();
    };
    EditprofileComponent.prototype.extractData = function () {
        var _this = this;
        console.log("extractData");
        this.myService.getData()
            .subscribe(function (result) { return _this.onGetDataSuccess(result); }, function (error) { return _this.onGetDataError(error); });
    };
    EditprofileComponent.prototype.onGetDataSuccess = function (res) {
        console.log("onGetDataSuccess");
        this.id = res.id;
        // this.username = res.user;
        // this.password = res.password;
        this.first_name = res.first_name;
        this.last_name = res.last_name;
        this.email = res.email;
        this.phone = res.tel;
        this.typephone = res.typeofphone;
        this.jobs = res.jobs;
        this.address = res.address;
        this.postcode = res.postcode;
    };
    EditprofileComponent.prototype.onGetDataError = function (error) {
        var body = error.json() || "";
        var err = body.error || JSON.stringify(body);
        console.log("onGetDataError: " + err);
    };
    EditprofileComponent.prototype.makePostRequest = function () {
        console.log("makePostRequest");
        this.myService
            .postData({
            first_name: this.getfname,
            last_name: this.getlname,
            phone: this.getphone,
            email: this.getemail,
            typeofphone: this.gettypephone,
            jobs: this.getjob,
            address: this.getaddress,
            postcode: this.getpostcode,
        })
            .subscribe(function (res) {
            alert("Edit Profile Success");
            // this.isItemVisible = true;
        }, function (err) {
            alert("Edit Profile Error\nPlease try again");
            console.log("Error : " + JSON.stringify(err));
        });
    };
    EditprofileComponent.prototype.menu = function () {
        this.router.navigate(["menu"]);
    };
    EditprofileComponent.prototype.edit = function () {
        if (this.getfname == null) {
            alert("Please Fill First Name");
            this.router.navigate(["editprofile"]);
        }
        else if (this.getlname == null) {
            alert("Please Fill Last Name");
            this.router.navigate(["editprofile"]);
        }
        else if (this.getphone == null) {
            alert("Please Fill Phone Number");
            this.router.navigate(["editprofile"]);
        }
        else if (this.getemail == null) {
            alert("Please Fill E-mail Address");
            this.router.navigate(["editprofile"]);
        }
        else if (this.gettypephone == null) {
            alert("Please Fill Type of Phone (IOS/ANDROID)");
            this.router.navigate(["editprofile"]);
        }
        else if (this.getjob == null) {
            alert("Please Fill Jobs");
            this.router.navigate(["editprofile"]);
        }
        else if (this.getaddress == null) {
            alert("Please Fill Address");
            this.router.navigate(["editprofile"]);
        }
        else if (this.getpostcode == null) {
            alert("Please Fill Postcode");
            this.router.navigate(["editprofile"]);
        }
        else {
            this.makePostRequest();
            this.router.navigate(["menu"]);
        }
    };
    return EditprofileComponent;
}());
EditprofileComponent = __decorate([
    core_1.Component({
        selector: "editprofile",
        templateUrl: "./components/editprofile/editprofile.html",
        providers: [editprofile_services_1.MyHttpGetService, serverurl_1.ServerComponent]
    }),
    __metadata("design:paramtypes", [router_1.Router, editprofile_services_1.MyHttpGetService, serverurl_1.ServerComponent])
], EditprofileComponent);
exports.EditprofileComponent = EditprofileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdHByb2ZpbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlZGl0cHJvZmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXdDO0FBQ3hDLCtEQUEwRDtBQUMxRCwwQ0FBdUM7QUFDdkMsNENBQWlELENBQUMsa0JBQWtCO0FBQ3BFLElBQUksWUFBWSxHQUFHLE9BQU8sQ0FBRSwyQkFBMkIsQ0FBRSxDQUFDO0FBUzFELElBQWEsb0JBQW9CO0lBYzdCLDhCQUEyQixNQUFjLEVBQVUsU0FBMkIsRUFBVSxNQUF1QjtRQUFwRixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQXlDbkgscURBQXFEO1FBRTFDLGFBQVEsR0FBVyxJQUFJLENBQUM7UUFDeEIsYUFBUSxHQUFXLElBQUksQ0FBQztRQUN4QixhQUFRLEdBQVcsSUFBSSxDQUFDO1FBQ3hCLGFBQVEsR0FBVyxJQUFJLENBQUM7UUFDeEIsaUJBQVksR0FBVyxJQUFJLENBQUM7UUFDNUIsV0FBTSxHQUFXLElBQUksQ0FBQztRQUN0QixlQUFVLEdBQVcsSUFBSSxDQUFDO1FBQzFCLGdCQUFXLEdBQVcsSUFBSSxDQUFDO1FBaEQ5QixJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPO0lBQy9ELENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLDhCQUE4QjtJQUNsQyxDQUFDO0lBRUQsMENBQVcsR0FBWDtRQUFBLGlCQU9DO1FBTkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTthQUNuQixTQUFTLENBQ1YsVUFBQyxNQUFNLElBQUssT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFD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TUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDMUMsQ0FBQztRQUNELElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7WUFDOUIsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUE7WUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQztJQUVMLENBQUM7SUFFTCwyQkFBQztBQUFELENBQUMsQUF2SUQsSUF1SUM7QUF2SVksb0JBQW9CO0lBUGhDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixXQUFXLEVBQUUsMkNBQTJDO1FBQ3hELFNBQVMsRUFBRSxDQUFDLHVDQUFnQixFQUFDLDJCQUFlLENBQUM7S0FDaEQsQ0FBQztxQ0FpQnFDLGVBQU0sRUFBcUIsdUNBQWdCLEVBQWtCLDJCQUFlO0dBZHRHLG9CQUFvQixDQXVJaEM7QUF2SVksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNeUh0dHBHZXRTZXJ2aWNlIH0gZnJvbSBcIi4vZWRpdHByb2ZpbGUuc2VydmljZXNcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBTZXJ2ZXJDb21wb25lbnQgfSBmcm9tIFwiLi8uLi9zZXJ2ZXJ1cmxcIjsgLy8gZ2V0IHNlcnZlciB0ZXN0XG5sZXQgTG9jYWxTdG9yYWdlID0gcmVxdWlyZSggXCJuYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlXCIgKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiZWRpdHByb2ZpbGVcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NvbXBvbmVudHMvZWRpdHByb2ZpbGUvZWRpdHByb2ZpbGUuaHRtbFwiLFxuICAgIHByb3ZpZGVyczogW015SHR0cEdldFNlcnZpY2UsU2VydmVyQ29tcG9uZW50XVxufSlcblxuXG5leHBvcnQgY2xhc3MgRWRpdHByb2ZpbGVDb21wb25lbnQge1xuXG5cdHB1YmxpYyBsb2NhbGlkOiBudW1iZXI7XG4gICAgXG4gICAgcHVibGljIGlkOiBzdHJpbmc7XG4gICAgcHVibGljIGZpcnN0X25hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgbGFzdF9uYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIHBob25lOiBudW1iZXI7XG4gICAgcHVibGljIGVtYWlsOiBzdHJpbmc7XG4gICAgcHVibGljIGFkZHJlc3M6IHN0cmluZztcbiAgICBwdWJsaWMgam9iczogc3RyaW5nO1xuICAgIHB1YmxpYyB0eXBlcGhvbmU6IHN0cmluZztcbiAgICBwdWJsaWMgcG9zdGNvZGU6IHN0cmluZztcblxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIG15U2VydmljZTogTXlIdHRwR2V0U2VydmljZSwgcHJpdmF0ZSBzZXJ2ZXI6IFNlcnZlckNvbXBvbmVudCl7XG5cbiAgICAgICAgdGhpcy5sb2NhbGlkID0gTG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjdXN0b21lcl9pZFwiKTsgLy8vIGdldFxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmV4dHJhY3REYXRhKCk7XG4gICAgICAgIC8vIHRoaXMuZXh0cmFjdFJlc3BvbnNlSW5mbygpO1xuICAgIH1cbiAgICBcbiAgICBleHRyYWN0RGF0YSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJleHRyYWN0RGF0YVwiKTtcbiAgICAgICAgdGhpcy5teVNlcnZpY2UuZ2V0RGF0YSgpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKHJlc3VsdCkgPT4gdGhpcy5vbkdldERhdGFTdWNjZXNzKHJlc3VsdCksXG4gICAgICAgICAgICAoZXJyb3IpID0+IHRoaXMub25HZXREYXRhRXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgIH1cblxuXG4gICAgcHJpdmF0ZSBvbkdldERhdGFTdWNjZXNzKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9uR2V0RGF0YVN1Y2Nlc3NcIik7XG5cbiAgICAgICAgdGhpcy5pZCA9IHJlcy5pZDtcbiAgICAgICAgLy8gdGhpcy51c2VybmFtZSA9IHJlcy51c2VyO1xuICAgICAgICAvLyB0aGlzLnBhc3N3b3JkID0gcmVzLnBhc3N3b3JkO1xuICAgICAgICB0aGlzLmZpcnN0X25hbWUgPSByZXMuZmlyc3RfbmFtZTtcbiAgICAgICAgdGhpcy5sYXN0X25hbWUgPSByZXMubGFzdF9uYW1lO1xuICAgICAgICB0aGlzLmVtYWlsID0gcmVzLmVtYWlsO1xuICAgICAgICB0aGlzLnBob25lID0gcmVzLnRlbDtcbiAgICAgICAgdGhpcy50eXBlcGhvbmUgPSByZXMudHlwZW9mcGhvbmU7XG4gICAgICAgIHRoaXMuam9icyA9IHJlcy5qb2JzO1xuICAgICAgICB0aGlzLmFkZHJlc3MgPSByZXMuYWRkcmVzcztcbiAgICAgICAgdGhpcy5wb3N0Y29kZSA9IHJlcy5wb3N0Y29kZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uR2V0RGF0YUVycm9yKGVycm9yOiBSZXNwb25zZSB8IGFueSkge1xuICAgICAgICBjb25zdCBib2R5ID0gZXJyb3IuanNvbigpIHx8IFwiXCI7XG4gICAgICAgIGNvbnN0IGVyciA9IGJvZHkuZXJyb3IgfHwgSlNPTi5zdHJpbmdpZnkoYm9keSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib25HZXREYXRhRXJyb3I6IFwiICsgZXJyKTtcbiAgICB9XG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8gUEFUQ0ggIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4gICAgcHVibGljIGdldGZuYW1lOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBnZXRsbmFtZTogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgZ2V0cGhvbmU6IG51bWJlciA9IG51bGw7XG4gICAgcHVibGljIGdldGVtYWlsOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBnZXR0eXBlcGhvbmU6IHN0cmluZyA9IG51bGw7XG4gICAgcHVibGljIGdldGpvYjogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgZ2V0YWRkcmVzczogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgZ2V0cG9zdGNvZGU6IHN0cmluZyA9IG51bGw7XG5cbiAgICBwcml2YXRlIG1ha2VQb3N0UmVxdWVzdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJtYWtlUG9zdFJlcXVlc3RcIik7XG4gICAgICAgIHRoaXMubXlTZXJ2aWNlXG4gICAgICAgICAgICAucG9zdERhdGEoeyBcbiAgICAgICAgICAgICAgICBmaXJzdF9uYW1lOiB0aGlzLmdldGZuYW1lLFxuICAgICAgICAgICAgICAgIGxhc3RfbmFtZTogdGhpcy5nZXRsbmFtZSxcbiAgICAgICAgICAgICAgICBwaG9uZTogdGhpcy5nZXRwaG9uZSxcbiAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5nZXRlbWFpbCxcbiAgICAgICAgICAgICAgICB0eXBlb2ZwaG9uZTogdGhpcy5nZXR0eXBlcGhvbmUsXG4gICAgICAgICAgICAgICAgam9iczogdGhpcy5nZXRqb2IsXG4gICAgICAgICAgICAgICAgYWRkcmVzczogdGhpcy5nZXRhZGRyZXNzLFxuICAgICAgICAgICAgICAgIHBvc3Rjb2RlOiB0aGlzLmdldHBvc3Rjb2RlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChcIkVkaXQgUHJvZmlsZSBTdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuaXNJdGVtVmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnI9PntcbiAgICAgICAgICAgICAgICBhbGVydChcIkVkaXQgUHJvZmlsZSBFcnJvclxcblBsZWFzZSB0cnkgYWdhaW5cIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciA6IFwiK0pTT04uc3RyaW5naWZ5KGVycikpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIG1lbnUoKXtcbiAgICBcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wibWVudVwiXSk7XG5cbiAgICB9XG4gICAgXG4gICAgcHVibGljIGVkaXQoKXtcbiAgICAgICAgaWYodGhpcy5nZXRmbmFtZSA9PSBudWxsKXtcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIEZpbGwgRmlyc3QgTmFtZVwiKVxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiZWRpdHByb2ZpbGVcIl0pOyAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLmdldGxuYW1lID09IG51bGwpe1xuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgRmlsbCBMYXN0IE5hbWVcIilcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImVkaXRwcm9maWxlXCJdKTsgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5nZXRwaG9uZSA9PSBudWxsKXtcbiAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIEZpbGwgUGhvbmUgTnVtYmVyXCIpXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJlZGl0cHJvZmlsZVwiXSk7ICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuZ2V0ZW1haWwgPT0gbnVsbCl7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBGaWxsIEUtbWFpbCBBZGRyZXNzXCIpXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJlZGl0cHJvZmlsZVwiXSk7ICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuZ2V0dHlwZXBob25lID09IG51bGwpe1xuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgRmlsbCBUeXBlIG9mIFBob25lIChJT1MvQU5EUk9JRClcIilcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImVkaXRwcm9maWxlXCJdKTsgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5nZXRqb2IgPT0gbnVsbCl7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBGaWxsIEpvYnNcIilcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImVkaXRwcm9maWxlXCJdKTsgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5nZXRhZGRyZXNzID09IG51bGwpe1xuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgRmlsbCBBZGRyZXNzXCIpXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJlZGl0cHJvZmlsZVwiXSk7ICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMuZ2V0cG9zdGNvZGUgPT0gbnVsbCl7XG4gICAgICAgICAgICBhbGVydChcIlBsZWFzZSBGaWxsIFBvc3Rjb2RlXCIpXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJlZGl0cHJvZmlsZVwiXSk7ICBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLm1ha2VQb3N0UmVxdWVzdCgpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wibWVudVwiXSk7ICAgXG4gICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgfVxuXG59XG5cblxuICAgIFxuICAgICJdfQ==