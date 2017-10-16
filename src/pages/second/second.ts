import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { ShareService } from '../../services/share/share';

@IonicPage()
@Component({
	selector: 'page-second',
	templateUrl: 'second.html',
})

export class SecondPage {

	parameter1: string;
	parameter2: string;
	serviceData: string;

	constructor(public navCtrl: NavController, public navParams: NavParams, shareService: ShareService, public events: Events) {
		// Receiving data via navController
		this.parameter1 = navParams.get('param1'); 
		this.parameter2 = navParams.get('param2');
		
		// Receiving data via Service
		this.serviceData = shareService.getUserName();

		// Sending data to the Home page via Emiter
		let dummy = {
			firstName: "Jack",
			lastName: "Bauer"
		}

		events.publish("shareObject", dummy, 2);			
	}
}
