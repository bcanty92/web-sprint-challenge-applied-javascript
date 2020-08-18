// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


    

console.log(axios.get('https://lambda-times-backend.herokuapp.com/articles'))
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => Cards(res.data.articles));


const cardContainer = document.querySelector('.cards-container')

function Cards(obj){
    //for loop, loops through all of the articles
    for (const [key, value] of Object.entries(obj)){
        //loops through all of the elements in the articles 
        value.forEach(element => {
            //create element
            let card = document.createElement('div')
            let headline = document.createElement('div')
            let author = document.createElement('div')
            let imgContainer = document.createElement('div')
            let img = document.createElement('img')
            let authorName = document.createElement('span')

         

            //create class list
            card.classList.add('card')
            headline.classList.add('headline')
            author.classList.add('author')
            imgContainer.classList.add('img-container')

            //create text content
            headline.textContent = element.headline;
            img.src = element.authorPhoto;
            authorName.textContent = 'By ' + element.authorName

            //append
            cardContainer.appendChild(card)
            card.appendChild(headline)
            card.appendChild(author)
            author.appendChild(imgContainer)
            imgContainer.appendChild(img)
            author.appendChild(authorName)

            //headline 
            let headlinecard = document.querySelector('.headline');
    headlinecard.addEventListener('click', (event) => {
        headlinecard.textContent = console;
    })

        });
    }
    
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(res => Cards(res.data.articles));