/**
 * Abstracts RecipePuppy's API
 * @see http://www.recipepuppy.com/about/api/
 */
const Api = {}

Api.url = "/search"

/**
 * Formats an URL to request
 *
 * @param {String} query - Used to perform a "Normal search query"
 * @param {Integer} page - Page number for pagination
 */
Api.createRequestUrl = (query, page) => (
  [Api.url, '?query=', query, '&page=', page].join("")
)

/**
 * Make a request to the API
 *
 * @param {String} query - User's search term
 * @param {number} page - Page number
 * @returns
 */
Api.fetch = (query, page) => (
  fetch(Api.createRequestUrl(query, page))
  .then((resp) => resp.json())
)

export default Api
