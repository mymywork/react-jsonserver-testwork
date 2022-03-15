import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducers} from "./reducers";
import {BrowserRouter as Router} from "react-router-dom";
import {Application} from "./containers/Application";
import {Route, Routes} from "react-router"

import { PostList } from "./containers/PostList"
import { PostLayout } from "./containers/PostLayout"
import { PostView } from "./containers/PostView"

import { ProfileList } from "./containers/ProfileList"
import { ProfileLayout } from "./containers/ProfileLayout"
import { ProfileView } from "./containers/ProfileView"

import { PostCreate } from "./containers/PostCreate"

import axios from "axios"
import axiosRetry from "axios-retry"

console.log("Hello World!");

const store = createStore(reducers);

axiosRetry(axios, {
    retries: 3, // number of retries
    retryDelay: (retryCount) => {
      console.log(`retry attempt: ${retryCount}`);
      return retryCount * 2000; // time interval between retries
    }
  });

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path={'/'} element={<Application />}/>
                <Route path="/post" element={<PostLayout />}>
                    <Route path="/post/:id" element={<PostView />} />
                    <Route path="/post/create" element={<PostCreate />} />
                    <Route index element={<PostList />} />
                </Route>
				<Route path="/profile" element={<ProfileLayout />}>
                    <Route path="/profile/:id" element={<ProfileView />} />
                    <Route index element={<ProfileList />} />
                </Route>
            </Routes>
        </Router>
    </Provider>
    , document.getElementById("application"))
