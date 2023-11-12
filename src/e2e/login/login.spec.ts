import { expect } from '@wdio/globals'
import { loginPage } from '../../pageobjects/login/login.page.js'
import { securePage } from '../../pageobjects/login/secure.page.js'
import { shared } from '../../util/SharedUtil.js';

/**
 * Login and verify whety the message and the result are expected
 * @param {string} username - user name
 * @param {string} password - password
 * @param {string} msg - the message is provided after the login process
 */
async function loginAndThenVerify(username: string, password: string, msg: string) {
    await loginPage.login(username, password);
    await expect(securePage.selectors.FLASH_ALERT).toBeExisting();

    await expect(securePage.selectors.FLASH_ALERT).toHaveTextContaining(msg);
}

describe("Login Function", () => {
    const fileName = 'loginData.json';
    const loginData = shared.readJSONFile(fileName);

    beforeEach(async () => {
        await loginPage.open();
    });

    it("Should be able to login with correct username and password and then logout", async () => {
        const index = 0;
        const username = loginData[index].username;
        const password = loginData[index].password;

        await loginAndThenVerify(username, password, securePage.strings.SUCCESSFUL_LOGIN_ALERT);

        await securePage.logout();
        await expect(securePage.selectors.LOGOUT_BTN).not.toBeExisting();
    });

    it("should be alerted with a proper message when logining with an incorrect username", async () => {
        const index = 1;
        const username = loginData[index].username;
        const password = loginData[index].password;

        await loginAndThenVerify(username, password, securePage.strings.INVALID_USERNAME_ALERT);
    });

    it("should be alerted with a proper message when logining with an incorrect password", async () => {
        const index = 2;
        const username = loginData[index].username;
        const password = loginData[index].password;

        await loginAndThenVerify(username, password, securePage.strings.INVALID_PASSWORD_ALERT);
    });

    it("should be alerted with a proper message when logining without a username", async () => {
        const index = 3;
        const username = loginData[index].username;
        const password = loginData[index].password;

        await loginAndThenVerify(username, password, securePage.strings.INVALID_USERNAME_ALERT);
    });

    it("should be alerted with a proper message when logining without a password", async () => {
        const index = 4;
        const username = loginData[index].username;
        const password = loginData[index].password;

        await loginAndThenVerify(username, password, securePage.strings.INVALID_PASSWORD_ALERT);
    });

    it("should be alerted with a proper message when logining without a password or username", async () => {
        const index = 5;
        const username = loginData[index].username;
        const password = loginData[index].password;

        await loginAndThenVerify(username, password, securePage.strings.INVALID_USERNAME_ALERT);
    });
});