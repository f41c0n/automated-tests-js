import { browser } from 'protractor';
import { AngularHomepage } from '../pages/example.page';
import names from '../testData/example.td';

const using = require('jasmine-data-provider');

const angularHomepage = new AngularHomepage();

using(names, (name) => {
	describe('greeting', () => {
		beforeAll(() => {
			angularHomepage.open();
		});

		it('should open Home page', () => {
			expect(browser.getCurrentUrl()).toEqual(angularHomepage.url);
		});

		it('should type name', () => {
			angularHomepage.setName(name);
			expect(angularHomepage.getName()).toEqual(name);
		});

		it('should update greeting', () => {
			expect(angularHomepage.getGreeting()).toEqual(`Hello ${name}!`);
		});
	});
});