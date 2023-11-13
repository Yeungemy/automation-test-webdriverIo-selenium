class ActionsUtil{
    async waitAndClick(elem: ChainablePromiseElement): Promise<void> {
        await elem.waitForClickable();
        await elem.click();
    }
}

const actions = new ActionsUtil();
export {actions};