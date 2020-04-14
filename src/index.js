import "./style.scss";
import logo from "./../src/amazonlogocut.png";
const apiRoute = "http://localhost";

const Api = {
    getArticles: () => {
        return fetch(apiRoute).then((response) => response.json());
    }
};

const QuerySearch = {
    getArticles: (query) => {
        return fetch(`${apiRoute}/${query}`).then((response) => response.json());
    }
}

const TopTen = {
    getTopTen : () => {
        return fetch(`${apiRoute}/top10`).then((response) => response.json());
    }
}

const navbar = () => {
    const navbarContent = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <span id="logo" class="logo navbar-brand" href="#"><img class="logo" src=${logo} alt="">NEWSFEED</span>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <span class="nav-link" id="bezos">Jeff Bezos</span>
                </li>
                <li class="nav-item">
                    <span class="nav-link" id="alexa">Alexa</span>
                </li>
                <li class="nav-item">
                    <span class="nav-link" id="prime">Prime Video</span>
                </li>
                <li class="nav-item">
                    <span class="nav-link" id="grandtour">Grand Tour</span>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input id="querysearch" class="form-control mr-sm-2" navbartype="search" placeholder="Search" aria-label="Search">
                <button id="searchbtn" class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
    `;
    document.getElementById("navbar").innerHTML = navbarContent;
    document.getElementById("logo").onclick = (event) => showArticles();
    document.getElementById("searchbtn").onclick = (event) => {
        event.preventDefault();
        let query = document.getElementById("querysearch").value;
        showArticles(query);
    };
    document.getElementById("bezos").onclick = (event) => showArticles("Jeff Bezos");
    document.getElementById("alexa").onclick = (event) => showArticles("Alexa");
    document.getElementById("prime").onclick = (event) => showArticles("Prime Video");
    document.getElementById("grandtour").onclick = (event) => showArticles("Grand Tour");
};

function showArticles(queryPhrase) {

    const removeReadMoreFromDescription = (description) => {
        const regex = /(.*)(Read more\.\.\.)/;
        let result = description.match(regex);
        if (result){
            return result[1];
        }
        return description;
    };
    const removeCharsFromContent = (content) => {
        const regex = /(.*)(\[\+\d+ chars\])$/s;
        let result = content.match(regex);
        if(result){
            return result[1];
        }
        return content;
    };

    const articleCard = ({urlToImage, title, description, content, url}) => `
    <div class="card mb-3">
        <img src="${urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
            <h4 class="card-title font-weight-bolder">${title}</h4>
            <h5 class="card-subtitle mb-2">${description ? removeReadMoreFromDescription(description) : description}</h5>
            <p class="card-text">${content ? removeCharsFromContent(content) : content}</p>
            <button type="button" class="btn btn-secondary" onclick="window.open('${url}')">Read more</button>
        </div>
    </div>
    `;

    const topTenCardContent = ({title, url}) => `<li class="list-group-item" onclick="window.open('${url}')">${title}</li>`;

    const getFilteredArticles = (query) => {
        QuerySearch.getArticles(query)
        .catch((err) => {
            document.getElementById("main").innerHTML = `
            <h1 style="color: red">${err}</h1>
            <h2>${err.message}</h2>
            `;
            throw err;
        })
        .then((response) => {
            const articlesContainer = `
            <div class="page-content container">
                <div class="row">
                    <div id="articles" class="col col-md-8 p-0">
                        ${(response).map(data => (articleCard(data))).join("")}
                    </div>
                    <div id="top-articles" class="col-4 d-none d-md-block p-0">
                    </div>
                </div>
            </div>
            `;
            document.getElementById("main").innerHTML = articlesContainer;
            getTopTenArticles();
        });
    }

    const getTopTenArticles = () => TopTen.getTopTen()
    .catch((err) => {
        document.getElementById("main").innerHTML = `
        <h1 style="color: red">${err}</h1>
        <h2>${err.message}</h2>
        `;
        throw err;
    })
    .then((response) => {
        const topTenCard = `
        <div class="card toptencontainer">
            <div class="card-header">
                Top 10 articles
            </div>
            <ul class="list-group list-group-flush">
                ${(response).map(data => (topTenCardContent(data))).join("")}
            </ul>
        </div>
        `;
        document.getElementById("top-articles").innerHTML = topTenCard;
    });

    const getArticles = () => Api.getArticles()
    .catch((err) => {
        document.getElementById("main").innerHTML = `
        <h1 style="color: red">${err}</h1>
        <h2>${err.message}</h2>
        `;
        throw err;
    })
    .then((response) => {
        const articlesContainer = `
        <div class="page-content container">
            <div class="row">
                <div id="articles" class="col col-md-8 p-0">
                    ${(response).map(data => (articleCard(data))).join("")}
                </div>
                <div id="top-articles" class="col-4 d-none d-md-block p-0">
                </div>
            </div>
        </div>
        `;
        document.getElementById("main").innerHTML = articlesContainer;
        getTopTenArticles();
    });

    if (queryPhrase) getFilteredArticles(queryPhrase);
    else getArticles();
    
}
navbar();
showArticles();