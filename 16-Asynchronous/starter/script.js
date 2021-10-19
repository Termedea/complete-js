'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const renderPost = function (data, className = '') {
  console.log(data);

  const html = `
  <article class="country ${className}">   
    <div class="country__data">
      <h3 class="country__name">${data.title}</h3>
      <p class="country__row">${data.body}</p>
    
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getPosts = id => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(data => {
      renderPost(data);
    });
};

getPosts(1);
