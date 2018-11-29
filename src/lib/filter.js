

const HTMLbutton = document.querySelector('.HTML'); //  Takki til að sía út HTML fyrirlestra
const CSSbutton = document.querySelector('.CSS'); // Takki til að sía út CSS fyrirlestra
const JSbutton = document.querySelector('.JS'); //  Takki til að sía út JavaScript fyrirlestra

/**
 * Síar út rétta fyrirlestra þegar ýtt er á einhvern takka
 */

function filterItems() {
  const htmlUntoggled = HTMLbutton.classList.contains('untoggled');
  const cssUntoggled = CSSbutton.classList.contains('untoggled');
  const jsUntoggled = JSbutton.classList.contains('untoggled');

  const lectures = document.querySelector('.lectures');
  const children = lectures.children; /* eslint-disable-line*/
  if (htmlUntoggled && cssUntoggled && jsUntoggled) {
    for (let i = 0; i < children.length; i += 1) {
      const lecture = children[i];
      lecture.classList.remove('hidden');
    }
  } else {
    for (let i = 0; i < children.length; i += 1) {
      const lecture = children[i];

      if (lecture.classList.contains('html') && htmlUntoggled) {
        lecture.classList.add('hidden');
      } else if (lecture.classList.contains('html') && !htmlUntoggled) {
        lecture.classList.remove('hidden');
      }
      if (lecture.classList.contains('css') && cssUntoggled) {
        lecture.classList.add('hidden');
      } else if (lecture.classList.contains('css') && !cssUntoggled) {
        lecture.classList.remove('hidden');
      }
      if (lecture.classList.contains('javascript') && jsUntoggled) {
        lecture.classList.add('hidden');
      } else if (lecture.classList.contains('javascript') && !jsUntoggled) {
        lecture.classList.remove('hidden');
      }
    }
  }
}

/**
 * @param {Event} e event frá ákveðnum takka þegar er verið að
 * sía fyrirlestra
 *
 */
function filter(e) {
  e.target.classList.toggle('untoggled');
  filterItems();
}

/**
 * Setur upp EventListenera á síunartakkana
 */

export default function initButtons() {
  HTMLbutton.addEventListener('click', filter);
  CSSbutton.addEventListener('click', filter);
  JSbutton.addEventListener('click', filter);
}
