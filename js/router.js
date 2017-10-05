
const getELementId = (id) => document.getElementById(id);
const qrSelectorAll = (id) => document.querySelectorAll(id);

const getElementValue = (id) => getELementId(id).value;

const addEventTo = (el, ev, run) => el.addEventListener(ev, run);


const hide = ( element ) => element.style.display = 'none'

const changeURL = ( url ) => history.pushState(null, null, url);

const changeView = ( viewOld, viewNew ) => {
  getELementId(viewOld).classList.add('hide')
  getELementId(viewNew).classList.remove('hide')
}
// const btn = document.getElementById('changeRoute')


const changeViewByClass = ( viewOld, viewNew ) => {
  getELementId(viewOld).classList.add('hide')
  getELementId(viewNew).classList.remove('hide')
}

const changeRoute = (evt) => {
  const url = evt.toElement.dataset.url + '.html'
  console.log('------------------------------------');
  console.log(evt.toElement.dataset.url);
  console.log(url);
  console.log('------------------------------------');
  changeURL(url)
  // changeViewByClass('view', 'view0')
  
  
  qrSelectorAll('.view').forEach(function(element) {
    element.classList.add('hide');
  }, this);

  getELementId(evt.toElement.dataset.url).classList.remove('hide');
  
}
// const buttonChangeRoute = addEventTo(getELementId('changeRoute'), 'click', changeRoute)
// }


const addEventsTo = (els, ev, run) => 
  els.forEach(function(element) {
    element.addEventListener(ev,run,false);
  }, this);

const menu = addEventsTo(qrSelectorAll('.linkPage'), 'click', changeRoute)
