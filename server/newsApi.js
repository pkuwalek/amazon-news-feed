const NewsAPI = require("newsapi");
const key = require("./config.js");
const apikey = key.ApiKey;
const newsapi = new NewsAPI(apikey);

const getAmazonArticles = (query) => 
    newsapi.v2.everything({
        qInTitle: `Amazon + ' AND ' + ${query || ""}`,
        language: 'en',
        sortBy: 'relevancy',
});

module.exports = {getAmazonArticles};