const puppeteer = require('puppeteer');
const CREDS = require('./creds');
async function run() {
const browser = await puppeteer.launch({
  headless: false,
  // slowMo: 5 // slow down by 250ms
});
  const page = await browser.newPage();
  await page.goto('https://myactivity.google.com/');
  // await page.screenshot({ path: 'screenshots/myactivity.png' });
  const sign_in_button = ".WpHeLc";
  await page.click(sign_in_button);
  await page.waitForNavigation();
  // await page.screenshot({ path: 'screenshots/myactivity2.png' });
  const email_selector = '#identifierId';
  await page.click(email_selector);
  await page.keyboard.type(CREDS.email);
  const next = '#identifierNext > div.ZFr60d.CeoRYc';
  await page.click(next);
  await page.waitForNavigation();
  const password = '.bCAAsb > form:nth-child(1) > span:nth-child(1) > section:nth-child(1) > div:nth-child(2)';
  await page.waitFor(password);
  console.log("enter pass:")
  // await page.evaluate((password) => {document.querySelector(password).click(); password.value = CREDS.password; console.log("HI!")}, password)
  // await page.keyboard.type(CREDS.password);
  // await page.waitForNavigation();
  // await page.waitFor('jkOv3d');
  // page
  //   .waitForSelector('jkOv3d')
  //   .then(() => console.log("FOUND THE SOURCE"));
  // await page.waitFor(20*1000);
  await page.waitForNavigation();
  console.log("Hey");
  const menu = ".gb_wc";
  await page.waitFor(menu);
  await page.$eval(menu, a => {a.click();});
  const element_wise = "a.Zt1cpf:nth-child(2)";
  await page.waitFor(element_wise);
  await page.$eval(element_wise, a => {a.click();});
  // await page.waitForNavigation();
  // await page.click(menu);
  // await page.click("#gb > div.gb_de > div > div.gb_Lc > div > c-wiz > div > div > nav > a:nth-child(1)");
  // await page.waitForNavigation();
  const selector = ".FcScvd";
  await page.waitFor(selector);
  console.log("Heyo");
  const results = await page.$$(selector);
  // });
  // console.log(results);
  results.forEach(result => {
    console.log(result.children);
  });
  // await page.mouse.move(0, 0);
  // await page.mouse.down();
  // await page.mouse.move(0, 100);
  // await page.mouse.move(100, 100);
  // await page.mouse.move(100, 0);
  // await page.mouse.move(0, 0);
  // await page.mouse.move(120, 120);
  // await page.mouse.up();
  await page.screenshot({ path: 'screenshots/myactivity3.png' });
  // browser.close();
  // await page.click(next);
  // await page.waitForNavigation();
  // const PASSWORD_SELECTOR = '.ZFr60d.CeoRYc';
  // const CREDS = require('./creds');
  
  
  // await page.keyboard.type(CREDS.password);
  
  // await page.click(BUTTON_SELECTOR);
  
  // await page.waitForNavigation();
  
  // browser.close();
}

run();