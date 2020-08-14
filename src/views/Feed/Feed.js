import React, { useState, useEffect } from "react";


import Article from "components/Article/Article.jsx";
import TextInput from "components/TextInput/TextInput.jsx";
import Paginator from "components/Paginator/Paginator.jsx";
import "./Feed.scss";

function Feed() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [searchHandle, setSearchHandle] = useState(null);

  useEffect(() => {
    clearTimeout(searchHandle);
    setSearchHandle(setTimeout(() => {
      fetch(`https://content.guardianapis.com/search?api-key=462ffdc3-5cc3-4099-9a29-fa39124aa001&q=${search}&page=${page}`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(false);
          setArticles(data.response.results);
        }, (err) => {
          setLoading(true);
          setError(err);
          console.error();
        });
    }, 500));
  }, [search, page]);


  return (
    <main className="feed">
      <TextInput label="Search" onChange={(value) => {
        setLoading(true);
        setArticles([]);
        setSearch(value);
        setError("");
      }}/>

      <Paginator onChange={(value) => {
        setPage(value);
        setLoading(true);
        setArticles([]);
        setError("");
      }} />

      {loading && !error && <div className="alert">Loading...</div>}

      {error && <div className="alert error">
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

