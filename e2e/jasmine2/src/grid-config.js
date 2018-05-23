import { browser } from 'protractor';
import { SpecReporter } from 'jasmine-spec-reporter';

const config = {
	baseUrl: 'https://angularjs.org/',
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

	framework: 'jasmine2',

	specs: ['tests/*.spec.js'],

	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	},

	onPrepare: () => {
		const width = 1920;
		const height = 1080;
		browser.driver.manage().window().setSize(width, height);

		jasmine.getEnv().addReporter(new SpecReporter({
			spec: {
				displayStacktrace: true
			}
		}));
	}
};

exports.config = config;