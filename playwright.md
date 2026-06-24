Playwright - automation tool - UI testing, api testing , db testing

// Selenium - slow and used your machine browser to work on, only UI automation tool
// Playwright - playwirght has its own browser, UI + API + Mobile 

1 - install playwright  - library

```bash
npm install playwright 
npm init playwright 
```

what all folder structure created
a - tests - all testcase will be there.
b - playwright.config.js - playwright - all configuration of playwright project will be in this file


2 - record 1 script in playwright 
Record a script - codegen

npx playwright codegen

3 - run that in playwright 
by default your testcase will execute in headless mode

npx playwright test
npx playwright test --headed

4 - use json to run data in our playwright 




