import axios from "axios";

const myApi = axios.create({
  baseURL: "https://nc-backend-project-sam-g.onrender.com/api",
});

export const fetchArticles = () => {
  return myApi.get(`/articles`).then((res) => {
    return res.data.result;
  });
};
