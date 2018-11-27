
import List from './lib/list';
import initPage from './lib/content';
import initButtons from './lib/filter';

/**
 * Finnur hvora síðuna maður er á og sækir gögn
 * í samræmi við það
 */

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  if (isLecturePage) {
    initPage();
  } else {
    const list = new List();
    list.load();
    initButtons();
  }
});
