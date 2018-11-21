import el from './helpers.js'

const jsonData = '../../lectures.json';


function createContent(data, newSlug){
    console.log(data);
    let i;
    for (i=0; i<data.lectures.length; i++) {
        let lecture = data.lectures[i];
        if(lecture.slug === newSlug){
            break;
        }
    }
    const [{
        slug, title, category,
        image, thumbnail, content,
      }] = data.lectures[i];
    const header = document.querySelector('.header');
    header.querySelector('header__category').appendChild(el('p',category));
    header.querySelector('header__title').appendChild(el('p',title));
    const contentDiv = document.querySelector('.content');
}

function fetchData(slug) {
    fetch(jsonData)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Villa kom upp');
      })
      .then((data) => {
        createContent(data.lectures, slug);
      })
      .catch((error) => {
        console.error(error);
        });
 }