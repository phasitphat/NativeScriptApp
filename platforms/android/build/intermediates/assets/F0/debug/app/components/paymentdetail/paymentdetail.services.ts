import { Component, OnInit } from "@angular/core";
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
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
    // private serverUrl = 'http://192.168.42.100:8000/myapp/orders/';
    // public localorderid: number;
    

    constructor(private http: Http, private server: ServerComponent) { }

    // getData() {
    //     let headers = this.createRequestHeader();

    //     this.localorderid = LocalStorage.getItem("order_id");
    //     console.log("Order id in PaymentDetail : " + this.localorderid)
        
    //     return this.http.get(this.serverUrl+this.localorderid+"/", { headers: headers })
    //         .map(res => res.json());
    // }


    // private createRequestHeader() {
    //     let headers = new Headers();
    //     // set headers here e.g.
    //     // headers.append("AuthKey", "my-key");
    //     // headers.append("AuthToken", "my-token");
    //     headers.append("Content-Type", "application/json");
    //     return headers;
    // }
}
