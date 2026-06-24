import { test, expect } from '@playwright/test';
import  vaibhav  from '../data/users.json' with {type : "json"}
// node version < 20 = assert
// node ver 20 or more then 20  = with

for(let user of vaibhav){
  test(`test ${user.scenario}`, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/'); // 
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill(user.username);
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill(user.password);
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator('[data-test="error"]'))
    .toContainText(user.errorMsg)
  });
}

// why we use await in every step in playwirght 
// can we use await without async  - NOOOOOOOOOOOOOOOOOOO

// 10 username and password

// firstname
// lastname - optional
// email
// phoennumber - optional
// username
// password
// confirm password

