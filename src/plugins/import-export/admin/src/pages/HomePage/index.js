/*
 *
 * HomePage
 *
 */

import React, {memo, useState, ChangeEvent, useEffect} from 'react';
// import PropTypes from 'prop-types';
import {Button, Layout, BaseHeaderLayout, ContentLayout, EmptyStateLayout} from '@strapi/design-system';
import importExportRequests from "../../api/import-export";
import {Illo} from "../../components/Illo";
import JsonDataList from "../../components/JsonDataList";
// import FileUploadSingle from "../../components/ImportData"
// import ImportData from "../../components/ImportData";
// import {JSONInput} from '@strapi/design-system';
// import { Input } from '@buffetjs/core';
import axios from 'axios';
// const { request } = require('@strapi/helper-plugin');


const HomePage = () => {
  const [restaurantsData, setRestaurantsData] = useState({restaurantsData: []});
  // const [isClicked, setIsClicked] = useState(false);
  const [allData, setAllData] = useState({allData: []});
  // const [token, setToken] = useState('');


  const fetchData = async () => {
    const restaurants = await importExportRequests.getAllRestaurants();
    console.log("restaurants: ", restaurants)
    setRestaurantsData(restaurants);
  }

  const fetchAllData = async () => {
    const allData = await importExportRequests.getAllData();
    console.log("allData: ", allData)
    setAllData(allData);
  }

  // useEffect(() => {
  //   const fetchToken = async () => {
  //     try {
  //       // Make a request to the Strapi API to retrieve the token
  //       // const response = await request.get('http://localhost:1337/auth/session');
  //       const response = await request('/auth/session', {
  //         method: 'GET',
  //       });
  //
  //       const {data} = response;
  //       const token = data?.jwt;
  //
  //       // Set the token in the state
  //       setToken(token);
  //     } catch (error) {
  //       console.error('Error retrieving token:', error);
  //     }
  //   };
  //
  //   fetchToken();
  // }, []);

  //import page
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleImport = async (ctx) => {
    console.log("Handle import!!!");
    const formData = new FormData();
    console.log("file: ", file)
    formData.append('file', file);
    console.log("formData in HomePage: ", formData)
    // console.log("--token: ", token)
    // console.log(strapi.admin.user.jwtToken)
    // console.log("ctx:", ctx.state);

    try {
      // const loginData = {
      //   identifier: 'siddiga.gadirova@gmail.com',
      //   password: 'password!',
      // };
      //
      // const login = await fetch(`http://localhost:1337/api/auth/local`, {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(loginData),
      // });
      //
      // const loginResponseData = await login.json();
      // console.log("--loginResponseData: ",loginResponseData)


      let importedData = importExportRequests.uploadAndImportData(formData);
      console.log("--importedData: ", importedData);


      // let importedData = await request('http://localhost:1337/import-export/import/upload', {
      //   method: "POST",
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //     Authorization: `Bearer ${token}`
      //   },
      //   body:formData,
      // });

      // let importedData = await axios.post('http://localhost:1337/import-export/import/upload', formData, {
      //   method: "POST",
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //     Authorization: `Bearer ${loginResponseData.jwt}`,
      //   },
      // });

      console.log(importedData)

      // Handle success, e.g., show success message
    } catch (error) {
      console.log("error: ", error);
      // Handle error, e.g., show error message
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


        {/*<div style={{padding:"32px",borderRadius:"4px",alignSelf:"stretch"}}>*/}
        {/*  <ContentLayout>*/}
        {/*    {restaurantsData.length === 0 ? (*/}
        {/*      <EmptyStateLayout*/}
        {/*        icon={<Illo/>}*/}
        {/*        content="You don't have any restaurants yet..."*/}
        {/*      />*/}
        {/*    ) : (*/}
        {/*      <div>*/}
        {/*        /!*<h2 style={{color: "white",font:"400",fontSize:"2rem",lineHeight:"1.25"}}>Exported data</h2>*!/*/}
        {/*        <BaseHeaderLayout*/}
        {/*          title="Exported data"*/}
        {/*          as="h1"*/}
        {/*          color='white'*/}
        {/*        />*/}
        {/*        <JsonDataList*/}
        {/*          entries={restaurantsData}*/}
        {/*        />*/}
        {/*      </div>*/}
        {/*    )}*/}
        {/*  </ContentLayout>*/}
        {/*</div>*/}

        {/*<div style={{padding:"32px",borderRadius:"4px",alignSelf:"stretch"}}>*/}
        {/*  <ContentLayout>*/}
        {/*    <BaseHeaderLayout*/}
        {/*      title="Choose file for import data"*/}
        {/*      as="h1"*/}
        {/*      color='white'*/}
        {/*    />*/}
        {/*    /!*<h2 style={{color: "white",font:"400",fontSize:"2rem",lineHeight:"1.25"}}>Choose file for import data</h2>*!/*/}
        {/*    <label style={{borderStyle: "dashed", position: "relative", display: "flex", alignItems: "center",lineHeight:"1.25"}}>*/}
        {/*      /!*<input type={"file"} accept={".json"} onClick={}/>*!/*/}
        {/*      /!*<div>{file && `${file.name} - ${file.type}`}</div>*!/*/}
        {/*     <FileUploadSingle></FileUploadSingle>*/}
        {/*    </label>*/}
        {/*  </ContentLayout>*/}
        {/*</div>*/}

        <div style={{padding: "32px", borderRadius: "4px", alignSelf: "stretch"}}>
          <BaseHeaderLayout
            title="Choose file for import data"
            as="h1"
            color='white'
          />
          <input type="file" accept=".json" onChange={handleFileChange}/>
          <Button onClick={handleImport}>Import</Button>
          {/*<button onClick={handleImport}>Import</button>*/}
        </div>

      </Layout>
    </div>
  );
};

export default memo(HomePage);

