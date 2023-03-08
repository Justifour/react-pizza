import styles from "../styles/TextInput.module.scss";

const TextInput = ({value, onChange}) => {
  return <input value={value} onChange={onChange} className={styles.root} placeholder="Поиск пиццы..." />;
};

export {TextInput};
