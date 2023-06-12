module.exports = ({strapi}) => ({
  async exportRestaurants(query) {
    console.log("---exportRestaurants")
    return await strapi.entityService.findMany("api::restaurant.restaurant", query);
  },

  async uploadAndImport(data) {
    // Create entries using Strapi services and models
    // const {model} = strapi.db.query('api::restaurants.restaurants');
    const {model} = strapi.query('restaurants');
    console.log("model: ", model)
    // for (const entryData of data) {
    //   await model.create(entryData);
    // }

    return;
  },

  async exportAllData(query) {
    console.log("---exportAll")
    console.log("--strapi.admin.user: ", strapi.admin.user);

    let restaurants = await strapi.entityService.findMany("api::restaurant.restaurant", query);
    let categories = await strapi.entityService.findMany("api::category.category", query);
    console.log("restaurants: ", restaurants);
    console.log("categories: ", categories);
    console.log("--all data: ", [...restaurants, ...categories]);

    return [...restaurants, ...categories]
  },

});
