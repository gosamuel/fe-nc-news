import { useParams } from "react-router-dom";
import {
  changeVote,
  deleteComment,
  fetchArticleById,
  fetchCommentsById,
  myApi,
} from "../utils/api";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./App";
import CommentBuilder from "./CommentBuilder";

function ArticlePage() {
  const { article_id } = useParams();
  const { currentUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [articleVotes, setArticleVotes] = useState(0);
  const [newComment, setNewComment] = useState({});

  function handleClick(vote) {
    setArticleVotes((articleVotes) => articleVotes + vote);
    changeVote(article_id, vote).catch((err) => {
      setArticleVotes((articleVotes) => articleVotes - vote);
    });
  }

  function handleDelete(comment) {
    setComments(comments.filter((com) => com.comment_id !== currentUser));
    deleteComment(comment.comment_id);
  }

  useEffect(() => {
    fetchArticleById(article_id).then((articleObj) => {
      setArticle(articleObj);
      setArticleVotes(articleObj.votes);
    });
    fetchCommentsById(article_id).then((theseComments) => {
      setComments(theseComments);
      setIsLoading(false);
    });
  }, [article_id, comments]);

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

        <CommentBuilder
          article_id={article_id}
          currentUser={currentUser}
          setComments={setComments}
          newComment={newComment}
          setNewComment={setNewComment}
          comments={comments}
        />

        {comments.map((comment, index) => {
          return (
            <section className="card" key={index}>
              <h5>{comment.author}</h5>
              <button
                onClick={() => {
                  if (comment.author === currentUser) {
                    handleDelete(comment);
                  }
                }}
              >
                Delete
              </button>

              <p>{comment.body}</p>
            </section>
          );
        })}
      </main>
    );
  }
}

export default ArticlePage;
