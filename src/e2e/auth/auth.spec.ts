import { browser } from '@wdio/globals';

describe('Authentification Popup', () => {
    const USER_NAME = 'admin';
    const PASSWORD = 'admin';

    it('should be authenticated', async() => {
        await browser.url(`https://${USER_NAME}:${PASSWORD}@the-internet.herokuapp.com/basic_auth`);
        // await (await authPage.selectors.LOGIN_SUCCESSFULL_MSG).isDisplayed();
        await (await ($('#content p'))).isDisplayed();
        await expect($('#content p')).toHaveTextContaining('Congratulations! You must have the proper credentials.');
    });
});