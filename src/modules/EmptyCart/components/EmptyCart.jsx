import styles from "../styles/EmptyCart.module.scss";
import emptyCartImage from "../images/emptyCart.svg";

const EmptyCart = () => (
  <div className={styles.root}>
    <h1>
      Корзина пустая <span>😕</span>
    </h1>
    <br />
    <p className={styles.description}>
      Вероятней всего, вы не заказывали ещё пиццу. <br></br> Для того, чтобы заказать пиццу, перейди на главную страницу.
    </p>
    <img src={emptyCartImage}></img>
  </div>
);

export {EmptyCart};
