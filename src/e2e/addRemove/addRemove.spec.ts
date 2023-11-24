import { addRemoveElement } from '../../pageobjects/addRemove/addRemove.page.js';
import { PAGES } from '../../../configs/e2eConstants.js';

describe("Add and Remove", () => {
    it("Should be able to add an element and then delete it", async() => {
        await addRemoveElement.open(PAGES.ADD_REMOVE_ELEMENT);
        await addRemoveElement.addElement();
        await addRemoveElement.deleteElement();
        await addRemoveElement.isDisplayed(addRemoveElement.selectors.ADD_BTN);
        await expect(addRemoveElement.selectors.DELETE_BTN).not.toBePresent();
    });
});