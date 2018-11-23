import List from './lib/list';
import initPage from './lib/content';

document.addEventListener('DOMContentLoaded', () => {
  const page = document.querySelector('body');
  const isLecturePage = page.classList.contains('lecture-page');

  if (isLecturePage) {
    console.log("fyrirlestrarsíða");
    initPage();
    
  } else {
    const list = new List();
    list.load();
  }
});
