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
    console.log("formData in requests: ", formData)
    // request.upload({formData})
    const response = await request('/import-export/import/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'form-data', // Add the Content-Type header
      },
      body: formData,
    });

    console.log("--response: ", response);

    return response;
  },

  // addRestaurants: async (data) => {
  //   return await request(`/import-export/import`, {
  //     method: "POST",
  //     body: {data: data},
  //   });
  // },

};

export default importExportRequests;
