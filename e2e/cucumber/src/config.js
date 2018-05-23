const config = {
	baseURL: '',
	getPageTimeout: 60000,
	framework: 'custom',
	frameworkPath: require.resolve('protractor-cucumber-framework'),
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

	specs: [
		'features/**/*.feature'
	],

	cucumberOpts: {
		require: [
			'features/**/step_definitions/*steps.js',
			'support/reporter.js'
		]
	}
};

exports.config = config;