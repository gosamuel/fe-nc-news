import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchArticles().then((articleList) => {
      setArticles(articleList);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return articles.map((article) => {
      console.log(article);
      return <ArticleCard key={article.article_id} article={article} />;
    });
  }
}

export default Articles;
