/*
 *
 * HomePage
 *
 */

import React, {memo, useState, useEffect} from 'react';
// import PropTypes from 'prop-types';
import {Button, Layout, BaseHeaderLayout, ContentLayout, EmptyStateLayout} from '@strapi/design-system';
import importExportRequests from "../../api/import-export";
import {Illo} from "../../components/Illo";
// import { JsonDataList } from "../../components/JsonDataList";
import {JSONInput} from '@strapi/design-system';


const HomePage = () => {
  const [restaurantsData, setRestaurantsData] = useState({restaurantsData: []});
  const [isClicked, setIsClicked] = useState(false);

  const fetchData = async () => {
    const restaurants = await importExportRequests.getAllRestaurants();
    console.log("restaurants: ", restaurants)
    setRestaurantsData(restaurants);
    setIsClicked(true);
  }

  console.log("---restaurantsData: ", restaurantsData)

  // useEffect(async () => {
  //   await fetchData();
  // }, [])

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

          <Button onClick={() => fetchData()}>Export</Button>
        </div>

        <ContentLayout>
          {restaurantsData.length === 0 ? (
            <EmptyStateLayout
              icon={<Illo/>}
              content="You don't have any restaurants yet..."
            />
          ) : (
            // {isClicked === true ? (
            //   <JSONInput value={JSON.stringify(restaurantsData)}/>
            // ):(
            //   <JSONInput value={JSON.stringify(restaurantsData)}/>
            // )}
            <JSONInput value={JSON.stringify(restaurantsData)}/>
            )}
        </ContentLayout>
      </Layout>
    </div>
  );
};

export default memo(HomePage);

