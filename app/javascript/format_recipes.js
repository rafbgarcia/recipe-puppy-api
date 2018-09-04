const Templates = {}

Templates.searchRecipeItem =`
  <tr>
    <th class="p-0">
      <a href="{href}" class="media p-3" target="_blank">
        <img src="{thumbnail}" class="avatar avatar-lg rounded mr-4">
        <div class="media-body">
          <span class="h5 mb-0">{title}</span>
          <div>{ingredients}</div>
        </div>
      </a>
    </th>
    <td class="p-0">
      <a href="{href}" class="p-3 no-wrap" target="_blank">
        <strong class="text-dark">See recipe</strong>
      </a>
    </td>
  </tr>
`

Templates.searchRecipeDivider = `
  <tr class="table-divider"></tr>
`

const defaultThumbnail = "http://img.recipepuppy.com/9.jpg"

/**
 * @param {Array<Recipe>} recipes
 * @see types.js
 */
const formatRecipes = (recipes) => (
  recipes
  .map(({thumbnail, ...recipe}) => ({
    ...recipe,
    thumbnail: thumbnail || defaultThumbnail
  }))
  .map(formatRecipe)
  .join(Templates.searchRecipeDivider)
)

/**
 * @param {Recipe} recipe
 * @see types.js
 */
const formatRecipe = (recipe) => (
  Object
  .keys(recipe)
  .reduce((item, key) =>
    item.replace(new RegExp(`{${key}}`, 'g'), recipe[key]),
    Templates.searchRecipeItem
  )
)

export default formatRecipes
