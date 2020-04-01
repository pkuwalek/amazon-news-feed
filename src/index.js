import "./style.scss";
const apiRoute = "http://localhost";

const Api = {
    getArticles: () => {
        return fetch(apiRoute).then((response) => response.json());
    }
};

function showArticles() {
    const removeReadMoreFromDescription = (description) => {
        const regex = /(.*)(Read more\.\.\.)/;
        //const regexForContent = /\[\+\d+\schars\]/gm;
        let result = description.match(regex);
        if (result){
            return result[1];
        }
        return description;
    };
    const removeCharsFromContent = (content) => {
        console.log(content)
        const regex = /(.*)(\[\+\d+ chars\])$/s;
        let result = content.match(regex);
        console.log(result)
        if(result){
            return result[1];
        }
        return content;
    };

    const articleCard = ({urlToImage, title, description, content, url}) => `
        <div class="article-card">
            <img src="${urlToImage}" class="image">
            <h1 class="title">${title}</h1>
            <h3 class="description">${removeReadMoreFromDescription(description)}</h3>
            <p class="content">${removeCharsFromContent(content)}</p>
            <button type="button" class="read-more-btn" onclick="window.open('${url}')">
                Read more
            </button>
        </div>
    `;

    const navbar = () => `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"><img class="logo" src="./../src/amazonlogocut.png" alt="">NEWSFEED</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">Jeff Bezos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Alexa</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Grand Tour</a>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
        </nav>
    `;

    Api.getArticles()
    .catch((err) => {
        document.getElementById("main").innerHTML = `
        <h1 style="color: red">${err}</h1>
        <h2>${err.message}</h2>
        `;
        throw err;
    })
    .then((response) => {
        const articlesContainer = `
        <header>
            ${navbar()}
        </header>
        <div class="page-content">
            <div id="articles">
                ${(response).map(data => (articleCard(data))).join("")}
            </div>
            <div id="top-articles">
                <h3>most popular articles</h3>
            </div>
        </div>
        `;
        document.getElementById("main").innerHTML = articlesContainer;
    });
}
showArticles();