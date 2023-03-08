import styles from "../styles/NotFoundContent.module.scss";

const NotFoundContent = () => (
  <div className={styles.root}>
    <h1>
      Ничего не найдено <span>😕</span>
    </h1>
    <p className={styles.description}>К сожалению, данная страница отсутствует</p>
  </div>
);

export {NotFoundContent};
