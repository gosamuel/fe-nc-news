import axios from "axios";

export const myApi = axios.create({
  baseURL: "https://nc-backend-project-sam-g.onrender.com/api",
});

export const fetchArticles = () => {
  return myApi.get(`/articles`).then((res) => {
    return res.data.result;
  });
};

export const fetchArticleById = (article_id) => {
  return myApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const fetchCommentsById = (article_id) => {
  return myApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.article;
  });
};

export const changeVote = (article_id, vote) => {
  return myApi.patch(`/articles/${article_id}`, { vote: vote });
};

export const sendComment = (currentUser, comment, article_id) => {
  return myApi.post(`/articles/${article_id}/comments`, {
    body: comment,
    username: currentUser,
  });
};
