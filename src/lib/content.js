import {el} from './helpers';

const jsonData = '../../lectures.json';
const contentDiv = document.querySelector('.content');


export function initPage() {
  const slug = window.location.search.substring(1).split("=")[1];
  console.log(slug);
  fetchData(slug);
}

function createContent(data, newSlug) {
  console.log(data);
  let i;
  for (i = 0; i < data.lectures.length; i += 1) {
    if (data.lectures[i].slug === newSlug) {
      break;
    }
  }
  const {
    slug,
    title,
    category,
    image,
    thumbnail,
    content,
  } = data.lectures[i];
  const header = document.querySelector('.header');
  header.querySelector('.header__category').appendChild(el('p', category));
  header.querySelector('.header__title').appendChild(el('p', title));
  if(typeof image === 'undefined' || `${image}` === '/img/code3.jpg'){
    console.log('engin mynd');
    header.style.backgroundColor= '$Grey';
  } else {
  header.style.backgroundImage = 'url(../' + `${image}` + ')';
  }
    for(let i = 0; i<content.length; i += 1) {
      elementBuilder(content[i]);
    }
}

function elementBuilder(array)  {
  if (array.type === 'youtube') {
    const video = contentDiv.appendChild(el('iframe'));
    video.classList.add('content__video');
    video.setAttribute('src', `${array.data}`);
    video.setAttribute('frameborder', '0');
    video.setAttribute('allowfullscreen', '0');
  } else if (array.type === 'text') {
    contentDiv.appendChild(el('p', `${array.data}`)).classList.add('content__text');
  } else if (array.type === 'quote') {
    const quote = contentDiv.appendChild(el('blockquote', `${array.data}`));
    quote.classList.add('content__quote');
    quote.appendChild(el('cite', `${array.attribute}`));
  } else if (array.type === 'image') {
    const figure = contentDiv.appendChild(el('figure'));
    figure.appendChild(el('img')).setAttribute('src', `${array.data}`);
    figure.appendChild(el('figcaption', `${array.caption}`));
  } else if (array.type === 'heading') {
    contentDiv.appendChild(el('h2', `${array.data}`));
  } else if (array.type === 'list') {
    const list = contentDiv.appendChild(el('ul'));
    for (let i = 0; i < array.data.length; i += 1) {
      list.appendChild(el('li', `${array.data[i]}`));
    }
  } else if (array.type === 'code') {
    contentDiv.appendChild(el('code', `${array.data}`));
  }
}

function fetchData(slug) {
  fetch(jsonData)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Villa kom upp');
    })
    .then((data) => {
      createContent(data, slug);
    })
    .catch((error) => {
      console.error(error);
    });
}