const puppeteer = require('puppeteer');
const sleep = async (r) => await new Promise(r => setTimeout(r, 5000));

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://resume.dleantech.com');
  await sleep(5000)
  await page.waitForSelector('.visitor-counter');

  const counterValue = await page.$eval('.visitor-counter', (counter) => counter.textContent);

  console.log('Visitor Counter Value:', counterValue);

  await browser.close();
})();