/*
 *
 * HomePage
 *
 */

import React, {memo, useState} from 'react';
import {Button, Layout, BaseHeaderLayout, ContentLayout, EmptyStateLayout} from '@strapi/design-system';
import importExportRequests from "../../api/import-export";
import {Illo} from "../../components/Illo";
import JsonDataList from "../../components/JsonDataList";

const HomePage = () => {
  // const [restaurantsData, setRestaurantsData] = useState({restaurantsData: []});
  const [allData, setAllData] = useState({allData: []});

  // const fetchData = async () => {
  //   const restaurants = await importExportRequests.getAllRestaurants();
  //   console.log("restaurants: ", restaurants)
  //   setRestaurantsData(restaurants);
  // }

  const fetchAllData = async () => {
    const allData = await importExportRequests.getAllData();
    console.log("allData: ", allData)
    setAllData(allData);
  }

  //import page
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleImport = async () => {
    console.log("Handle import!!!");
    const formData = new FormData()
    formData.append("file", file);

    try {
      fetch('http://localhost:1337/import-export/import/upload', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        });


      // let importedData = await importExportRequests.uploadAndImportData(formData);
      // console.log("--importedData: ", importedData);

    } catch (error) {
      console.log("error: ", error);
    }

  };

  return (
    <div>
      <Layout>
        <div style={{padding: "32px", borderRadius: "4px", alignSelf: "stretch"}}>
          <BaseHeaderLayout
            title="Actions"
            as="h1"
            color='white'
          />
          <div style={{alignItems: "center", display: "flex", gap: "16px"}}>
            <Button>Import</Button>

            {/*<Button onClick={() => fetchData()}>Export</Button>*/}
            <Button onClick={() => fetchAllData()}>Export</Button>

          </div>
        </div>

        <div style={{padding: "32px", borderRadius: "4px", alignSelf: "stretch"}}>
          <ContentLayout>
            {allData.length === 0 ? (
              <EmptyStateLayout
                icon={<Illo/>}
                content="You don't have any restaurants yet..."
              />
            ) : (
              <div>
                <h2 style={{color: "white"}}>Exported data</h2>
                <JsonDataList
                  entries={allData}
                />
              </div>
            )}

          </ContentLayout>
        </div>

        <div style={{padding: "32px", borderRadius: "4px", alignSelf: "stretch"}}>
          <BaseHeaderLayout
            title="Choose file for import data"
            as="h1"
            color='white'
          />
          <input type="file" accept=".json" onChange={handleFileChange}/>
          <Button onClick={handleImport}>Import</Button>
        </div>

      </Layout>
    </div>
  );
};

export default memo(HomePage);

