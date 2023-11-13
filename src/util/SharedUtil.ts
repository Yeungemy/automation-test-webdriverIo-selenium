import fs from 'fs';

/**
 * This util class contains methods that are shared for the project
 */
class SharedUtil{
    /**
     * Read JSON files within the assets folder
     * @param {string} fileName - the file name
     * @returns 
     */
    readJSONFile (fileName: string): Promise<JSON> {
        return JSON.parse(fs.readFileSync(`src/assets/${fileName}`, 'utf8'));
    }
}

const shared = new SharedUtil();
export {shared};