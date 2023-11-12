import fs from 'fs';

class SharedUtil{
    readJSONFile (fileName: string){
        return JSON.parse(fs.readFileSync(`src/assets/${fileName}`, 'utf8'));
    }
}

const shared = new SharedUtil();
export {shared};