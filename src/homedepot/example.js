const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            '--start-maximized'
        ]
    });
    const page = await browser.newPage();
    page.setViewport({
        width: 1440,
        height: 900
    });
    await page.goto('https://google.com');
    await page.screenshot({
        path: 'google.png'
    });

    //   await browser.close();
})();