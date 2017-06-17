// >> http-post-service
import { Component, OnInit } from "@angular/core";
import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable as RxObservable } from "rxjs/Rx";

import { ServerComponent } from "./../serverurl"; // get server test

import "rxjs/add/operator/map";
let LocalStorage = require( "nativescript-localstorage" );

@Component({

    providers: [ServerComponent]

})

@Injectable()
export class MyHttpPostService {

    public local_orderid_payment:string



    constructor(private http: Http, private server: ServerComponent) {}

    private serverUrl = this.server.getserver()+"myapp/payments/";
    private serverUrl_order = this.server.getserver()+"myapp/orders/";
    
    postData(data: any) {
        // console.log(this.serverUrl);
        console.log(JSON.stringify(data));
        let options = this.createRequestOptions();
        // console.log(JSON.stringify(options));
        return this.http.post(this.serverUrl, data, options)
            .map(res => res.json());
    }

    patchData(data: any) {

        this.local_orderid_payment = LocalStorage.getItem("local_orderid_payment");
        console.log("this.local_orderid_payment : " + this.local_orderid_payment)

        let options = this.createRequestOptions();

        return this.http.patch(this.serverUrl_order+this.local_orderid_payment+"/", data, options)
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
// << http-post-service
