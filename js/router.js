const VIEW_WRAPPER_ID = 'view'
const views = [
  {
    path: 'page1.html',
    route: 'page1'
  },
  {
    path: 'page2.html',
    route: 'page2'
  },
  {
    path: 'page3.html',
    route: 'page3'
  }
]

const getViewByType = ( type ) => ( view ) => {
  let o = document.createElement("object")
  o.data = view.path
  o.type = type
  return o
}

const getViewHTML = getViewByType('text/html')

const toViews = (views) => ( obj, view, i ) => {
  console.log('------------------------------------');
  console.log(obj);
  console.log('------------------------------------');
  const o = {
    [views[i].route]: view
  }
  return Object.assign( obj, o )
}

const myViews = views.map(getViewHTML).reduce(toViews(views), {})

console.log('------------------------------------');
console.log('myViews: ', myViews);
console.log('------------------------------------');

// myViews.forEach( view => {
//   const div = document.createElement("div")
//   div.appendChild(view);
//   console.log('------------------------------------');
//   console.log('div', div);
//   console.log('------------------------------------');
//   document.body.appendChild(div);
// })


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

const hideViews = ( views ) =>
  views.forEach(function(element) {
    element.classList.add('hide');
  }, this);

const changeRoute = (evt) => {
  const url = evt.toElement.dataset.url
  // console.log('------------------------------------');
  // console.log(evt.toElement.dataset.url);
  // console.log(url);
  // console.log('------------------------------------');
  // hideViews(qrSelectorAll('.view'))
  changeURL(url + '.html')
  // changeViewByClass('view', 'view0')
<<<<<<< HEAD


=======
  
  getELementId(VIEW_WRAPPER_ID).innerHTML = ''
  getELementId(VIEW_WRAPPER_ID).appendChild(myViews[url])
  
>>>>>>> d038e407bbc1dab0936c46c8579c1e15b02fd18e
  // qrSelectorAll('.view').forEach(function(element) {
  //   element.classList.add('hide');
  // }, this);

<<<<<<< HEAD
  getELementId(url).classList.remove('hide');

=======
  // getELementId(url).classList.remove('hide');
  
>>>>>>> d038e407bbc1dab0936c46c8579c1e15b02fd18e
}
// const buttonChangeRoute = addEventTo(getELementId('changeRoute'), 'click', changeRoute)
// }


const addEventsTo = (els, ev, run) =>
  els.forEach(function(element) {
    element.addEventListener(ev,run,false);
  }, this);

const menu = addEventsTo(qrSelectorAll('.linkPage'), 'click', changeRoute)
