import { test as baseTest } from '@playwright/test';
import { LoginPage } from "../pages/login.page";
import { InventoryPage } from '../pages/inventory.page';
import { ShoppingCartPage } from '../pages/shopping-cart.page';

/* Declare the types of your fixtures */
type MyFixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    shoppingCartPage: ShoppingCartPage
};

const test = baseTest.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page))
    },
    shoppingCartPage: async ({ page }, use) => {
        await use(new ShoppingCartPage(page))
    },
})

export default test
export { expect } from '@playwright/test'
