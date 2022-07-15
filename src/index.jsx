import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./Styles/style.css";
import App from "./App";
import Blog from "./Routes/blog";
import Blogs from "./Routes/blogs";
import About from "./Routes/about";

let cache = {};

const importAll = (r) => r.keys().forEach((key) => (cache[key] = r(key)));
importAll(require.context("./files", true, /\.md$/));

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />}>
        <Route index element={<Navigate to="/about" replace />} />
        <Route exact path="about" element={<About />} />
        <Route
          exact
          path="blog"
          element={<Blogs samples={Object.keys(cache)} />}
        />
        {Object.keys(cache).map(function (key, index) {
          let path = key.slice(2, -3);
          return (
            <Route
              key={index}
              exact
              path={`/blog/${path}`}
              element={<Blog html={cache[key].default} />}
            />
          );
        })}
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
