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

// Start Eva's Code //
toyCollection = document.querySelector('#toy-collection');

// Fetch info
fetch('http://localhost:3000/toys/')
  .then(response => response.json())
  // .then(data => console.log(data));
  .then(function (data) {
    data.forEach((toyObj) => {
      renderToy(toyObj);
    })
  })

function renderToy(toyObj) {
  // Create card
  const card = document.createElement('div');
  card.className = 'card';

  // Create inner card elements
  const name = document.createElement('h2');
  name.innerText = toyObj.name;

  const pic = document.createElement('img');
  pic.className = 'toy-avatar';
  pic.src = toyObj.image;

  const likes = document.createElement('p');
  likes.innerText = (`${toyObj.likes} likes`);

  const likeBtn = document.createElement('button');
  likeBtn.className = 'like-btn';
  likeBtn.setAttribute('id', toyObj.id);
  likeBtn.innerText = 'like ❤';

  // append elements to card
  card.append(name, pic, likes, likeBtn);

  // append card to DOM
  toyCollection.append(card);
}

// Add a New Toy

// Form input
const createToyForm = document.querySelector('.add-toy-form');
createToyForm.addEventListener('submit', fetchNewToy);

function fetchNewToy(toyObj) { // can I use toyObj not event?
  event.preventDefault();
  fetch('http://localhost:3000/toys', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Accept: "applcation/json"
    },
    body: JSON.stringify({
      "name": toyObj.name,
      "image": toyObj.image,
      "likes": 0
    })
  })
    .then(data => data.json())
    .then(response => console.log(response));
    // .then(response => renderNewToy(response));

function renderNewToy(toyObj) {
  // Create card
  const card = document.createElement('div');
  card.className = 'card';

  // Create inner card elements
  const name = document.createElement('h2');
  name.innerText = event.target.children[1].value;

  const pic = document.createElement('img');
  pic.className = 'toy-avatar';
  pic.src = event.target.children[3].value;

  const likes = document.createElement('p');
  likes.innerText = (`0 likes`); // EDIT?

  const likeBtn = document.createElement('button');
  likeBtn.className = 'like-btn';
  likeBtn.setAttribute('id', toyObj.id);
  likeBtn.innerText = 'like ❤';
  console.log(likeBtn);

  // append elements to card
  card.append(name, pic, likes, likeBtn);

  // append card to DOM
  toyCollection.append(card);
}
// //// Increase a Toy's Likes
// likeBtn.addEventListener('click', addLike)

// const likeUrl = 'http://localhost:3000/toys/:id';
// const likeObj = {
//   headers:
//   {
//     "Content-Type": "application/json",
//     Accept: "applcation/json"
//   },

//   body: JSON.stringify({
    // "name": toyObj.name,
    // "image": toyObj.image,
    // "likes": 0
//   }),
//   method: 'PATCH'
// };

// const toyId = toyObj.id;
// console.log(toyId);

// function addLike(event) {
//   event.preventDefault()
//   fetch(likeUrl, likeObj)
//     .then(data => return data.json())
//     .then(response => { console.log(response) })

}