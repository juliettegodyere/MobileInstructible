import { Injectable } from '@angular/core';
import { Http,RequestOptions,Headers } 	  from '@angular/http';
import 				  'rxjs/add/operator/map';

/*
  Generated class for the Reddits provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Reddits {

	// http 	: any;
	baseUrl : String;

  	constructor(public http: Http) {
  		// this.http = http;
		this.baseUrl = 'https://devru-instructables.p.mashape.com/list';
    	console.log('Hello Reddits Provider');
  	}
	// getPosts(category, limit){
	// 	return this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit).map(res => res.json());
	// }

  getPosts (limit,offset,sort,type){
    let headers = new Headers({ 'Content-Type': 'application/json',"X-Mashape-Key": "84kcMtvDqlmshA30wSEOP0jusMVCp1RQSjujsnqMceyQTzfZi0"});
    let options = new RequestOptions({ headers: headers });

    return this.http.get(this.baseUrl+'?limit='+limit+'&offset='+offset+'&sort='+sort+'&type='+type, options)
      .map(res => res.json());
    }
}
