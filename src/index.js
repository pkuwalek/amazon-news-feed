import "./style.scss";
const apiRoute = "http://localhost";

const Api = {
    getArticles: () => {
        return fetch(apiRoute).then((response) => response.json());
    }
};

function showArticles() {
    const articleCard = ({urlToImage, title, description, content}) => `
    <div class="article-card">
        <img src="${urlToImage}" class="image">
        <h1 class="title">${title}</h1>
        <h3 class="description">${description}</h3>
        <p class="content">${content}</p>
        <button type="button" class="read-more-btn">Read more</button>
    </div>
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
        <div id="articles">
            ${(response).map(data => (articleCard(data))).join("")}
        </div>
        `;
        document.getElementById("main").innerHTML = articlesContainer;
    });
}
showArticles();