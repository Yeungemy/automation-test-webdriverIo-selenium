import { $ } from '@wdio/globals'
import Page from '../page.js';
import { actions } from '../../util/ActionsUtil.js';
import { waits } from '../../util/WaitsUtil.js';

/**
 * Secure page containing selectors and methods 
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get selectors(): any {
        return {
            FLASH_ALERT: $('#flash'),
            LOGOUT_BTN: $('a.button')
        };
    }

    get strings() {
        return {
            SUCCESSFUL_LOGIN_ALERT: "You logged into a secure area!",
            INVALID_PASSWORD_ALERT: "Your password is invalid!",
            INVALID_USERNAME_ALERT: "Your username is invalid!"
        };
    }

    async logout(): Promise<void> {
        await waits.waitAndClick(this.selectors.LOGOUT_BTN);
    }
}

const securePage = new SecurePage();
export { securePage };
