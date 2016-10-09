
let LConstans = {

  ACTION_FETCH_LISTS_NAMES: 'FETCH_LISTS_NAMES',

  ACTION_RENDER_CREATE_LIST: 'ACTION_RENDER_CREATE_LIST',
  ACTION_RENDER_LISTS: 'ACTION_RENDER_LISTS',

  VIEW_LISTS: 'VIEW_LISTS',
  VIEW_CREATE_LIST: 'VIEW_CREATE_LIST',
  VIEW_SHARE_LIST: 'VIEW_SHARE_LIST'
}

let baseApiUrl = 'http://localhost:8080/api/'
let apiUrls = {
  FETCH_LISTS_NAMES: baseApiUrl + 'movies/lists'
}

export {apiUrls}
export default LConstans