import { browser, element, by } from 'protractor';

class AngularHomepage {
	constructor() {
		this.url = 'https://angularjs.org/';
		this.nameInput = element(by.css('input[ng-model="yourName"]'));
		this.greeting = element(by.css('h1.ng-binding'));
	}

	open() {
		browser.get(this.url);
	}

	setName(userName) {
		this.nameInput.clear();
		this.nameInput.sendKeys(userName);
	}

	getName() {
		return this.nameInput.getAttribute('value');
	}

	getGreeting() {
		return this.greeting.getText();
	}
}

exports.AngularHomepage = AngularHomepage;