// this import should be first in order to load some required settings (like globals and reflect-metadata)
// import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
// import { NgModule } from "@angular/core";
// import { AppComponent } from "./app.component";
// import { NativeScriptRouterModule } from "nativescript-angular/router";   // import 
// import { appComponents, appRoutes } from "./app.routing";                 // import app.routin
"use strict";
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule, JsonpModule }      from '@angular/http';
// import { FormsModule }   from '@angular/forms';
// @NgModule({
//     declarations: [AppComponent, ...appComponents],                       //  ... is mean one by one
//     bootstrap: [AppComponent],
//     imports: [
//         BrowserModule,
//         HttpModule,
//         JsonpModule,
//         FormsModule,
//         NativeScriptModule,													//what u want from import
//         NativeScriptRouterModule,
//         NativeScriptRouterModule.forRoot(appRoutes)
//     ],
// })
// class AppComponentModule {}
// platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
var platform_1 = require("nativescript-angular/platform");
var app_module_1 = require("./app.module");
platform_1.platformNativeScriptDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEdBQTBHO0FBQzFHLG1HQUFtRztBQUNuRyw0Q0FBNEM7QUFDNUMsa0RBQWtEO0FBQ2xELHVGQUF1RjtBQUN2RixpR0FBaUc7O0FBRWpHLDZEQUE2RDtBQUM3RCxnRUFBZ0U7QUFDaEUsa0RBQWtEO0FBRWxELGNBQWM7QUFDZCx1R0FBdUc7QUFDdkcsaUNBQWlDO0FBQ2pDLGlCQUFpQjtBQUNqQix5QkFBeUI7QUFDekIsc0JBQXNCO0FBQ3RCLHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsb0VBQW9FO0FBQ3BFLG9DQUFvQztBQUNwQyxzREFBc0Q7QUFDdEQsU0FBUztBQUNULEtBQUs7QUFDTCw4QkFBOEI7QUFFOUIscUVBQXFFO0FBRXJFLDBEQUE0RTtBQUM1RSwyQ0FBeUM7QUFFekMsc0NBQTJCLEVBQUUsQ0FBQyxlQUFlLENBQUMsc0JBQVMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxyXG4vLyBpbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMsIE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybVwiO1xyXG4vLyBpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbi8vIGltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiOyAgIC8vIGltcG9ydCBcclxuLy8gaW1wb3J0IHsgYXBwQ29tcG9uZW50cywgYXBwUm91dGVzIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjsgICAgICAgICAgICAgICAgIC8vIGltcG9ydCBhcHAucm91dGluXHJcblxyXG4vLyBpbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbi8vIGltcG9ydCB7IEh0dHBNb2R1bGUsIEpzb25wTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9odHRwJztcclxuLy8gaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbi8vIEBOZ01vZHVsZSh7XHJcbi8vICAgICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnQsIC4uLmFwcENvbXBvbmVudHNdLCAgICAgICAgICAgICAgICAgICAgICAgLy8gIC4uLiBpcyBtZWFuIG9uZSBieSBvbmVcclxuLy8gICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcbi8vICAgICBpbXBvcnRzOiBbXHJcbi8vICAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuLy8gICAgICAgICBIdHRwTW9kdWxlLFxyXG4vLyAgICAgICAgIEpzb25wTW9kdWxlLFxyXG4vLyAgICAgICAgIEZvcm1zTW9kdWxlLFxyXG4vLyAgICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vd2hhdCB1IHdhbnQgZnJvbSBpbXBvcnRcclxuLy8gICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXHJcbi8vICAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKVxyXG4vLyAgICAgXSxcclxuLy8gfSlcclxuLy8gY2xhc3MgQXBwQ29tcG9uZW50TW9kdWxlIHt9XHJcbiBcclxuLy8gcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcENvbXBvbmVudE1vZHVsZSk7XHJcblxyXG5pbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcGxhdGZvcm1cIjtcclxuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSBcIi4vYXBwLm1vZHVsZVwiO1xyXG5cclxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSk7Il19