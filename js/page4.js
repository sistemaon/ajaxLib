
const getELementId = (id) => document.getElementById(id);
const qrSelectorAll = (id) => document.querySelectorAll(id);

const getElementValue = (id) => getELementId(id).value;

const addEventTo = (el, ev, run) => el.addEventListener(ev, run);


const urlApi = 'http://localhost:9099/games';

const hide = ( element ) => element.style.display = 'none'

const getAllData = async () => {

  const response = await fetch(urlApi);
  console.log('fetch.get.response ::; ', response);
  const json = await response.json();
  console.log('fetch.get.json ::; ', json);

}

const changeURL = ( url ) => history.pushState(null, null, url);

const changeView = ( viewOld, viewNew ) => {
  getELementId(viewOld).classList.add('hide')
  getELementId(viewNew).classList.remove('hide')
}

const changeRoute = (url) => {
  // const url = evt.toElement.dataset.url + '.html'
  // console.log('------------------------------------');
  // console.log(evt.toElement.dataset.url);
  // console.log(url);
  // console.log('------------------------------------');
  changeURL(url)
  changeView('view1', 'view0')

}

const postData = async (data) => {

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }

  const response = await fetch(urlApi, options);
  console.log('fetch.post.response ::; ', response);
  const json = await response.json();
  console.log('fetch.post.json ::; ', json);

  // changeRoute('vaicaraio.html')


}

const gameDetail = (evt) => {

  const gTitle =  getElementValue('game_title');
  console.log('game_title ::; ', gTitle);

  const gSite = getElementValue('game_website');
  console.log('game_website ::; ', gSite);

  let data = {}
  const result = [];
  const gCategory = qrSelectorAll('select > option');
  for( let i = 1; i < gCategory.length; i++) {
    const oCategory = gCategory[i];

    if(oCategory.selected === true) {

      result.push(oCategory.value)

    }
  }

  data = { title: gTitle, website: gSite, genre: result }
  console.log('result ::; ', result)

  console.log('data ::; ', data)
  postData(data)
  evt.preventDefault()

}


const submitGameDetail = addEventTo(getELementId('submitGameForm'), 'submit', gameDetail)
