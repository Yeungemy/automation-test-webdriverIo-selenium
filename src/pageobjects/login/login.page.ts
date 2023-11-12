import { $ } from '@wdio/globals'
import Page from '../page.js';

/**
 * login page containing specific selectors and methods
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get selectors () {
        return {
            USER_NAME_INPUT_FIELD: $('#username'),
            PASSWORD_INPUT_FIELD: $('#password'),
            SUBMIT_BTN: $('button[type="submit"]')
        };
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.selectors.USER_NAME_INPUT_FIELD.setValue(username);
        await this.selectors.PASSWORD_INPUT_FIELD.setValue(password);
        await this.selectors.SUBMIT_BTN.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open('login');
    }
}

const loginPage = new LoginPage();
export {loginPage};
