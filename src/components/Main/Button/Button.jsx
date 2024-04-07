// * Styles
import styles from './Button.module.css';
import baseStyles from '../../styles/index.module.css';
// import className from 'classnames'
import cn from 'classnames';

const Button = () => {
  return (
    <button className={cn(styles['big'], baseStyles.button)}>
      <span>Get started</span>
    </button>
  );
};

export default Button;
