import { empty, el } from './helpers';


export default class List {
  constructor() {
    this.container = document.querySelector('.lectures');
    this.json = '../../lectures.json';
  }

  load() {
    empty(this.container);
    console.log("komst i list");
    this.fetchData();
  }

  fetchData() {
    fetch(this.json)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Villa kom upp');
      })
      .then((data) => {
        console.log(data.lectures);
        this.loadCards(data.lectures);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  loadCards(json) {
    this.createCards(json[1]);
  }


  createCards(data) {

    if (data.length === 0) {
      // alert('Fann ekki lén');
      return;
    }

    const [{
      slug, title, category, thumbnail,
    }] = data;
    const container = el('div');
    container.classList.add('lecture');
    container.addEventListener('click', slug(slug));
    this.container.appendChild(container);
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
}
