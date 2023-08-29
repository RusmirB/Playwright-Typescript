import { expect, type Locator, type Page } from '@playwright/test';

export class ShoppingCartPage {
    readonly page: Page;
    readonly yourCartTitle: Locator;
    readonly cartQuantity: Locator;

    constructor(page: Page) {
        this.page = page;
        this.yourCartTitle = page.locator('.title');
        this.cartQuantity = page.locator('.cart_quantity');
    }
    async isAtShoppingCartPage() {
        await expect(this.page).toHaveURL(/.*cart/);
        await expect(this.yourCartTitle).toHaveText("Your Cart");
    }
}