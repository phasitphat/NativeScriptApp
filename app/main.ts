// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";   // import 
import { appComponents, appRoutes } from "./app.routing";                 // import app.routin
 
@NgModule({
    declarations: [AppComponent, ...appComponents],                       //  ... is mean one by one
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,													//what u want from import
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes)
    ],
})
class AppComponentModule {}
 
platformNativeScriptDynamic().bootstrapModule(AppComponentModule);