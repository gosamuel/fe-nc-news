import { useParams } from "react-router-dom";
import { fetchArticleById, fetchCommentsById } from "../utils/api";
import { useEffect, useState } from "react";

function ArticlePage() {
  const { article_id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchArticleById(article_id).then((articleObj) => {
      setArticle(articleObj);
    });
  }, [article_id]);

  useEffect(() => {
    fetchCommentsById(article_id).then((theseComments) => {
      setComments(theseComments);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  } else {
    return (
      <main>
        <section className="card">
          <h2>{article.title}</h2>
          <h3>{article.author}</h3>
          <img className="img" src={article.article_img_url}></img>
          <p>{article.body}</p>
          <h4>Comments</h4>
        </section>

        {comments.map((comment) => {
          return (
            <section className="card" key={comment.comment_id}>
              <h5>
                {comment.author} {comment.votes}
              </h5>
              <p>{comment.body}</p>
            </section>
          );
        })}
      </main>
    );
  }
}

export default ArticlePage;
