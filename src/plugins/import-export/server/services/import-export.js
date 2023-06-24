module.exports = ({strapi}) => ({
  async exportRestaurants(query) {
    console.log("---exportRestaurants")
    return await strapi.entityService.findMany("api::restaurant.restaurant", query);
  },

  async uploadAndImport(data) {
    // console.log("--all data object: ", data);

    const {'api::restaurant.restaurant': restaurants} = data
    const {'api::category.category': categories} = data

    // console.log("restaurants: ", restaurants);
    // console.log("categories: ", categories);

    //convert to array restaurants
    let restaurantsArr = Object.values(restaurants);
    console.log("--restaurantsArr: ", restaurantsArr);
    const createdRestaurants = await strapi.db.query("api::restaurant.restaurant").createMany({data: restaurantsArr});
    console.log("--createdRestaurants: ", createdRestaurants);


    //convert to array restaurants
    let categoriesArr = Object.values(categories);
    console.log("--categoriesArr: ", categoriesArr);
    const createdCategories = await strapi.db.query("api::category.category").createMany({data: categoriesArr});
    console.log("--createdCategories: ", createdCategories);

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
