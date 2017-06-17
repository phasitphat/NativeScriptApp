import { Component, OnInit } from "@angular/core";
import { Injectable } from "@angular/core";
import { Http, Headers, Response ,RequestOptions} from "@angular/http";
import { Observable as RxObservable } from "rxjs/Rx";

import { ServerComponent } from "./../serverurl"; // get server test

let LocalStorage = require( "nativescript-localstorage" );

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Component({

    providers: [ServerComponent]

})

@Injectable()
export class MyHttpGetService {
   
    public localid: number;

    constructor(private http: Http, private server: ServerComponent) {  }

    private serverUrl = this.server.getserver()+'myapp/customers/';

    getData() {

        let headers = this.createRequestHeader();
        this.localid = LocalStorage.getItem("customer_id"); /// get
        return this.http.get(this.serverUrl+this.localid+"/", { headers: headers })
            .map(res => res.json());
    }

    // getResponseInfo() {
    //     let headers = this.createRequestHeader();
    //     return this.http.get(this.serverUrl, { headers: headers })
    //         .do(res => res);
    // }

    private createRequestHeader() {
        let headers = new Headers();
        // set headers here e.g.
        // headers.append("AuthKey", "my-key");
        // headers.append("AuthToken", "my-token");
        headers.append("Content-Type", "application/json");
        return headers;
    }

///////////////////////////////// post //////////////////////////////

    postData(data: any) {
        // console.log(this.serverUrl);
        // console.log(JSON.stringify(data));
        let options = this.createRequestOptions();
        // console.log(JSON.stringify(options));
        return this.http.patch(this.serverUrl+this.localid+"/", data, options)
            .map(res => res.json());
    }

    private createRequestOptions() {
        // console.log("createRequestOptions");
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Cache-Control", "no-cache");
        let options = new RequestOptions({ headers: headers ,withCredentials: true});
        return options;
    }
}
