import { useEffect, useState } from "react";
import { fetchArticleById } from "../utils/api";
import ArticlePage from "./ArticlePage";
import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  const imageSource = article.article_img_url || "../defaultImage.png";

  return (
    <Link to={`/articles/${article.article_id}`}>
      <section className="card">
        <h2>{article.title}</h2>
        <h3>
          {article.author} | Votes: {article.votes}
        </h3>
        <img className="img" alt={article.title} src={imageSource}></img>
      </section>
    </Link>
  );
}

export default ArticleCard;
