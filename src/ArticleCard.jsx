function ArticleCard({ article }) {
  return (
    <section className="card">
      <h2>{article.title}</h2>
      <h3>{article.author}</h3>
      <img
        className="img"
        alt={article.title}
        src={article.article_img_url}
      ></img>
    </section>
  );
}

export default ArticleCard;
