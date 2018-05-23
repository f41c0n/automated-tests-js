const AllureReporter = require('jasmine-allure-reporter');

const config = {
	baseUrl: 'https://angularjs.org/',
	seleniumServerJar: '../node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.12.0.jar',
	localSeleniumStandaloneOpts: {
		jvmArgs: [
			'-Dwebdriver.chrome.driver=node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_2.38',
			'-Dwebdriver.gecko.driver=node_modules/protractor/node_modules/webdriver-manager/selenium/geckodriver-v0.20.1'
		]
	},
	capabilities: {
		browserName: 'chrome',
		chromeOptions: {
			args: [
				'--start-maximized'
			]
		}
	},
	framework: 'jasmine2',
	specs: ['tests/*.spec.js'],
	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	},

	onPrepare: () => {
		jasmine.getEnv().addReporter(new AllureReporter({
			resultsDir: '../../reports/e2e/jasmine2/allure-results'
		}));
	}
};

exports.config = config;