class WaitsUtil {
    /**
     * Wait for the element to be displayed
     */
    async waitForIsShown(ele: any, isShown = true): Promise<boolean> {
        try{
            const result = await ele.waitForDisplayed({
                timeout: Number(process.env.WAIT_FOR_TIME_OUT),
                reverse: !isShown
            });

            return !!result;
        } catch (e) {
            return !isShown;
        }
    }

    /**
     * Wait for clickable element
     * @param {any} elm - the element selector 
     * @param {number} waitTime - the waiting time
     */
    async waitUntilClickable(elm: any, waitTime: number = 60000): Promise<void> {
        await elm.waitForClickable({ timeout: waitTime});
    }

    /**
     * Wait for clickable element and then click
     * @param {any} elm - the element selector 
     * @param {number} waitTime - the waiting time
     */
    async waitAndClick(elm: any, waitTime: number = 60000): Promise<void> {
        await this.waitUntilClickable(elm, waitTime);
        await elm.click();
    }

    /**
     * Wait for element enabled
     * @param {any} elm - the element selector 
     * @param {number} waitTime - the waiting time
     */
    async waitUntilEnabled(elm: any, waitTime: number = 60000): Promise<void> {
        await elm.waitForEnabled({timeout: waitTime});
    }
}

const waits = new WaitsUtil();
export { waits };