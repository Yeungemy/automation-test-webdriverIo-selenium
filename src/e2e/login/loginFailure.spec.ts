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
    await loginPage.launchApplication(username, password);
    await expect(securePage.selectors.FLASH_ALERT).toBeExisting();
    await expect(securePage.selectors.FLASH_ALERT).toHaveTextContaining(msg);
}

describe("Login Failure", () => {
    const fileName = 'loginData.json';
    const loginData = shared.readJSONFile(fileName);
    let index = 1;
    let username: string;
    let password: string;

    beforeEach(async () => {
        // define login username and password from the login data JSON file by index
        username = loginData[index].username;
        password = loginData[index].password;
        index++;
    });

    it("@smoke @sanity should be alerted when logining with an incorrect username", async () => {
        await loginAndThenVerify(username, password, securePage.strings.INVALID_USERNAME_ALERT);
    });

    it("should be alerted when logining with an incorrect password", async () => {
        await loginAndThenVerify(username, password, securePage.strings.INVALID_PASSWORD_ALERT);
    });

    it("should be alerted when logining without a username", async () => {
        await loginAndThenVerify(username, password, securePage.strings.INVALID_USERNAME_ALERT);
    });

    it("should be alerted when logining without a password", async () => {
        await loginAndThenVerify(username, password, securePage.strings.INVALID_PASSWORD_ALERT);
    });

    it("should be alerted when logining without entering a password or username", async () => {
        await loginAndThenVerify(username, password, securePage.strings.INVALID_USERNAME_ALERT);
    });
});