const key = `a3ef4c70a0914fc18f01a3c8e9e606cb`
async function getValue(topic) {
    const url = `https://newsapi.org/v2/everything?q=${topic}&from=2023-12-25&sortBy=publishedAt&apiKey=a3ef4c70a0914fc18f01a3c8e9e606cb`
     const response = await fetch(url);
     const data = await response.json();
     
     console.log(data);
     const articles = data.articles;
     const divElement = document.getElementById("contants")
     divElement.innerHTML="";
     articles.forEach(element => {
        const card = document.createElement("div");
        card.className = "card"
        card.style="width: 22rem;";
        card.innerHTML= `<img src="${element.urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.description}</p>
              <a href="${element.url}" class="btn btn-primary">know more</a>
            </div>`
        divElement.append(card);
     });

     
}