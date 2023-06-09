import {request} from "@strapi/helper-plugin";

const importExportRequests = {
  getAllRestaurants: async () => {
    return await request("/import-export/export", {
      method: "GET",
    });
  },
  getAllData: async () => {
    return await request("/import-export/export/all", {
      method: "GET",
    });
  },

  uploadAndImportData: async (formData) => {
    return await request('/import-export/import/upload', {
      method: "POST",
      header: {
        'Content-Type': 'multipart/form-data',
      },
      body: {formData: formData}
    });
  },

  // addRestaurants: async (data) => {
  //   return await request(`/import-export/import`, {
  //     method: "POST",
  //     body: {data: data},
  //   });
  // },

};

export default importExportRequests;
