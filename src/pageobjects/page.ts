import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {

    /**
     * Give back if the element is displayed
     */
    async isDisplayed(ele: WebdriverIO.Element): Promise<boolean> {
        return ele.isDisplayed();
    }

    /**
     * Give back if the element is exist
     */
    async isPresented(ele: WebdriverIO.Element): Promise<boolean> {
        return ele.isExisting();
    }

    async refresh(): Promise<void>{
        await browser.refresh();
    }

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    async open (path: string): Promise<void>  {
        await browser.url(path);
    }
}
