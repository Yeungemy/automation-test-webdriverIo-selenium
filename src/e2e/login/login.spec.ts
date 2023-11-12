import { expect } from '@wdio/globals'
import { loginPage } from '../../pageobjects/login/login.page.js'
import { securePage } from '../../pageobjects/login/secure.page.js'
import { shared } from '../../util/SharedUtil.js';

describe("Login Function", () => {
    const fileName = 'loginData.json';
    const loginData = shared.readJSONFile(fileName)

    beforeEach(async () => {
        await loginPage.open();
    });

    it("Should be able to login with correct username and password", async () => {
        let username = loginData[0].username;
        let password = loginData[0].password;
        
        await loginPage.login(username, password);
        await expect(securePage.selectors.FLASH_ALERT).toBeExisting();

        await expect(securePage.selectors.FLASH_ALERT).toHaveTextContaining(
            securePage.strings.SUCCESSFUL_LOGIN_ALERT);
    });

    it("should be alerted with a proper message when logining with an incorrect username", async () => {
        let username = loginData[1].username;
        let password = loginData[1].password;
        
        await loginPage.login(username, password);
        await expect(securePage.selectors.FLASH_ALERT).toBeExisting();
        await expect(securePage.selectors.FLASH_ALERT).toHaveTextContaining(
            securePage.strings.INVALID_USERNAME_ALERT);
    });

    it("should be alerted with a proper message when logining with an incorrect password", async () => {
        let username = loginData[2].username;
        let password = loginData[2].password;
        
        await loginPage.login(username, password);
        await expect(securePage.selectors.FLASH_ALERT).toBeExisting();
        await expect(securePage.selectors.FLASH_ALERT).toHaveTextContaining(
            securePage.strings.INVALID_PASSWORD_ALERT);
    });

    it("should be alerted with a proper message when logining without a username", async () => {
        let username = loginData[3].username;
        let password = loginData[3].password;
        
        await loginPage.login(username, password);
        await expect(securePage.selectors.FLASH_ALERT).toBeExisting();
        await expect(securePage.selectors.FLASH_ALERT).toHaveTextContaining(
            securePage.strings.INVALID_USERNAME_ALERT);
    });

    it("should be alerted with a proper message when logining without a password", async () => {
        let username = loginData[4].username;
        let password = loginData[4].password;
        
        await loginPage.login(username, password);
        await expect(securePage.selectors.FLASH_ALERT).toBeExisting();
        await expect(securePage.selectors.FLASH_ALERT).toHaveTextContaining(
            securePage.strings.INVALID_PASSWORD_ALERT);
    });

    it("should be alerted with a proper message when logining without a password or username", async () => {
        let username = loginData[5].username;
        let password = loginData[5].password;
        
        await loginPage.login(username, password);
        await expect(securePage.selectors.FLASH_ALERT).toBeExisting();
        await expect(securePage.selectors.FLASH_ALERT).toHaveTextContaining(
            securePage.strings.INVALID_USERNAME_ALERT);
    });
});