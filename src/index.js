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