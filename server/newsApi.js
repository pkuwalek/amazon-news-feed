const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('b042b722326643868b8ba64fe43377bd');


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