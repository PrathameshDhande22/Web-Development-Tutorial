import { useRecoilValue } from "recoil";
import { TextState } from "../Store/todo";
import PropTypes from "prop-types";

const Component2 = ({ styles, stylesborder }) => {
  // Reading the value of the state using useRecoilValue() Hook.
  const text = useRecoilValue(TextState);

  return (
    <div className={styles}>
      Data Reading from the useRecoilValue() Hook : {text}
      <div className={stylesborder}></div>
    </div>
  );
};
export default Component2;

Component2.propTypes = {
  styles: PropTypes.any.isRequired,
  stylesborder: PropTypes.any.isRequired,
};
