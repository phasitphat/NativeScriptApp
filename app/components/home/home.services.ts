import { Component, OnInit } from "@angular/core";
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable as RxObservable } from "rxjs/Rx";

import { ServerComponent } from "./../serverurl"; // get server test

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Component({

    providers: [ServerComponent]

})

@Injectable()
export class MyHttpGetService {


    constructor(private http: Http, private server: ServerComponent) { }
    
    private serverUrl = this.server.getserver()+'myapp/products/';
    private serverUrl_orders = this.server.getserver()+'myapp/orders/';
    private serverUrl_new = this.server.getserver()+'myapp/newproducts/';
    private serverUrl_random = this.server.getserver()+'myapp/randomproducts/';

    getDataRandom() {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers })
            .map(res => res.json());
    }

    getDataOrder() {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl_orders, { headers: headers })
            .map(res => res.json());
    }

    getDataNew() {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl_new, { headers: headers })
            .map(res => res.json());
    }


    private createRequestHeader() {
        let headers = new Headers();
        // set headers here e.g.
        // headers.append("AuthKey", "my-key");
        // headers.append("AuthToken", "my-token");
        headers.append("Content-Type", "application/json");
        return headers;
    }
}
