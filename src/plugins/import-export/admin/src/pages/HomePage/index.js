/*
 *
 * HomePage
 *
 */

import React, {memo, useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
import {Button, Layout, BaseHeaderLayout, ContentLayout} from '@strapi/design-system';
import importExportRequests from "../../api/import-export";

const HomePage = () => {
  // const [restaurantsData, setRestaurantsData] = useState([]);
  // const fetchData = async () => {
  //   const restaurants = await importExportRequests.getAllRestaurants();
  //   setRestaurantsData(restaurants);
  // }
  //
  // useEffect(async () => {
  //   await fetchData();
  // }, [])
  //
  // async function importRestaurants(data) {
  //   await importExportRequests.addRestaurants(data);
  //   await fetchData();
  // }

  return (
    <div>
      <Layout>
        <BaseHeaderLayout
          title="Actions"
          as="h1"
          color='white'
        />
        <ContentLayout>
          <Button>Import</Button>

          <Button onClick={()=>importExportRequests.getAllRestaurants()}>
            Export
          </Button>
        </ContentLayout>


      </Layout>

    </div>
  );
};

export default memo(HomePage);

