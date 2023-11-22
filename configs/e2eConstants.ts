export const PAGES = {
    LOGIN: 'login'
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