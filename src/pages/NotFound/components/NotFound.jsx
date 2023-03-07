import {Header} from "../../../modules/Header";
import {Wrapper} from "../../../modules/Wrapper";
import styles from "./NotFound.module.scss";

const NotFound = () => (
  <Wrapper>
    <Header />
    <div className={styles.root}>
      <h1>
        Ничего не найдено <span>😕</span>
      </h1>
      <p className={styles.description}>К сожалению, данная страница отсутствует</p>
    </div>
  </Wrapper>
);

export {NotFound};
