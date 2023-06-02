import { useState, useEffect } from "react";
import { getArticlesByTopic } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

function ArticlesByTopic() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getArticlesByTopic(topic).then((articleList) => {
      setArticles(articleList);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return articles.map((article) => {
      return <ArticleCard key={article.article_id} article={article} />;
    });
  }
}

export default ArticlesByTopic;
