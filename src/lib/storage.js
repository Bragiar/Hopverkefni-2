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
    // todo útfæra
}

/**
 * Vista stig
 *
 * @param {string} name Nafn þess sem á að vista
 * @param {number} points Stig sem á að vista
 */
export function save(slecture, sdone) {
    const newLecture = {
      lecture: slecture,
      done: sdone,
    };
    const arrayData = window.localStorage.getItem(LOCALSTORAGE_KEY);
  if (arrayData === null) {
    const arrayData1 = [newLecture];
    window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(arrayData1));
  } else {
    const data = JSON.parse(arrayData);
    data.push(newLecture);
    window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
  }
  // todo útfæra
}