// * Styles
import styles from './Wrapper.module.css';

// * Base
import cn from 'classnames';

const Wrapper = ({ children, className = [] }) => {
  return <div className={cn([styles.wrapper, ...className])}>{children}</div>;
};

export default Wrapper;
