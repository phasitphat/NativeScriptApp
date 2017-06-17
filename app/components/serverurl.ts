import { Injectable } from "@angular/core";

@Injectable()
export class ServerComponent {


	getserver(){

		let setserver = 'http://67.205.146.181:8000/'
		return setserver;

	}
	
}