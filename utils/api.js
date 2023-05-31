import axios from "axios";

const myApi = axios.create({
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
