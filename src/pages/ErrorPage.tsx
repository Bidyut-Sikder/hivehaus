import styles from "../custom-css/candle.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.candle}>
        <div className={styles.flame}></div>
        <div className={styles.waxDrip}></div>
      </div>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>
        Oops! The page you're looking for doesn't exist.
      </p>
    </div>
  );
};

export default PageNotFound;
