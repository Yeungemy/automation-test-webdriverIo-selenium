import { $ } from '@wdio/globals'
import Page from '../page.js';
import { PAGES } from '../../../configs/e2eConstants.js';
import { waits } from '../../util/WaitsUtil.js';
import { actions } from '../../util/ActionsUtil.js';

/**
 * login page containing specific selectors and methods
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get selectors (): any {
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
    async login (username: any = process.env.TEST_USERNAME, password: any = process.env.TEST_PASSWORD): Promise<void> {
        await actions.fillInputField(this.selectors.USER_NAME_INPUT_FIELD, username);
        await actions.fillInputField(this.selectors.PASSWORD_INPUT_FIELD, password);
        await waits.waitAndClick(this.selectors.SUBMIT_BTN);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async launchApplication (username: any = process.env.TEST_USERNAME, password: any = process.env.TEST_PASSWORD): Promise<void> {
        await super.open(PAGES.LOGIN);
        await this.login(username, password);
    }

    async teardown(): Promise<void>{
        await browser.closeWindow();
    }
}

const loginPage = new LoginPage();
export {loginPage};
