import React, { useState } from "react";
import { Loading } from "react-loading-dot";

import NewsItem from "../NewsItem";

import "./index.css";

const News = () => {
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(false);
  const [newsData, setNewsData] = useState(null);

  async function fetchNewsData(param) {
    setLoader(true);
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${param}&apiKey=a17a3c304ed8461e8e98f03b5a8283ff`
      );
      const data = await response.json();

      if (data) {
        setNewsData(data.articles);
        setLoader(false);
      }
    } catch (e) {
      console.log(e);
    }
  }

  function handleSearch() {
    if (search !== "") {
      fetchNewsData(search);
    }
  }

  return (
    <div className="news-container">
      <h1 className="page-title">Global News</h1>
      <div className="input-container">
        <input
          type="text"
          name="search"
          placeholder="Search here..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loader ? (
        <Loading
          className="loading"
          height="80"
          width="80"
          radius="9"
          color="skyblue"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      ) : (
        <ul className="news-items-container">
          {newsData?.map((eachItem, index) => (
            <NewsItem newsItem={eachItem} key={index} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default News;
