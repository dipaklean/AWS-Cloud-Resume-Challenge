const puppeteer = require('puppeteer');
const sleep = async (r) => await new Promise(r => setTimeout(r, 3000));

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://resume.dleantech.com');
  await sleep(3000)
  await page.waitForSelector('.vistor-counter');

  const counterValue = await page.$eval('.vistor-counter', (counter) => counter.textContent);

  console.log('Visitor Counter Value:', counterValue);

  await browser.close();
})();