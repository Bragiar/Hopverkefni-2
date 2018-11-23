import el from './helpers';

const jsonData = '../../lectures.json';
let i;
function createCards(data) {
  const lectures = document.querySelector('.lectures');
  const [{
    slug, title, category, thumbnail,
  }] = data;
  const container = el('div');
  container.classList.add('lecture');
  container.addEventListener('click', slug(slug));
  lectures.appendChild(container);
  const imgdiv = el('div');
  imgdiv.classList.add('lecture__image');
  container.appendChild(imgdiv);
  const img = el('img');
  img.classList.add('image');
  img.setAttribute('src', thumbnail);
  imgdiv.appendChild(img);
  const info = el('div');
  info.classList.add('lecture__info');
  container.appendChild(info);
  const infoCategory = el('div', category);
  infoCategory.classList.add('.lecture__info--category');
  info.appendChild(infoCategory);
  const infoTitle = el('div', title);
  infoCategory.classList.add('.lecture__info--category');
  info.appendChild(infoTitle);
  const infoCheck = el('div', '✓');
  infoCheck.classList.add('lecture__info--check', 'hidden');
  info.appendChild(infoCheck);
}
function loadCards(json) {
  for (i = 0; i < json.length; i += 1) {
    createCards(json[i]);
  }
}

export default function fetchData() {
  fetch(jsonData)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Villa kom upp');
    })
    .then((data) => {
      loadCards(data.lectures);
    })
    .catch((error) => {
      console.error(error);
    });
}
