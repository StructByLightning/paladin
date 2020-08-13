import React, { useState, useEffect } from "react";

import "./Feed.css";

function Feed() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://content.guardianapis.com/search?api-key=462ffdc3-5cc3-4099-9a29-fa39124aa001")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setArticles(data.response.results);
      }, (err) => {
        setLoading(true);
        setError(err);
      });
  }, []);


  return (
    <main className="feed">
      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error">
        <span>Error:</span>
        <span>{error}</span>
      </div>}
      {articles?.length > 0 && <div className="articles">
        {articles.map((article) => {
          return <div key={article.id} className="article">{article.id}</div>;
        })}
      </div>}
    </main>
  );
}

export default Feed;
