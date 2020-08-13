import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./Article.scss";

function Article({article}) {
  return (<div key={article.id} className="article">
    <span className="title">{article.webTitle}</span>
  </div>

  );
}

Article.propTypes = {
  article: PropTypes.object,
};

export default Article;
