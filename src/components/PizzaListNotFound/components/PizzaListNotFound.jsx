import styles from "../styles/PizzaListNotFound.module.scss";

const PizzaListNotFound = () => (
  <div className={styles.root}>
    <h1>
      Ничего не найдено <span>😕</span>
    </h1>
    <p className={styles.description}>Попробуйте изменить параметры поиска.</p>
  </div>
);

export {PizzaListNotFound};
