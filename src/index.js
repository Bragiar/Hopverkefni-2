import List from './lib/list';
import fetchData from './lib/fyrirlestur.js';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  if (isLecturePage) {
<<<<<<< HEAD
    initPage();
=======

>>>>>>> ada86c7d183d2c2ad91f73f37dd363662bfc9050
  } else {
    const list = new List();
    list.load();
  }
});
