import {request} from "@strapi/helper-plugin";

const importExportRequests = {
  getAllRestaurants: async () => {
    return await request("/import-export/export", {
      method: "GET",
    });
  },

  addRestaurants: async (data) => {
    return await request(`/import-export/import`, {
      method: "POST",
      body: {data: data},
    });
  },

};

export default importExportRequests;