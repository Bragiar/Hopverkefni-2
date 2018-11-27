import { empty, el } from './helpers';
import { load } from './storage';

/**
 * Hleður inn nýju URL með réttu fyrirlestrarheiti og fer með mann á
 * síðu fyrir fyrirlestur sem var ýtt á
 *
 * @param {string} e event þegar ýtt er á fyrirlestur
 */
function lecturePage(e) {
  const newURL = `fyrirlestur.html?slug=${e.currentTarget.myslug}`;
  window.location.assign(newURL);
}

/**
 * Skoðar í localStorage hvort fyrirlestur sé búinn
 * Ef búinn þá er sett grænt "check" merki á fyrirlesturinn
 *
 * @param {string} slug nafn á fyrirlestri
 * @param {Element} check check merki á fyrirlestri
 *
 */

function checkIfDone(check, slug) {
  const lectureArray = load();
  if (lectureArray !== null) {
    for (let i = 0; i < lectureArray.length; i += 1) {
      if (slug === lectureArray[i].lecture && lectureArray[i].done === true) {
        check.classList.remove('hidden');
      }
    }
  }
}

/**
*
* Útbúa listann með öllum fyrirlestrunum
*
*/

export default class List {
  constructor() {
    this.container = document.querySelector('.lectures');
    this.json = '../../lectures.json';
  }

  /**
   * Hleður inn fyrirlestrunum
   */
  load() {
    empty(this.container);
    this.fetchData();
  }
  /**
   * Sækir gögn í JSON skrá með öllum fyrirlestrum
   * @return {Error} ef villa kemur upp við að sækja JSON
   */

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

  /**
   * Býr til Element fyrir fyrirlestur og hleður hann upp í HTML
   *
   * @param {Array} data  gögn í hverjum fyrirlestri
   */


  createCards(data) {
    const {
      slug, title, category, thumbnail,
    } = data;
    const container = el('div');
    container.classList.add('lecture', `${category}`);
    container.myslug = slug;
    container.addEventListener('click', lecturePage, false);
    this.container.appendChild(container);
    const imgdiv = el('div');
    imgdiv.classList.add('lecture__image');
    container.appendChild(imgdiv);
    if (typeof thumbnail === 'undefined') {
      imgdiv.style.backgroundColor = '#aaa';
      imgdiv.classList.add('noThumb');
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
    checkIfDone(infoCheck, slug);
    info.appendChild(infoCheck);
    this.container.appendChild(container);
  }

  /**
   * Tekur inn JSON skrána með öllum fyrirlestrum og kallar á createCards
   * fyrir hvern og einn
   *
   * @param {Array} json Fylki með öllum fyrirlestrum
   */
  loadCards(json) {
    for (let i = 0; i < json.lectures.length; i += 1) {
      this.createCards(json.lectures[i]);
    }
  }
}
