const fetch = require('node-fetch');
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
            // console.log(scrapeResult);
        })
        return scrapeResults;
    }catch(error){
        console.log(error);
        
    }
}

console.log(getScrapeList());