import { Component, OnInit } from "@angular/core";
import { Injectable } from "@angular/core";
import { Http, Headers, Response ,RequestOptions } from "@angular/http";
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
    


    public productinorder_del: number;
    public patch: number;

    constructor(private http: Http, private server: ServerComponent) { }
    
    private serverUrl_Cart = this.server.getserver()+'myapp/carts/'
    private serverUrl = this.server.getserver()+'myapp/productinorders/';
    private serverUrl2 = this.server.getserver()+'myapp/products/';
    private serverUrl3 = this.server.getserver()+'myapp/orders/';

    getDataCart() {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl_Cart, { headers: headers })
            .map(res => res.json());
    }

    getData() {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers })
            .map(res => res.json());
    }

    getData2() {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl2, { headers: headers })
            .map(res => res.json());
    }

    getData3() {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl3, { headers: headers })
            .map(res => res.json());
    }

    private createRequestHeader() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        return headers;
    }


//////////////////////// DELETE ////////////////////////

    deleteData() {
        let options = this.createRequestOptions();
        this.productinorder_del = LocalStorage.getItem("del");
        return this.http.delete(this.serverUrl_Cart+this.productinorder_del+"/", options)
            .map(res => res.json());
    }

///////////////////////////////// POST //////////////////////////////

    postData(data: any) {
        let options = this.createRequestOptions();
        return this.http.post(this.serverUrl3, data, options)
            .map(res => res.json());
    }


/////////////////////////////// PATCH /////////////////////////////

    patchData(data: any) {
        let options = this.createRequestOptions();
        this.patch = LocalStorage.getItem("patch");
        return this.http.patch(this.serverUrl+this.patch+"/", data, options)
            .map(res => res.json());
    }

///////////////////////////////////////////////////////////////////

    private createRequestOptions() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Cache-Control", "no-cache");
        let options = new RequestOptions({ headers: headers ,withCredentials: true});
        return options;
    }

}
