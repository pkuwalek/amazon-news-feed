import "./style.scss";
const apiRoute = "http://localhost";

console.log("I am translated");

const Api = {
    getArticles: () => {
        return fetch(apiRoute).then((response) => response.json());
    }
};

function showArticles() {
    Api.getArticles()
    .catch((err) => {
        document.getElementById("main").innerHTML = `
        <h1 style="color: red">${err}</h1>
        <h2>${err.message}</h2>
        `;
        throw err;
    })
    .then((response) => {
        console.log(response);
        const article = JSON.stringify((response).map(data => ({
            author: data.author,
            title: data.title,
            description: data.description,
            url: data.url,
            urlToImg: data.urlToImage,
            content: data.content
        })));
        const articlesContainer = `
        <div>
            ${article}
        </div>
        `;
        document.getElementById("main").innerHTML = articlesContainer;
    });
}
showArticles();