// import Page from '../page';

import Page from "../page";

// class AuthPage extends Page {
//     get selectors () {
//         return {
//            LOGIN_SUCCESSFULL_MSG : $('#content p')
//         };
//     }

//     get strings (): any {
//         return {
//            LOGIN_SUCCESSFULL_MSG : 'Congratulations! You must have the proper credentials.'
//         };
//     }
// }

// const authPage = new AuthPage();
// export {authPage};

class AuthPage extends Page {
    /**
     * define selectors using getter methods
     */
    get selectors () {
        return {
            LOGIN_SUCCESSFULL_MSG : $('#content p')
        };
    }

    get strings() {
        return {
            LOGIN_SUCCESSFULL_MSG : 'Congratulations! You must have the proper credentials.'
        };
    }

    async getLoginSuccessfullMsg(): Promise<string> {
        return await this.selectors.LOGIN_SUCCESSFULL_MSG.getText();
    }
}

const authPage = new AuthPage();
export {authPage};