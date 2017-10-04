
// xmlhttp request
const request = new XMLHttpRequest()

// function to get all data from url
const getAllData = () => {

  request.open('GET', 'http://localhost:3143/persons', true)
  // console.log('REQ ::; ', request);
  request.onerror = () => {
    console.log('An error has ocurred ::; ', request);
    // alert('Error')
  }
  request.onload = () => {
    ( request.status >= 200 &&
      request.status < 400 )
      // && JSON.parse(request.responseText).status != 'fail')
      ? successReqParse(request.responseText)
      : showErrorReq(request)

      // console.log(request)
      logReq(request)
  }
  request.send()
}

const getData = (id) => {

  const url = 'http://localhost:3143/persons'
  request.open('GET', url + '/' + id, true)

  request.onload = () => {
    ( request.readyState == 4 && request.status >= 200 )
      ? successReqParse(request.responseText)
      : showErrorReq(request)

      // console.log(request)
      logReq(request)
      // const user = request.responseText
      // console.log('request ::; ', request)
      // console.log('request.responseText ::; ', user)
  }
  console.log('request ::; ', request)

  request.send()
}

const postData = (data) => {

  // const data = {}
  request.open('POST', 'http://localhost:3143/persons', true)

  request.setRequestHeader('Content-Type', 'application/json')

  request.onreadystatechange = () => {
    ( request.readyState == 4 && request.status >= 200 )
      const user = request.responseText

      console.log('request.responseText ::; ', user)
      console.log('onreadystatechange.data ::; ', data)
      console.log('request ::; ', request)
  }
  console.log('data ::; ', data)
  console.log('request ::; ', request)

  request.send(JSON.stringify(data))
}

const putData = (id, data) => {

  const url = 'http://localhost:3143/persons'
  request.open('PUT', url + '/' + id, true)

  request.setRequestHeader('Content-Type', 'application/json')

  request.onload = () => {
    ( request.readyState == 4 && request.status >= 200 )
      const user = request.responseText
      console.log('onload.data ::; ', data)
      console.log('request ::; ', request)
      console.log('request.responseText ::; ', user)
  }
  console.log('data ::; ', data)
  console.log('request ::; ', request)

  request.send(JSON.stringify(data))
}

const deleteData = (id) => {

  const url = 'http://localhost:3143/persons'
  request.open('DELETE', url + '/' + id, true)

  request.onload = () => {
    ( request.readyState == 4 && request.status >= 200 )
      const user = request.responseText
      console.log('request ::; ', request)
      console.log('request.responseText ::; ', user)
  }
  console.log('request ::; ', request)

  request.send()
}

// event click
const useClick = 'click'

// function add event listener to element
const addEventTo = (el, event, run) => {
  console.log('EL ::; ', run)
  el.addEventListener(event, run)
}

// function get element by its id
const elementId = (id) => document.getElementById(id)

// function to get value from element with the id
const getValueElementId = (id) => elementId(id).value

const buttonShowList = addEventTo(elementId('showList'), useClick, getAllData)

// function to get data and parse to json
const getDataParse = (data) => JSON.parse(data)

// function to get data and stringfy
const getDataStringify = (data) => JSON.stringify(data)

const successReqParse = (data) => {
  const result = getDataParse(data)
  console.log('successReqParse.RESULT ::; ', result);
}

const successReqStringify = (data) => {
  const result = getDataStringify(data)
  console.log('successReqStringify.RESULT ::; ', result);
}

const showErrorReq = (data) => console.log('showErrorReq.ERROR ;;: ', data)

const logReq = (data) => {
  console.log('logReq.LOG ::; ', data)
  console.log('logReq.LOG ::; ', JSON.parse(data.responseText))
}
