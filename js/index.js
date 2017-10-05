
const getELementId = (id) => document.getElementById(id);
const qrSelectorAll = (id) => document.querySelectorAll(id);

const getElementValue = (id) => getELementId(id).value;

const addEventTo = (el, ev, run) => el.addEventListener(ev, run);

const urlApi = 'http://localhost:9099/games';

const hide = ( element ) => element.style.display = 'none'

// hide( document.getElementById('header') )

const getAllData = async () => {

  const response = await fetch(urlApi);
  console.log('fetch.get.response ::; ', response);
  const json = await response.json();
  console.log('fetch.get.json ::; ', json);

  // fetch('http://localhost:9099/games')
  //   .then(function(response) {
  //     console.log('response ::; ', response)
  //     return response.json()
  //   }).then(function(json) {
  //     console.log('parsed json ::; ', json)
  //   }).catch(function(ex) {
  //     console.log('parsing failed ex ::; ', ex)
  //   })

}


const postData = async (data) => {
  // data = { title: 'gTitle', website: 'gSite', genre: ['result', 'resultt'] }
  // console.log(data);

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
  changeRoute()
  // fetch('http://localhost:9099/games', options)
  //   .then(function(response) {
  //     console.log('response ::; ', response)
  //     return response.json()
  //   }).then(function(json) {
  //     console.log('parsed json ::; ', json)
  //   }).catch(function(ex) {
  //     console.log('parsing failed ex ::; ', ex)
  //   })

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

const changeURL = ( url ) => history.pushState(null, null, url);

const changeView = ( viewOld, viewNew ) => {
  getELementId(viewOld).classList.add('hide')
  getELementId(viewNew).classList.remove('hide')
}
// const btn = document.getElementById('changeRoute')

const changeRoute = (evt) => {
  // changeURL('teste-novo.html')
  // changeView('view1', 'view0')
  console.log('------------------------------------');
  console.log(evt);
  console.log('------------------------------------');
  
}
// const buttonChangeRoute = addEventTo(getELementId('changeRoute'), 'click', changeRoute)
const linkPage =document.querySelectorAll('.linkPage');
for(var i=0;i<linkPage.length;i++){
  linkPage[i].addEventListener('click',callback,false);
}

const menu = addEventTo(qrSelectorAll('.linkPage'), 'click', changeRoute)

const submitGameDetail = addEventTo(getELementId('gameButton'), 'click', gameDetail)
const buttonShowGames = addEventTo(getELementId('showGames'), 'click', getAllData)
const buttonPostGames = addEventTo(getELementId('postGames'), 'click', postData)
