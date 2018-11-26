const HTMLbutton = document.querySelector('.HTML');
const CSSbutton = document.querySelector('.CSS');
const JSbutton = document.querySelector('.JS');

export default function initButtons() {
  HTMLbutton.addEventListener('click', filter);
  CSSbutton.addEventListener('click', filter);
  JSbutton.addEventListener('click', filter);
}

function filter(e) {
  console.log(e.target.classList);
  e.target.classList.toggle('untoggled');
  filterItems();
}

function filterItems() {
  const htmlUntoggled = HTMLbutton.classList.contains('untoggled');
  const cssUntoggled = CSSbutton.classList.contains('untoggled');
  const jsUntoggled = JSbutton.classList.contains('untoggled');

  const lectures = document.querySelector('.lectures');
  const children = lectures.children;
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
