import Api from './api'
import formatResults from './format_recipes'

const searchField = $('#search_field')
const recipesElement = $('#recipes-list')
let timeout

const processSearch = (search) => () => {
  Api.fetch(search)
  .then((recipes) => formatResults(recipes))
  .then((items) => recipesElement.html(items))
  .catch((err) => console.error(err))
}

searchField.keyup(function() {
  const search = $(this).val()
  window.clearTimeout(timeout)
  timeout = window.setTimeout(processSearch(search), 300)
})
