const NewsAPI = require("newsapi");
const key = require("./config.js");
const apikey = key.ApiKey;
const newsapi = new NewsAPI(apikey);

const getAmazonArticles = () => 
    newsapi.v2.everything({
        qInTitle: 'amazon',
        language: 'en',
        sortBy: 'relevancy',
});

module.exports = {getAmazonArticles};