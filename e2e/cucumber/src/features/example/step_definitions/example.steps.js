import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { browser } from 'protractor';
import { Given, When, Then } from 'cucumber';
import { AngularHomepage } from '../../../pages/example/example.page';

chai.use(chaiAsPromised);
const expect = chai.expect;
const angularHomepage = new AngularHomepage();

Given(/^I go to Angular home page$/, async () => {
	angularHomepage.open();
	await expect(browser.getCurrentUrl()).to.eventually.equal(angularHomepage.url);
});

When(/^I add "([^"]*)" in the input field$/, async (yourName) => {
	angularHomepage.setName(yourName);
	await expect(angularHomepage.getName()).to.eventually.equal(yourName);
});

Then(/^I should see "([^"]*)"$/, async (yourName) => {
	await expect(angularHomepage.getGreeting()).to.eventually.equal(yourName);
});