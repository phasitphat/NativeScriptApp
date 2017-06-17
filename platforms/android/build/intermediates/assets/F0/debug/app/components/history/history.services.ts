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
    public localorderid: number;
    public localorderid_history:string

    constructor(private http: Http, private server: ServerComponent) {  }

    private serverUrl = this.server.getserver()+'myapp/orders/';

    patchData(data: any) {

        this.localorderid_history = LocalStorage.getItem("localorderid_history");
        console.log("this.localorderid_history : " + this.localorderid_history)

        let options = this.createRequestOptions();

        return this.http.patch(this.serverUrl+this.localorderid_history+"/", data, options)
            .map(res => res.json());
    }

    getData() {
        let headers = this.createRequestHeader();

        this.localorderid = LocalStorage.getItem("order_id");
        console.log("Order id in MyOrder : " + this.localorderid)

        return this.http.get(this.serverUrl, { headers: headers })
        // return this.http.get(this.serverUrl+this.localorderid+"/", { headers: headers })
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

    private createRequestOptions() {
        // console.log("createRequestOptions");
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Cache-Control", "no-cache");
        let options = new RequestOptions({ headers: headers ,withCredentials: true});
        return options;
    }

}
