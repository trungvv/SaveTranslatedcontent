const fetch = require('node-fetch');
const request = require('requestretry').defaults({
    //  fullResponse: false,
  });
const cheerio = require('cheerio')
const sites = require('./sites');

const scrapeResults = [];
async function getScrapeList(){
    try{
        const response = await fetch(sites.url, sites.option);
        const str = await response.text();
        const $ =  cheerio.load(str, {
            normalizeWhitespace: true,
            xmlMode: true
        });
        
        $('item').each((index, element)=>{
            const postUrl = $(element).find('link').text();
            const scrapeResult = {postUrl, ...sites.fields};
            scrapeResults.push(scrapeResult);
        })
        return scrapeResults;
    }catch(error){
        console.log(error);
        
    }
}

async function scrapePosts(scrapes){
    return await Promise.all(
        scrapes.map(async (scrape, index)=>{
            try{
                const response = await request({url: scrape.postUrl, json: true, fullResponse: true});
                const $ = await cheerio.load(response.body);
                
                scrape.title.value = $(scrape.title.selector).text();
                scrape.datePublished.value = $(scrape.datePublished.selector).prop(scrape.datePublished.prop);
                
                return scrape;
            } catch(error){
                console.log(error);
            }
        }), {concurrency: 10}
    );
}

async function main(){
    try{
        const scraps = await getScrapeList();
        const posts = await scrapePosts(scraps);
        // console.log(scraps, "LENGTH: ", scraps.length);
        console.log(posts[0]);

    } catch(error){
        console.log(error);
    }
}

main();