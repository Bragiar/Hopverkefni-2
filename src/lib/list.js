import { empty, el } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.lectures');
    this.json = '../../lectures.json';
  }

  load() {
    empty(this.container);
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
    const container = el('div');
    container.classList.add('lecture', `${category}`);
    container.myslug = slug;
    container.addEventListener('click', this.lecturePage, false);
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
    for (let i = 0; i < json.lectures.length; i +=1 ) {
      this.createCards(json.lectures[i]);
    }
  }

  lecturePage(e) {
  console.log("ýtt á: ", e.currentTarget.myslug);
  const url = window.location.href;
  console.log(url);
  const newURL = `${url}` + 'fyrirlestur.html?slug=' + `${e.currentTarget.myslug}`;
  console.log(newURL);
  window.location.assign(newURL);
  //window.location.reload(true);
  }

}
