module.exports={
    id: 1,
    url: 'https://gnn.gamer.com.tw/rss.xml',
    type: 'rss',
    option: {
        method: 'GET',
        headers: {
            },        
        },
    fields: {
        title: {
            selector: '#BH-master > div.BH-lbox.GN-lbox3.gnn-detail-cont > div:nth-child(1) > h1'
        },
        subTitle:{
            selector: 'h1'
        },
        datePublished: {
            selector: 'meta[itemprop="datePublished"]',
            prop: 'content'
        }
    }
    
};

// export default sites;