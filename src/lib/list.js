import { empty, el } from './helpers';


export default class List {
  constructor() {
    this.container = document.querySelector('.lectures');
    this.json = '../../lectures.json';
  }

  load() {
    empty(this.container);
    console.log('komst i list');
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
        this.loadCards(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }


  createCards(data) {
    const {
      slug, title, category, thumbnail,
    } = data;
    console.log(slug, title, category, thumbnail);
    const container = el('div');
    container.classList.add('lecture');
    //container.addEventListener('click',loadCards);
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
    this.container.appendChild(container);
  }

  loadCards(json) {
    console.log(json);
    for(let i = 0; i < json.lectures.length; i++) {
      console.log(json.lectures);
      this.createCards(json.lectures[i]);
    }
  }
}
