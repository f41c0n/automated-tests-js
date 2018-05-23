import { browser } from 'protractor';

const config = {
	baseURL: '',
	getPageTimeout: 60000,
	framework: 'custom',
	frameworkPath: require.resolve('protractor-cucumber-framework'),
	seleniumAddress: 'http://localhost:4444/wd/hub',

	multiCapabilities: [{
		browserName: 'firefox',
		platform: 'WINDOWS',
		maxInstances: 1
	}, {
		browserName: 'chrome',
		platform: 'WINDOWS',
		maxInstances: 1
	}, {
		browserName: 'internet explorer',
		platform: 'WINDOWS',
		ignoreProtectedModeSettings: true,
		maxInstances: 1
	}, {
		browserName: 'firefox',
		platform: 'LINUX',
		maxInstances: 1
	}, {
		browserName: 'chrome',
		platform: 'LINUX',
		maxInstances: 1
	}],

	specs: [
		'features/**/*.feature'
	],

	cucumberOpts: {
		require: 'features/**/step_definitions/*steps.js'
	},

	onPrepare: () => {
		const width = 1920;
		const height = 1080;
		browser.driver.manage().window().setSize(width, height);
	}
};

exports.config = config;