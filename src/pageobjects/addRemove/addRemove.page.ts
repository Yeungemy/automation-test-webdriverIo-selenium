import { $ } from '@wdio/globals'
import Page from '../page.js';
import { PAGES } from '../../../configs/e2eConstants.js';
import { actions } from '../../util/ActionsUtil.js';

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
        await actions.waitAndClick(this.selectors.ADD_BTN);
    };

    async deleteElement(): Promise<void> {
        await actions.waitAndClick(this.selectors.DELETE_BTN);
    }
}

const addRemoveElement = new AddRemoveElement();
export { addRemoveElement };
