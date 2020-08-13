import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./Article.scss";

function Article({article}) {
  let date = new Date(article.webPublicationDate);
  let dateString = `${date.getMonth()}/${date.getFullYear()}`;

  return (<a href={article.webUrl} key={article.id} className="article">
    <span className="title">{article.webTitle}</span>
    <div className="bottom">
      <span className="section">{article.sectionName}</span>
      <span className="type">{article.type}</span>
      <span className="date">{dateString}</span>
    </div>
  </a>

  );
}

Article.propTypes = {
  article: PropTypes.object,
};

export default Article;
