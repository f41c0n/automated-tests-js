import * as reporter from 'cucumberjs-allure-reporter';

reporter.config(
	{
		targetDir: '../../reports/e2e/cucumber/allure-report'
	}
);

module.exports = reporter;