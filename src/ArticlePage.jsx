import { useParams } from "react-router-dom";
import { fetchArticleById } from "../utils/api";
import { useEffect, useState } from "react";

function ArticlePage({ theArticle }) {
  //console.log(theArticle);
  let { article_id } = useParams();

  const [article, setArticle] = useState({});

  useEffect(() => {
    fetchArticleById(article_id).then((articleObj) => {
      setArticle(articleObj);
    });
  }, [article_id]);

  return (
    <section className="card">
      <h2>{article.title}</h2>
      <h3>{article.author}</h3>
      <img className="img" src={article.article_img_url}></img>
      <p>{article.body}</p>
    </section>
  );
}

export default ArticlePage;
