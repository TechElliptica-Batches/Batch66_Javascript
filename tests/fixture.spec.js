
import test, { chromium, expect } from "playwright/test";


test("fixture1" , async()=>{
    // 2 browser
    // 1 browser - order place
    // 2nd browser = reviewer
    // 
    // cookkies
    // browser service
    let browser = await chromium.launch({headless: false});
    
    // Context - Cookkies less session (incognito alike session)
    let context1 = await browser.newContext();
    let page1 = await context1.newPage();
    await page1.goto("https://www.google.com");

    let page2 = await context1.newPage();
    await page2.goto("https://www.amazon.com");


    let context2 = await browser.newContext();
    let page3 = await context2.newPage();
    await page3.goto("https://www.facebook.com");

    let page4 = await context2.newPage();
    await page4.goto("https://www.techelliptica.com");





})
