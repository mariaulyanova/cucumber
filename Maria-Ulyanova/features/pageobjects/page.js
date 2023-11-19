const { browser } = require('@wdio/globals');


module.exports = class Page {
    async open() {
        await browser.maximizeWindow();
        await browser.url(`https://irent.am/`);
    }
}
