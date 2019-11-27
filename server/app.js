const express = require("express");
const app = express();
const newsApi = require("./newsApi");

app.get('/', function (req, res) {
    return res.json(newsApi.getAmazonArticles());
});

const runServer = (port) =>{
    console.log(`Server is running on port ${port}`);
    app.listen(port);
};

module.exports = {runServer};