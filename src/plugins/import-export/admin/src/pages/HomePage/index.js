/*
 *
 * HomePage
 *
 */

import React, {memo, useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
import {Button, Layout, BaseHeaderLayout, ContentLayout,EmptyStateLayout} from '@strapi/design-system';
import importExportRequests from "../../api/import-export";
import { Illo } from "../../components/Illo";
import { JsonDataList } from "../../components/JsonDataList";



const HomePage = () => {
  const [restaurantsData, setRestaurantsData] = useState([]);
  const fetchData = async () => {
    const restaurants = await importExportRequests.getAllRestaurants();
    setRestaurantsData(restaurants);
  }

  useEffect(async () => {
    await fetchData();
  }, [])

  async function importRestaurants(data) {
    await importExportRequests.addRestaurants(data);
    await fetchData();
  }

  return (
    <div>
      <Layout>
        <BaseHeaderLayout
          title="Actions"
          as="h1"
          color='white'
        />
        <div>
          <Button>Import</Button>

          <Button onClick={() => importExportRequests.getAllRestaurants()}>Export</Button>
        </div>

        <ContentLayout>
          {restaurantsData.length === 0 ? (
            <EmptyStateLayout
              icon={<Illo/>}
              content="You don't have any restaurants yet..."
            />
          ) : (
            <>
              {/*<JsonDataList*/}
              {/*  restaurantsData={restaurantsData}*/}
              {/*/>*/}
            </>
          )}
        </ContentLayout>
      </Layout>
    </div>
  );
};

export default memo(HomePage);

