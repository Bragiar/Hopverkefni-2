/**
 * Sækir og vistar í localStorage
 */

// Fast sem skilgreinir heiti á lykli sem vistað er undir í localStorage
const LOCALSTORAGE_KEY = 'lectures_done';

/**
 * Sækir gögn úr localStorage. Skilað sem röðuðum lista á forminu:
 * { lecture: <name>, done: <true|false> }
 *
 * @returns {array} Raðað fylki af svörum eða tóma fylkið ef ekkert vistað.
 */
export function load() {
  const arrayData = JSON.parse(window.localStorage.getItem(LOCALSTORAGE_KEY));
  return arrayData;
}

/**
 * Vistar fyrirlestur
 *
 * @param {string} _lecture Nafn fyrirlesturs þess sem á að vista
 * @param {boolean} _done true ef búið er að lesa fyrirlestur annars false
 */
export function save(_lecture, _done) {
  const newLecture = {
    lecture: _lecture,
    done: _done,
  };
  const arrayData = window.localStorage.getItem(LOCALSTORAGE_KEY);
  if (arrayData === null) {
    const arrayData1 = [newLecture];
    window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(arrayData1));
  } else {
    const data = JSON.parse(arrayData);
    let ifNotDone = true;
    for (let i = 0; i < data.length; i += 1) {
      if (_lecture === data[i].lecture) {
        data[i].done = _done;
        ifNotDone = false;
        break;
      }
    }
    if (ifNotDone) {
      data.push(newLecture);
    }
    window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
  }
}
/**
 * Skoðar hvort fyrirlestur er þegar búinn
 *
 * @param {string} slug nafn á fyrirlestri
 *
 * @returns {boolean} true ef fyrirlestur er nú þegar búinn, annars false
 */

export function checkIfDone(slug) {
  const arrayData = window.localStorage.getItem(LOCALSTORAGE_KEY);
  if (arrayData === null) {
    return false;
  }
  const data = JSON.parse(arrayData);
  for (let i = 0; i < data.length; i += 1) {
    if (slug === data[i].lecture && data[i].done === true) {
      return true;
    }
  }
  return false;
}
