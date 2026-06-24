import test, { chromium, expect } from "playwright/test";
import { ButtonPage } from "../pageobject/Button.js";
let page1;

test.beforeAll("", async() => {
    let browser = await chromium.launch({headless: true});
    let context1 = await browser.newContext();
    page1 = await context1.newPage();
    await page1.goto("file:///Users/vaibhavsingh/Desktop/teche-apps/automation-practice-master/app/index.html");
    await page1.getByText("Button Interactions").click();
    
})

test.beforeEach("" , async() => {
    
})

test("Validate basic buttons @basic-button @button @smoke", async () => {
     let buttonPage = new ButtonPage(page1);
     buttonPage.clickOnPrimaryButton();
     buttonPage.showAndHideTextValidation("Primary button clicked!");
});

test("Validate Disabled buttons @disabled-button @button @sanity", async () => {
   
     await expect(page1.getByRole('button', {name: 'Disabled Button'})).toBeDisabled({timeout: 2000});
     await page1.locator("#toggleBtn").click(); 
     await expect(page1.getByRole('button', {name: 'Disabled Button'})).toBeHidden({timeout: 2000});
     await expect(page1.getByRole('button', {name: 'Enabled Button'})).toBeEnabled({timeout: 2000});
});

test("Validate double click @double-click-button @button @sanity", async () => {
     await page1.getByRole('button', {name: 'Double Click Me!'}).dblclick();
});

test("Validate right click @right-click-button @button @sanity", async () => {
     await page1.getByRole('button', {name: 'Right Click Me!'}).click({button: "right", clickCount: 10});
    //  await page.waitForTimeout(1000);
    //  await page.locator("#contextMenu").hover();
    //  await page.keyboard.press("ArrowDown");
    //  await page.keyboard.press("Enter");
     await page1.waitForTimeout(5000);
});
