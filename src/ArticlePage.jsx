import { useParams } from "react-router-dom";
import {
  changeVote,
  fetchArticleById,
  fetchCommentsById,
  myApi,
} from "../utils/api";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./App";

function ArticlePage() {
  const { article_id } = useParams();
  const { currentUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [articleVotes, setArticleVotes] = useState(0);

  function handleClick(vote) {
    setArticleVotes((articleVotes) => articleVotes + vote);
    changeVote(article_id, vote).catch((err) => {
      setArticleVotes((articleVotes) => articleVotes - vote);
    });
  }

  useEffect(() => {
    fetchArticleById(article_id).then((articleObj) => {
      setArticle(articleObj);
      setArticleVotes(articleObj.votes);
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
          <div>
            Votes: {articleVotes}
            <button onClick={() => handleClick(1)}>&#8593;</button>
            <button
              onClick={() => {
                handleClick(-1);
              }}
            >
              &#8595;
            </button>
          </div>
          <h4>Comments</h4>
        </section>

        <form>
          <input defaultValue={`comment as ${currentUser}`}></input>
        </form>

        {comments.map((comment) => {
          return (
            <section className="card" key={comment.comment_id}>
              <h5>{comment.author}</h5>
              <p>{comment.body}</p>
            </section>
          );
        })}
      </main>
    );
  }
}

export default ArticlePage;
