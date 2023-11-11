import { expect } from '@wdio/globals'
import LoginPage from '../../pageobjects/login/login.page.js'
import SecurePage from '../../pageobjects/login/secure.page.js'
import fs from 'fs';
const loginData = JSON.parse(fs.readFileSync('src/assets/loginData.json', 'utf8'));

describe("Negative test on logining", () => {
    console.log(Object.values(loginData));
    let index: number = 0

    loginData.forEach(({ username, password }) => {
        index++;
        it("should no be able to login with incorrect username or password", async () => {
            console.log("userName: " + username);
            console.log("password: " + password);

            await LoginPage.open()

            await LoginPage.login(username, password)

            if (index < 1) {
                await expect(SecurePage.flashAlert).toBeExisting()
                await expect(SecurePage.flashAlert).toHaveTextContaining(
                    'You logged into a secure area!')
            }else{
                console.log("failed for incorrect username or password");
            }
        });

    });
});