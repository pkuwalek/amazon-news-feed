const express = require("express");
const app = express();
const newsApi = require("./newsApi");
const cors = require('cors');
app.use(cors());

app.get('/', function (req, res) {
    const getArticles = newsApi.getAmazonArticles();
    return getArticles.then((response) => res.json(response.articles));
});

app.get('/:query', function (req, res) {
    const getArticles = newsApi.getAmazonArticles(req.params.query);
    return getArticles.then((response) => res.json(response.articles));
});

const runServer = (port) =>{
    console.log(`Server is running on port ${port}`);
    app.listen(port);
};

module.exports = {runServer};