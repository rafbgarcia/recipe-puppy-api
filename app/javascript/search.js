import Api from './api'

const pushState = (query, page) => {
  history.pushState(
    { query, page },
    'RecipeFinder',
    `/?query=${query}&page=${page}`
  )
}

const Search = {}

Search.new = ({ query, page }) => {
  pushState(query, page)
  return Api.fetch(query, page)
}

Search.newPage = (addition) => {
  const { query, page } = Search.params()
  let newPage = page + addition
  newPage = newPage < 1 ? 1 : newPage

  return Search.new({ query, page: newPage })
}

Search.fromQueryString = () => (
  Search.new(Search.params())
)

Search.params = () => {
  const params = new URLSearchParams(document.location.search)
  return {
    query: params.get('query') || '',
    page: parseInt(params.get('page'), 10) || 1,
  }
}

export default Search
