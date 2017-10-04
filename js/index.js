
const getELementId = (id) => document.getElementById(id);
const qrSelectorAll = (id) => document.querySelectorAll(id);

const getElementValue = (id) => getELementId(id).value;

const addEventTo = (el, ev, run) => el.addEventListener(ev, run);


const gameDetail = () => {

  const gTitle =  getElementValue('game_title');
  console.log('game_title ::; ', gTitle);

  const gSite = getElementValue('game_website');
  console.log('game_website ::; ', gSite);

  const result = [];
  const gCategory = qrSelectorAll('select > option');
  for( let i = 1; i < gCategory.length; i++) {
    const oCategory = gCategory[i];

    if(oCategory.selected === true) {

      result.push(oCategory.value)

    }
  }
  console.log('result ::; ', result)
}

const submitGameDetail = addEventTo(getELementId('game_submitGameDetail'), 'click', gameDetail)
