### Requirements
Installed:
* nodejs
### Installing
Navigate to e2e/jasmine2 directory
```
cd e2e/jasmine2
```
or to e2e/cucumber
```
cd e2e/cucumber
```
Install all modules
```
npm install
```
Update webdriver-manager
```
npm run update
```
### Tests
Run example test
```
npm test
```
### Report
cucumber - report should be generated after test ends
jasmine2 - report should be opened after test ends

Navigate to report
```
cd reports/e2e/jasmine/allure-report and open index.html
```
or
```
cd reports/e2e/cucumber/allure-report and open *-testsuite.xml
```