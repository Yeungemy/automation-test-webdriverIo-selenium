import { waits } from "./WaitsUtil";

class ActionsUtil{
    /**
     * Fill in the field and wait for text presented in 
     * @param {any} inputField - the element selector 
     * @param {string} context - the context to be filled in
     */
    async fillInputField(inputField: any, context: string): Promise<void>{
        await inputField.setValue(context);
    }
}

const actions = new ActionsUtil();
export {actions};