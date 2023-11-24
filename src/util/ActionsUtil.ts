import { waits } from "./WaitsUtil";

class ActionsUtil{
    /**
     * Fill in the field and wait for text presented in 
     * @param {WebdriverIO.Element} inputField - the element selector 
     * @param {string} context - the context to be filled in
     */
    async fillInputField(inputField: WebdriverIO.Element, context: string): Promise<void>{
        await waits.waitUntilEnabled(inputField);
        await inputField.setValue(context);
        await waits.waitUntilTextPresented(inputField, context);
    }
}

const actions = new ActionsUtil();
export {actions};