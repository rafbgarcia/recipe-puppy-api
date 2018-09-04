import Api from './api'

const pushState = (query, page) => {
  history.pushState(
    { query, page },
    'RecipeFinder',
    `/?query=${query}&page=${page}`
  )
}

const Search = {}

/**
 * Search.new will push a new state to facilitate sharing a link
 * with friends for a particular search.
 *
 * @param {Object} params - query and page to search by
 */
Search.new = ({ query, page }) => {
  pushState(query, page)
  return Api.fetch(query, page)
}

/**
 * Fetches a new page for the same query and push a new state.
 *
 * @param {number} addition - Addition to the current page.
 */
Search.newPage = (addition) => {
  if (addition != -2 && addition != +2) {
    throw "Page must be an odd number, please specify an addition of +2 or -2 to add to the current page"
  }

  const { query, page } = Search.params()
  let newPage = page + addition
  newPage = newPage < 1 ? 1 : newPage

  return Search.new({ query, page: newPage })
}

/**
 * Fetches based on the current query and page.
 * Used when the page loads and back/forward browser buttons are clicked.
 */
Search.fromQueryString = () => {
  const { query, page } = Search.params()
  return Api.fetch(query, page)
}

/**
 * Get params from the query string.
 */
Search.params = () => {
  const params = new URLSearchParams(document.location.search)
  return {
    query: params.get('query') || '',
    page: parseInt(params.get('page'), 10) || 1,
  }
}

export default Search
