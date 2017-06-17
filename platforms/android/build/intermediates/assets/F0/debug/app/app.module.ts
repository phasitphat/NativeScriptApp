// this import should be first in order to load some required settings (like globals and reflect-metadata)
// >> ngmodule-config
// >> (hide)
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule}      from '@angular/http';
import { Http } from "@angular/http";

import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";   
import { appComponents, appRoutes } from "./app.routing";                 // import app.routin

import { FormsModule }   from '@angular/forms';
import { NativeScriptHttpModule } from "nativescript-angular/http";

import { AppComponent } from "./app.component";
import { registerElement } from "nativescript-angular/element-registry";

// import { AuthGuard } from './_guards/index';
// import { AuthenticationService, UserService } from './_services/index';

// used to create fake backend
// import { fakeBackendProvider } from './_helpers/index';
// import { MockBackend, MockConnection } from '@angular/http/testing';
// import { BaseRequestOptions } from '@angular/http';

registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown);

@NgModule({
    declarations: [AppComponent, ...appComponents],
    imports: [
        BrowserModule,
        HttpModule,

        FormsModule,
        NativeScriptHttpModule,
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
    ],
    providers: [
        // AuthGuard,
        // AuthenticationService,
        // UserService,
        
                         // providers used to create fake backend
        // fakeBackendProvider,
        // MockBackend,
        // BaseRequestOptions
    ],
    bootstrap: [AppComponent],

    
})
// << ngmodule-config
export class AppModule { }
