const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const sourceURL = 'https://gnn.gamer.com.tw/detail.php?sn=200537';
  await page.goto(sourceURL);
  const title = await page.$eval(
    '#BH-master > div.BH-lbox.GN-lbox3.gnn-detail-cont > div:nth-child(1) > h1',
    (el) => el.innerText
  );
  const subTitle = await page.$eval(
    '#BH-master > div.BH-lbox.GN-lbox3.gnn-detail-cont > div.GN-lbox3B > div > div:nth-child(1) > div:nth-child(1)',
    (el) => el.innerText
  );
  const message = await page.$eval(
    '#BH-master > div.BH-lbox.GN-lbox3.gnn-detail-cont > div.GN-lbox3B > div',
    (el) => el.innerText
  );

  const pic = await page.$eval(
    'meta[name="thumbnail"]', el=>el.content,
    (el) => el.content
  );
  const picRecommend = await page.$eval('META[property="og:image"]', (el) => el.content);

  console.log('title: ', title);
  console.log('subTitle: ', subTitle);
  console.log('Message: ', message);
  console.log('pic: ', pic);
  console.log('picRecommend: ', picRecommend);

  await browser.close();
})();
