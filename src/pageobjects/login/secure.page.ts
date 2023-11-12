import { $ } from '@wdio/globals'
import Page from '../page.js';

/**
 * Secure page containing selectors and methods 
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get  selectors() {        
        return {
            FLASH_ALERT: $('#flash')
        };
    }

    public get strings(){
        return {
          SUCCESSFUL_LOGIN_ALERT  : "You logged into a secure area!",
          INVALID_PASSWORD_ALERT: "Your password is invalid!",
          INVALID_USERNAME_ALERT: "Your username is invalid!"
        };
    }
}

const securePage = new SecurePage();
export {securePage};
