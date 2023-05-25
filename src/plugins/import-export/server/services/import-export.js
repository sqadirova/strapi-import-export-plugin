module.exports = ({strapi}) => ({
  async exportRestaurants(query) {
    console.log("---exportRestaurants")
    return await strapi.entityService.findMany("api::restaurant.restaurant", query);
  },

  async importRestaurants(data) {
    return await strapi.entityService.createMany("api::restaurant.restaurant", data);
  },

});
