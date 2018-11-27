import { el } from './helpers';
import { save, checkIfDone } from './storage';

const jsonData = '../../lectures.json'; //  slóðin á JSON skrána
const contentDiv = document.querySelector('.content'); // Elementið fyrir fyrirlestrargögn
const doneButton = document.querySelector('.lctButtons__done'); //  Takki þegar maður klárar fyrirlestur
let newSlug; //  Heitið á fyrirlestrinum sem á að setja upp
/**
 * Setur upp ákveðinn fyrirlestur á síðunni
 *
 * @param {Array} array Fylki með gögn úr ákveðnum fyrirlestri
 */


function elementBuilder(array) {
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
    if (typeof array.caption !== 'undefined') {
      figure.appendChild(el('figcaption', `${array.caption}`));
    }
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
/**
 * Leitar í fyrirlestrunum að rétta fyrirlestrinum sem á að setja upp
 * Kallar svo á elementBuilder með réttum fyrirlestri
 *
 * @param {Array} data Fylki með öllum fyrirlestrunum
 * @param {String} _newSlug  // Heitið á fyrirlestrinum se má að setja upp
 */


function createContent(data, _newSlug) {
  let i;
  for (i = 0; i < data.lectures.length; i += 1) {
    if (data.lectures[i].slug === _newSlug) {
      break;
    }
  }
  const {
    // slug,
    title,
    category,
    image,
    // thumbnail,
    content,
  } = data.lectures[i];
  const header = document.querySelector('.header');
  header.querySelector('.header__title').appendChild(el('p', category));
  header.querySelector('.header__title').appendChild(el('h2', title));
  if (typeof image === 'undefined' || `${image}` === '/img/code3.jpg') {
    header.style.backgroundColor = '$Grey';
  } else {
    header.style.backgroundImage = `url(../${image})`;
  }
  for (let k = 0; k < content.length; k += 1) {
    elementBuilder(content[k]);
  }
}
/**
 * Skoðar hvort það sé nú þegar búið að klára fyrirlestur
 * þegar ýtt er á "klára fyrirlestur" takkann
 *
 */

function done() {
  if (checkIfDone(newSlug)) {
    save(newSlug, false);
    doneButton.innerHTML = 'Klára fyrirlestur';
    doneButton.classList.toggle('lctButtons--done');
  } else {
    save(newSlug, true);
    doneButton.innerHTML = '✓ Fyrirlestur kláraður';
    doneButton.classList.toggle('lctButtons--done');
  }
}
/**
 * Sækir fyrirlestrargögnin úr JSON og kallar á createContent með réttum
 * fyrirlestri
 * @param {String} slug Heitið á fyrirlestri sem á að setja upp
 *
 * Kallar á createContent með réttu heiti á fyrirlestri og öllum
 * fyrirlestrargögnum
 *
 */

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
/**
 * Setur upp síðuna, finnur slug-ið í URL-inu og kallar á fetchdata
 * Setur upp eventListenera og skoðar hvort fyrirlestur sé nú þegar
 * kláraður
 */

export default function initPage() {
  newSlug = window.location.search.substring(1).split('=')[1]; /* eslint-disable-line */
  console.log(newSlug);
  fetchData(newSlug);
  doneButton.addEventListener('click', done);
  if (checkIfDone(newSlug)) {
    doneButton.innerHTML = '✓ Fyrirlestur kláraður';
    doneButton.classList.toggle('lctButtons--done');
  }
}
