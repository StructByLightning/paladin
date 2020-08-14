import React, { useState, useEffect } from "react";


import Article from "components/Article/Article.jsx";
import TextInput from "components/TextInput/TextInput.jsx";
import "./Feed.scss";

function Feed() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log(search);
    fetch(`https://content.guardianapis.com/search?api-key=462ffdc3-5cc3-4099-9a29-fa39124aa001&q=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setArticles(data.response.results);
      }, (err) => {
        setLoading(true);
        setError(err);
        console.log();
      });
  }, [search]);


  return (
    <main className="feed">
      <TextInput label="Search" onChange={() => {
        setLoading(true);
        setArticles([]);
      }}
      onDelayedChange={(value) => {
        setSearch(value);
      }}/>


      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error">
        <span>Error:</span>
        <span>{error.toString()}</span>
      </div>}

      {articles?.length > 0 && <div className="articles">
        {articles.map((article) => {
          return <Article key={article.id} article={article}/>;
        })}
      </div>}
    </main>
  );
}

export default Feed;
