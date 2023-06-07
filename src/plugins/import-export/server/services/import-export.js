
module.exports = ({strapi}) => ({
  async exportRestaurants(query) {
    console.log("---exportRestaurants")
    return await strapi.entityService.findMany("api::restaurant.restaurant", query);
  },

  async importRestaurants(data) {


    return await strapi.entityService.createMany("api::restaurant.restaurant", data);
  },

  async exportAllData(query) {
    console.log("---exportAll")
    let restaurants = await strapi.entityService.findMany("api::restaurant.restaurant", query);
    let categories = await strapi.entityService.findMany("api::category.category", query);

    return {...restaurants,...categories}
  },

});
