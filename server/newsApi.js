const NewsAPI = require("newsapi");
const key = require("./config.js");
const apikey = key.ApiKey;
const newsapi = new NewsAPI(apikey);

const getAmazonArticles = () => 
    newsapi.v2.everything({
        qInTitle: 'amazon',
        language: 'en',
        sortBy: 'relevancy',
    })

function showArticles() {
    getAmazonArticles()
    .catch((err) => {
        document.getElementById("main").innerHTML = `
        <h1 style="color: red">${err}</h1>
        <h2>${err.message}</h2>
        `;
        throw err;
    })
    .then((response) => {
        //console.log(response);
        const article = (response.articles).map(data => ({
            author: data.author,
            title: data.title,
            description: data.description,
            url: data.url,
            urlToImg: data.urlToImage,
            content: data.content
        }));
        console.log(article);
    });
}
showArticles();

module.exports = {getAmazonArticles};