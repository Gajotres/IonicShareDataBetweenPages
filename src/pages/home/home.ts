import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { SecondPage } from '../second/second';
import { ShareService } from '../../services/share/share';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {

	constructor(public navCtrl: NavController, shareService: ShareService, public events: Events) {
        // Sharing data using service
		shareService.setUserName('Jimmy','Janson');

		// Sharing data with Emiter. 
		// It works only if reciving page has aleady been loaded. 
		// So in this case I'm sending it from the Second Page to the Home Page (backwards)
		events.subscribe('shareObject', (dummy, dummyNumber) => {
			console.log('Welcome', dummy.firstName, 'at', dummyNumber);
		});			
	}

	changePage(event) {
		// Sharing data using NavController
		this.navCtrl.push(SecondPage, {
			param1: 'John', param2: 'Johnson'
		});
	}   
}
