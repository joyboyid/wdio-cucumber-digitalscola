import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get cartIcon(){
        return $('#shopping_cart_container')
    }

    get btnSubmit(){
        return $('#add-to-cart-sauce-labs-backpack');
    }


    async validateOnPage(){
        expect(this.cartIcon).toBeDisplayed();
    }
}

export default new InventoryPage();
