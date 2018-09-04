import Search from './search'
import formatResults from './format_recipes'

const searchField = $('#search_field')
const recipesElement = $('#recipes-list')
const nextPrevPageButtons = $('.page_button')
let timeout

const processSearchResult = (searchPromise) => {
  searchPromise
  .then((recipes) => formatResults(recipes))
  .then((items) => recipesElement.html(items))
  .catch((err) => console.error(err))
}

const handleNewSearch = () => {
  const query = searchField.val()
  processSearchResult(Search.new({ query, page: 1 }))
}

const searchFromQueryString = () => {
  searchField.val(Search.params().query)
  processSearchResult(Search.fromQueryString())
}


/**
 * DOM binding starts here.
 */
searchField.keypress(function() {
  window.clearTimeout(timeout)
  timeout = window.setTimeout(handleNewSearch, 300)
})

nextPrevPageButtons.click(function() {
  const addition = parseInt($(this).data('add'), 10)
  processSearchResult(Search.newPage(addition))
})

$(window).on('popstate', searchFromQueryString);
searchFromQueryString()
