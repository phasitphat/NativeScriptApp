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

    private serverUrl = this.server.getserver()+'myapp/customers/';


    getData() {
        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers })
            .map(res => res.json());
    }

    private createRequestHeader() {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        return headers;
    }
}
