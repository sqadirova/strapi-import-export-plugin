module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/export",
    handler: "importExport.exportRestaurants",
    config: {
      policies: [],
    },
  },
  {
    method: "POST",
    path: "/import",
    handler: "importExport.importRestaurants",
    config: {
      policies: [],
    },
  },
];
