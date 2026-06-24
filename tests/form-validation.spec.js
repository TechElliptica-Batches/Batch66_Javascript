import test, { expect } from "playwright/test";


test("Validate Form Information", async ({page}) => {
    await page.goto("file:///Users/vaibhavsingh/Desktop/teche-apps/automation-practice-master/app/index.html");
    await expect.soft(page).toHaveTitle("Automation Practice - Home1");
    await expect(page).toHaveURL("file:///Users/vaibhavsingh/Desktop/teche-apps/automation-practice-master/app/index.html");
    await page.getByText("Form Submission").click();
    await expect(page).toHaveTitle("Form Submission Practice");
    await page.getByPlaceholder("Enter your full name").first().fill("Vinesh");
    await page.getByLabel("Full Name *").last().fill("Preeti");
    await page.getByLabel("Country").selectOption("usa")
    await expect(page.locator("[id=successMessage]")).toBeVisible({timeout:10000});

    // Assertion (validation)
    // Expected and actual
    // 10 + 4
    // Hard Assertion - if a step is failed. then next step will not execute
    // Soft Assertion - if a step is failed then it will continue . 


    // login screen 
    // username, password, login button, 
    // dashboard - validate - Hard assertion 

    // profile screen - view profile
    // First name, -  
    // last name - 
    // age
    // dob 
    // email

})


// fixture 
// .spec.js is required
// 2 testcase should not have same name 
// assertion timeout = 5 sec
// locator timeout = 30 sec