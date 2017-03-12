import { Component, OnInit } from '@angular/core';

import { NavController } 	 from 'ionic-angular';
import { Reddits } 			 from '../../providers/reddits';
import { DetailsPage } 		 from '../details/details';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html',
})
export class RedditsPage implements OnInit{
	items:any;

  constructor(public navCtrl: NavController, private reddits: Reddits) {

  }

  ngOnInit(){
  	this.getPosts(20,0,'recent','id');
  }

  getPosts(limit,offset,sort,type){
  	this.reddits.getPosts(limit,offset,sort,type).subscribe(response=>{
  		console.log(response);
  		this.items = response.items;
  	})
  }

  viewItem(item){
  	this.navCtrl.push(DetailsPage, {
  		items:item})
  		// console.log(items);
  }

}
