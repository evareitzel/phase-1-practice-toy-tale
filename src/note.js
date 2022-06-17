let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
      toyFormContainer.addEventListener('submit', (event) => {
        event.preventDefault();
      }, 
      addNewToy())
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

//// Add Your Code 

// Create Toy Cards
toyCollection = document.querySelector('#toy-collection'); 
// console.log(toyCollection);
// const card = document.createElement('div');
// card.setAttribute('class', 'card');

fetch('http://localhost:3000/toys/')
.then(response => response.json())
// .then(data => console.log(data));
.then(function (data) {
  data.forEach((toyObj) => {
    // console.log(toyObj);
    renderToy(toyObj); // writing code we don't have yet
  })
});

function renderToy(toyObj){
  // axn items
    // create card
    // create inner card elements (h2, p, button, img)
    // append elements to card
    // append card to DOM
  const card = document.createElement('div');
  card.className = 'card';
  // console.log(card);
  toyCollection.append(card);
  
  const title = document.createElement('h2');
  card.append(title);
  title.innerText = toyObj.name;

  const photo = document.createElement('img'); 
  photo.src = toyObj.image;
  photo.className = 'toy-avatar';
  card.append(photo);
  
  const likesString = document.createElement('p')
  card.append(likesString);
  likesString.innerText = (toyObj.likes + ' likes');
  // console.log(likesString);
  
  button = document.createElement('button'); 
  button.className = 'like-btn';
  button.setAttribute('id', 'id'); //  toyObj.id
  button.innerText = 'like ❤️';
  card.append(button);
}

//// Add a New Toy

// Post request > http://localhost:3000/toys
// no reloading page (toy should be added to DOM)
// 2 args - 2nd obj
  // obj - specify method as POSR and provide JSON headers and body


// Tweak form variable
const createToyForm = document.querySelector('.add-toy-form') // grab form
createToyForm.addEventListener('submit', fetchNewToy)

function fetchNewToy(event) {//fetch(newToyUrl, newToyObj)
  event.preventDefault();
  // debugger;
  event.target.children[1].value // name
  event.target.children[3].value // img url
  //start likes at 0

  // fetch('http://localhost:3000/toys', {
  //   method: 'POST',
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "applcation/json"
  //   },
  //   body: JSON.stringify({
  //     "name": toyObj.name,
  //     "image": toyObj.image,
  //     "likes": toyObj.likes
  //   })
  // })
  //   .then(data => { return data.json })
  //   .then(response => { console.log(response) }) // chain to renderNewToy function (for?)
}




const createToy = document.querySelector('.submit')
  console.log(createToy);
  createToy.addEventListener('click', addNewToy)

  function addNewToy(toyObj){
  fetch('http://localhost:3000/toys'), {
    method: 'POST'  
    headers:
      {
        "Content-Type": "application/json",
        Accept: "applcation/json"
      },
      body: JSON.stringify({
        "name" = toyObj.name,
        "image" = toyObj.image,
        "likes" = toyObj.likes
        // "name": "Jessie",
      // "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
      // "likes": 0
    }),
  
};

fetch(newToyUrl, newToyObj)
.then(data => {return data.json})
.then(response => {console.log(response)})
}

// render toy
// append new toy

function renderNewToy (toyObj) {
  // create card
  // create inner card elements
  // append elements to card
  // append card to DOM
}




//// Increase a Toy's Likes

button.addEventListener('click', addLike)

const likeUrl = 'http://localhost:3000/toys/:id';
const likeObj = {
  headers: 
  {
    "Content-Type": "application/json",
    Accept: "applcation/json"
  },
  
  body: JSON.stringify({
    "name": "Jessie",
    "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
    "likes": 0
  }),
  method: 'PATCH'
};

const toyId = toyObj.id;
console.log(toyId);

function addLike(event){
  event.preventDefault() // placement?
  fetch(likeUrl, likeObj)
  .then(data => {return data.json})
  .then(response => {console.log(response)})
  
}




// img.className = 'toy-avatar';

// card.append('button')
// button.className = 'like-btn';
// button.ID = '[toy_id]'

// make a div w .card from response data
  // add to toy-collection div

// ea card should have child elements:
  // h2 - toy name
  // img tag - src img, class name 'toy-avatar'

  // p - num likes
  // btn tag - class like-btn, attribute set to toy's id num
