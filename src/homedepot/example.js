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
    await page.goto('https://www.dedbit.com/');
    await page.screenshot({
        path: 'dedbit.png'
    });

    //   await browser.close();
})();