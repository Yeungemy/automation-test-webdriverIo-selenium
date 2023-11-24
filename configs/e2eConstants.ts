export const PAGES = {
    LOGIN: 'login',
    ADD_REMOVE_ELEMENT: 'add_remove_elements/'
};

export const BROWSER_NAMES = {
    CHROME: 'chrome',
    FIREFOX: 'firefox'
};

export const BROWSER_ARGS = {
    chromeArgs: [
        '--disable-notifications',
        '--disable-infobars',
        '--start-maximized',
        '--no-sandbox',
        '--log-level=2' 
      ],
    firefoxArgs: [
            '-disable-notifications',
            '-disable-infobars',
            '-start-maximized',
            '-no-sandbox',
            '-log-level=2' 
    ]
}