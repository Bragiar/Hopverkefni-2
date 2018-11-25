import { empty, el } from './helpers';
import {load} from './storage';

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
    if(typeof thumbnail === 'undefined'){
      imgdiv.style.backgroundColor = '#aaa';
      console.log("ekkert thumbnail");
    } else {
     const img = el('img');
    img.classList.add('image');
    img.setAttribute('src', thumbnail);
    imgdiv.appendChild(img);
    }
    const info = el('div');
    info.classList.add('lecture__info');
    container.appendChild(info);
    const infotext = el('div');
    infotext.classList.add('lecture__text');
    info.appendChild(infotext);
    const infoCategory = el('div', category);
    infoCategory.classList.add('lecture__info__category');
    infotext.appendChild(infoCategory);
    const infoTitle = el('div', title);
    infoTitle.classList.add('lecture__info__title');
    infotext.appendChild(infoTitle);
    const infoCheck = el('div', '✓');
    infoCheck.classList.add('lecture__info__check', 'hidden');
    this.checkIfDone(infoCheck, slug);
    info.appendChild(infoCheck);
    this.container.appendChild(container);
  }

  loadCards(json) {
    for (let i = 0; i < json.lectures.length; i +=1 ) {
      this.createCards(json.lectures[i]);
    }
  }

  lecturePage(e) {
  const url = window.location.hostname;
  const newURL = 'fyrirlestur.html?slug=' + `${e.currentTarget.myslug}`;
  window.location.assign(newURL);
  //window.location.reload(true);
  }

  checkIfDone(check, slug){
    const lectureArray = load();
    if(lectureArray !== null){
      for (let i = 0; i < lectureArray.length; i += 1) {
        if(slug === lectureArray[i].lecture && lectureArray[i].done === true){
          check.classList.remove('hidden');
        }
      }
    }
  }
}
