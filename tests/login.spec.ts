import test, { expect } from "../fixtures/basePages"
import { LoginPage } from "../pages/login.page";
import ENV from "../utils/env";

test.describe('Login Page Suite', () => {

  test.beforeEach(async ({ loginPage }) => {
    //navigate to the page
    await loginPage.navigate();
  })

  test('Login with standard user', async ({ loginPage, inventoryPage }) => {
    //login with standard user
    await loginPage.login(ENV.STANDARD_USERNAME!, ENV.STANDARD_PASSWORD!)
    await inventoryPage.isAtInventoryPage();
  });

  test('Login with Locked out user', async ({ loginPage }) => {
    //login with locked user
    await loginPage.login('locked_out_user', ENV.STANDARD_PASSWORD!)
    //verify error
    await expect(loginPage.lockedUserError).toHaveText("Epic sadface: Sorry, this user has been locked out.");
  });
  
  test('Login with empty username and password', async ({ loginPage }) => {
    //login with empty credentials
    await loginPage.login('', '')
    //verify error
    await expect(loginPage.lockedUserError).toHaveText("Epic sadface: Username is required");
  });
})




