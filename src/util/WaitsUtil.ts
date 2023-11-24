class WaitsUtil {
    /**
     * Wait for clickable element
     * @param {WebdriverIO.Element} elm - the element selector 
     * @param {number} waitTime - the waiting time
     */
    async waitUntilClickable(elm: WebdriverIO.Element, waitTime: number = 60000): Promise<void> {
        await elm.waitForClickable({ timeout: waitTime});
    }

    /**
     * Wait for clickable element and then click
     * @param {WebdriverIO.Element} elm - the element selector 
     * @param {number} waitTime - the waiting time
     */
    async waitAndClick(elm: WebdriverIO.Element, waitTime: number = 60000): Promise<void> {
        await this.waitUntilClickable(elm, waitTime);
        await elm.click();
    }

    /**
     * Wait for element enabled
     * @param {WebdriverIO.Element} elm - the element selector 
     * @param {number} waitTime - the waiting time
     */
    async waitUntilEnabled(elm: WebdriverIO.Element, waitTime: number = 60000): Promise<void> {
        await elm.waitForEnabled({timeout: waitTime});
    }

    /**
     * Wait for text presented in the field
     * @param {WebdriverIO.Element} elm - the element selector 
     * @param {number} waitTime - the waiting time
     */
    async waitUntilTextPresented(elm: WebdriverIO.Element, context: string, waitTime: number = 60000, alertMsg: string = 'expected text is not prented'): Promise<any> {
        await browser.waitUntil(async() =>{
            return (await elm.getText()) === context
          }, {
            timeout: waitTime,
            timeoutMsg: alertMsg
          });
    }
}

const waits = new WaitsUtil();
export { waits };