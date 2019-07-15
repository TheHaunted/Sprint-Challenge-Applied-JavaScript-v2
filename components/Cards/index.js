// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(data => {
        console.log(data);
        let articles = data.data.articles;

        for(key in articles){
            articles[key].forEach(object => {
                createCard(object);
                

                document.querySelectorAll('.card').forEach(card => {
                    if(card.dataset.tech === 'node'){
                        console.log('node');
                        card.dataset.tech = 'node.js';
                    }
                })
            })
        }
    })
    .catch(error => console.log(error.message))

function createCard(dataObject){
    let cardsContainer = document.querySelector('.cards-container')
    // console.log(cardsContainer);
    let cardContainer = document.createElement('div');
    let headline = document.createElement('div');
    let author = document.createElement('div')
    let imgContainer = document.createElement('div');
    let img = document.createElement('img');
    let authorName = document.createElement('span');

    cardContainer.classList.add('card');
    cardContainer.dataset.tech = key;
    headline.classList.add('headline');
    headline.textContent = dataObject.headline;
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    img.src = dataObject.authorPhoto;
    authorName.textContent = `By ${dataObject.authorName}`;

    cardsContainer.appendChild(cardContainer);
    cardContainer.appendChild(headline);
    cardContainer.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    cardContainer.appendChild(authorName);

    return cardsContainer;
}

// document.querySelectorAll('.card').forEach(card => {
//     if(card.dataset.tech === 'node'){
//         console.log('node');
//         card.dataset.tech = 'node.js';
//     }
// })