import Api from './api'

const searchField = $('#search_field')
const resultsElement = $('#results')
let timeout

const resultDividerTemplate = '<tr class="table-divider"></tr>'
const resultItemTemplate = `
  <tr>
    <th>
      <div class="media">
        <img src="{thumbnail}" class="avatar avatar-lg rounded mr-4">
        <div class="media-body">
          <span class="h5 mb-0">{title}</span>
          <div>{ingredients}</div>
        </div>
      </div>
    </th>
  </tr>
`

const processSearch = (search) => () => {
  Api.fetch(search)
  .then(({results}) => resultsElement.html(formatResults(results)))
  .catch((err) => console.error(err))
}

/**
 * @param {Array<Result>} results
 * @see types.js
 */
const formatResults = (results) => (
  results
  .map(formatResult)
  .join(resultDividerTemplate)
)

/**
 * @param {Result} result
 * @see types.js
 */
const formatResult = (result) => (
  Object
  .keys(result)
  .reduce((item, key) => item.replace(`{${key}}`, result[key]), resultItemTemplate)
)

searchField.keyup(function() {
  const search = $(this).val()
  window.clearTimeout(timeout)
  timeout = window.setTimeout(processSearch(search), 300)
})
