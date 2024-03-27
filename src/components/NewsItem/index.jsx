import React from "react";

import './index.css'

const NewsItem = (props) => {
  const { newsItem } = props;

  return (
    <li className="news-item-container">
      <img src={newsItem?.urlToImage} alt="img" />
      <div className="news-details">
        <h3 className="title">{newsItem?.title}Title</h3>
        <p className="description">{newsItem?.description}</p>
        <a href={newsItem?.url} className="read-more">Read More...</a>
        <h2 className="name">Name: {newsItem?.source.name}</h2>
        <h2 className="author">Author: {newsItem?.author}</h2>
      </div>
    </li>
  );
};

export default NewsItem;
