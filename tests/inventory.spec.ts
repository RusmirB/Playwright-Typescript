import test, { expect } from "../fixtures/basePages"
import { LoginPage } from "../pages/login.page";
import ENV from "../utils/env";

test.describe('Inventory Page Suite', () => {

  test.beforeEach(async ({ loginPage }) => {
    //navigate to the page
    await loginPage.navigate();
  })

  test('Add and Remove Product from the Cart ', async ({ loginPage, inventoryPage, shoppingCartPage }) => {
    //define product name and expected quantity
    const productName = "Sauce Labs Backpack";
    //login with standard user
    await loginPage.login(ENV.STANDARD_USERNAME!, ENV.STANDARD_PASSWORD!)
    await inventoryPage.isAtInventoryPage();
    //add product to the cart - by product name
    await inventoryPage.addItemToTheCart(productName);
    //open shopping cart
    await inventoryPage.openShoppingCart();
    await shoppingCartPage.isAtShoppingCartPage();
    //verify that item is present in shopping cart and confirm quantity
    await expect(shoppingCartPage.page.locator('.inventory_item_name')).toHaveText(productName);
    await expect(shoppingCartPage.cartQuantity).toHaveText("1");
    //remove product from the cart
    await inventoryPage.removeItemFromTheCart(productName);
    //verify that product is actually removed
    await expect(shoppingCartPage.cartQuantity).not.toBeVisible();
  });

})




