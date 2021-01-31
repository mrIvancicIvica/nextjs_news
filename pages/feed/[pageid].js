import { useRouter } from "next/router";
import axios from "axios";
import styles from "../../styles/Feed.module.css";

export const Feed = ({ pageNumber, articles }) => {
  const router = useRouter();
  console.log(articles, pageNumber);
  return (
    <div className={styles.main}>
      <div>
        {articles.map((article, index) => (
          <div key={index} className={styles.post}>
            <h1 onClick={() => (window.location.href = article.url)}>
              {article.title}
            </h1>
            <p>{article.description}</p>
            {!!article.urlToImage && <img src={article.urlToImage} />}
          </div>
        ))}
      </div>

      <div className={styles.paginaton}>
        <div
          className={pageNumber === 1 ? styles.disabled : styles.active}
          onClick={() => {
            router
              .push(`/feed/${pageNumber - 1}`)
              .then(() => window.scroll(0, 0));
          }}
        >
          Previous Page
        </div>

        <div>Currently page: {pageNumber}</div>
        <div
          className={pageNumber ===  5 ? styles.disabled : styles.active}
          onClick={() => {
            router
              .push(`/feed/${pageNumber + 1}`)
              .then(() => window.scroll(0, 0));
          }}
        >
          Next Page
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.pageid;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const res = await axios(
    `https://newsapi.org/v2/top-headlines?country=cz&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );

  const apiData = res.data;

  const { articles } = apiData;

  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;
