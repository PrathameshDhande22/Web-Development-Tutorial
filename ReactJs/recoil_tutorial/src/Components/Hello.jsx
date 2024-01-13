import InputBox from "./InputBox";
import styles from "../Styles/Hello.module.css";
import Component2 from "./Component2";

const Hello = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hello}>Hello World !</div>
      <InputBox />
      <Component2 styles={styles.show} stylesborder={styles.horizontal} />
    </div>
  );
};

export default Hello;
