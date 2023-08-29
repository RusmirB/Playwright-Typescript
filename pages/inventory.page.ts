import { expect, type Locator, type Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly appLogo: Locator;
    readonly productsTitle: Locator;
    readonly shoppingCart: Locator;
    readonly sauceLabsBackpack: Locator

    constructor(page: Page) {
        this.page = page;
        this.appLogo = page.locator('.app_logo');
        this.productsTitle = page.locator('.title');
        this.shoppingCart = page.locator('.shopping_cart_link');
        this.sauceLabsBackpack = page.locator('#add-to-cart-sauce-labs-backpack');
    }
    async isAtInventoryPage() {
        await expect(this.page).toHaveURL(/.*inventory/);
        await expect(this.appLogo).toHaveText("Swag Labs");
        await expect(this.productsTitle).toHaveText("Products");
        await expect(this.shoppingCart).toBeVisible();
    }
    async addItemToTheCart(itemName: string) {
        await this.page.locator(`//div[@class='inventory_item_name' and text()='${itemName}']/../../..//button`).click();
    }
    async openShoppingCart() {
        await this.shoppingCart.click();
    }
    async removeItemFromTheCart(itemName: string) {
        await this.page.locator(`//div[@class='inventory_item_name' and text()='${itemName}']/../../..//button[text()='Remove']`).click();
    }
}