// >> http-post-service
import { Component, OnInit } from "@angular/core";
import { Injectable } from "@angular/core";
import { Http, Headers, Response, RequestOptions } from "@angular/http";
import { Observable as RxObservable } from "rxjs/Rx";

import { ServerComponent } from "./../serverurl"; // get server test

import "rxjs/add/operator/map";

@Component({

    providers: [ServerComponent]

})

@Injectable()
export class MyHttpPostService {
    

    constructor(private http: Http, private server: ServerComponent) { }
    
    private serverUrl = this.server.getserver()+"myapp/customers/";

    getData() {

        let headers = this.createRequestHeader();
        return this.http.get(this.serverUrl, { headers: headers })
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

///////////////////////////////////////////

    postData(data: any) {
        // console.log(this.serverUrl);
        // console.log(JSON.stringify(data));
        let options = this.createRequestOptions();
        // console.log(JSON.stringify(options));

        return this.http.post(this.serverUrl, data, options)
            .map(res => res.json());
    }

    private createRequestOptions() {
        // console.log("createRequestOptions");
        let headers = new Headers();
        headers.append("Accept", "application/json");
        headers.append("Content-Type", "application/json");
        headers.append("Cache-Control", "no-cache");
        let options = new RequestOptions({ headers: headers ,withCredentials: true});
        // console.log("OPTIONS : "+ JSON.stringify(options));
        return options;
    }
}
// << http-post-service
