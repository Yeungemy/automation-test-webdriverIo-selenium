import { $ } from '@wdio/globals'
import Page from '../page.js';
import { waits } from '../../util/WaitsUtil.js';

/**
 * Add/remove element page
 */
class AddRemoveElement extends Page {
    get selectors(): any {
        return {
            ADD_BTN: $('[onclick="addElement()"]'),
            DELETE_BTN: $('.added-manually')
        }
    }

    async addElement(): Promise<void> {
        await waits.waitAndClick(this.selectors.ADD_BTN);
    };

    async deleteElement(): Promise<void> {
        await waits.waitAndClick(this.selectors.DELETE_BTN);
    }
}

const addRemoveElement = new AddRemoveElement();
export { addRemoveElement };
