/**
 * Abstracts RecipePuppy's API
 * @see http://www.recipepuppy.com/about/api/
 */
const Api = {}

Api.url = "http://www.recipepuppy.com/api/?"

/**
 * @param {String} search - Will be used to perform a "Normal search query"
 * @param {Integer} page - Page number for pagination
 */
Api.createRequestUrl = (search, page) => (
  encodeURIComponent(`${url}q=${search}&p=${page}`)
)

/**
 *
 * @param {String} search - User's search term
 * @returns
 */
Api.fetch = (search, page = 1) => (
  fetch(Api.createRequestUrl(search, page))
  .then((resp) => resp.json())
)

export default Api
