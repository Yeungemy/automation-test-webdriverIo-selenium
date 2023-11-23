import { expect } from '@wdio/globals'
import { loginPage } from '../../pageobjects/login/login.page.js'
import { securePage } from '../../pageobjects/login/secure.page.js'

describe("Login and logout Successfully", () => {
    it("@smoke @sanity Should be able to login with correct username and password and then logout", async function(){
        //apply retry
        //this.retries(2);
        await loginPage.launchApplication();

        await expect(securePage.selectors.FLASH_ALERT).toBeExisting();
        await expect(securePage.selectors.FLASH_ALERT).toHaveTextContaining(securePage.strings.SUCCESSFUL_LOGIN_ALERT);

        await securePage.logout();
        await expect(securePage.selectors.LOGOUT_BTN).not.toBeExisting();
    });
});