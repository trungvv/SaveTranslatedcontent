module.exports={
    id: 1,
    url: 'https://vnexpress.net/rss/suc-khoe.rss',
    type: 'rss',
    option: {
        method: 'GET',
        headers: {
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-language': 'en-US,en;q=0.9,vi;q=0.8',
            'accept-encoding': 'gzip, deflate, br',
            'cache-control': 'no-cache',
            'cookie': 'device_env=4',
            'pragma': 'no-cache',
            'referer': 'https://vnexpress.net/rss',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Mobile Safari/537.36'
                },        // request headers. format is the identical to that accepted by the Headers constructor (see below)
        // body: null,         // request body. can be null, a string, a Buffer, a Blob, or a Node.js Readable stream
        // redirect: 'follow', // set to `manual` to extract redirect headers, `error` to reject redirect
        // signal: null,       // pass an instance of AbortSignal to optionally abort requests
    
        // // The following properties are node-fetch extensions
        // follow: 20,         // maximum redirect count. 0 to not follow redirect
        // timeout: 0,         // req/res timeout in ms, it resets on redirect. 0 to disable (OS limit applies). Signal is recommended instead.
        // compress: true,     // support gzip/deflate content encoding. false to disable
        // size: 0,            // maximum response body size in bytes. 0 to disable
        // agent: null  
        },
    fields: {
        title: {
            selector: 'h1.title-detail'
        },
        datePublished: {
            selector: 'meta[itemprop="datePublished"]',
            prop: 'content'
        }
    }
    
};

// export default sites;