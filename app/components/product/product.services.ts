import { Component, OnInit } from "@angular/core";
import { Injectable } from "@angular/core";
import { Http, Headers, Response,RequestOptions } from "@angular/http";
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


    sequence = LocalStorage.getItem("sequence");
    localid = LocalStorage.getItem("localid");

    constructor(private http: Http, private server: ServerComponent) { }

    private serverUrl_sequence = this.server.getserver()+'myapp/predicts/';
    private serverUrl = this.server.getserver()+'myapp/products/';
    private serverUrl2 = this.server.getserver()+'myapp/productinorders/';
    private serverUrl_Cart = this.server.getserver()+'myapp/carts/';
    private serverUrl_predict = this.server.getserver()+'myapp/predictproducts/';
    
    getData() {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers })
            .map(res => res.json());
    }

    getDataPredict() {
        let headers = this.createPredictRequestHeader();
        return this.http.get(this.serverUrl_sequence, { headers: headers })
            .map(res => res.json());
    }


    private createRequestHeader() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        return headers;
    }

    private createPredictRequestHeader() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Cache-Control", "no-cache");
        headers.append("X-Frame-Options","SAMEORIGIN");
        return headers;
    }

    //////////////////////// post /////////////////////

    postSequenceData(data: any) {
        let options = this.createPredictRequestOptions();
        return this.http.post(this.serverUrl_sequence, data, options)
            .map(res => res.json());
    }

    postData(data: any) {
        let options = this.createRequestOptions();
        return this.http.post(this.serverUrl2, data, options)
            .map(res => res.json());
    }

    postDataCart(data: any) {
        let options = this.createRequestOptions();
        return this.http.post(this.serverUrl_Cart, data, options)
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

    private createPredictRequestOptions() {
        // console.log("createRequestOptions");
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Cache-Control", "no-cache");
        headers.append("X-Frame-Options","SAMEORIGIN");
        let options = new RequestOptions({ headers: headers ,withCredentials: true});
        return options;
    }
}
