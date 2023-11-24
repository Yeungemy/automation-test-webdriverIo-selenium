import fs from 'fs';
import Chance from 'chance';
const chance = new Chance();

/**
 * This util class contains methods that are shared for the project
 */
class SharedUtil {
    randomWord(requiredLength: number) {
        chance.word({ length: requiredLength });
    }

    randomNumber(minValue: number, maxValue: number) {
        chance.integer({ min: minValue, max: maxValue });
    }

    randomString(requiredLength: number, prefix: string = "", seprator: string = "_") {
        `${prefix}${seprator}${chance.string().substring(0, requiredLength - 1)}`;
    }

    randomId(requiredLength: number, prefix: string = "", seprator: string = "_") {
        `${prefix}${seprator}${chance.guid().substring(0, requiredLength - 1)}`;
    }

    /**
     * Read JSON files within the assets folder
     * @param {string} fileName - the file name
     * @returns {JSON } a JSON file
     */
    async readJSONFile(fileName: string): Promise<JSON> {
        return await JSON.parse(fs.readFileSync(`src/assets/${fileName}`, 'utf8'));
    }
}

const shared = new SharedUtil();
export { shared };