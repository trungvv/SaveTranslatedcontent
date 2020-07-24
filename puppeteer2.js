const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const sourceURL = 'https://news.qoo-app.com/post/201778';
  await page.goto(sourceURL);
  const title = await page.$eval(
    '#__layout > main > section > article > header > h1',
    (el) => el.innerText
  );
  const subTitle = await page.$eval(
    '#__layout > main > section > article > div > div.main > article > div.mp-body > p:nth-child(1)',
    (el) => el.innerText
  );
  const message = await page.$eval(
    'article > div.mp-body',
    (el) => el.innerText
  );

  const pic = await page.$eval(
    'META[property="og:image"]', el=>el.content,
    (el) => el.content
  );
  const picRecommend = '';

  console.log('title: ', title);
  console.log('subTitle: ', subTitle);
  console.log('Message: ', message);
  console.log('pic: ', pic);
  console.log('picRecommend: ', picRecommend);

  await browser.close();
})();
