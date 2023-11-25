import { browser } from '@wdio/globals';

describe('Authentification Popup', () => {
    it('should be authenticated', async() => {
        await browser.url('https://admin:admin@the-internet.herokuapp.com/basic_auth');
        (await ($('#content p'))).isDisplayed();
        await expect($('#content p')).toHaveTextContaining('@Congratulations! You must have the proper credentials.');
    });
});