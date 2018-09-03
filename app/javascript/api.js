/**
 * Abstracts RecipePuppy's API
 * @see http://www.recipepuppy.com/about/api/
 */
const Api = {}

Api.url = "/search"

/**
 * Formats an URL to request
 *
 * @param {String} search - Used to perform a "Normal search query"
 * @param {Integer} page - Page number for pagination
 */
Api.createRequestUrl = (search, page) => (
  [Api.url, '?q=', search, '&p=', page].join("")
)

/**
 * Make a request to the API
 *
 * @param {String} search - User's search term
 * @returns
 */
Api.fetch = (search, page = 1) => (
  fetch(Api.createRequestUrl(search, page))
  .then((resp) => resp.json())
)

export default Api
