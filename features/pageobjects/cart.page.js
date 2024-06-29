import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnSubmit(){
        return $('#checkout');
    }

    async validateOnPage(){
        expect(this.cartIcon).toBeDisplayed();
    }
}

export default new CartPage();
