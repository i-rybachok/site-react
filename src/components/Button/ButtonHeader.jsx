// * Styles
import styles from './ButtonHeader.module.css';
import baseStyles from '../styles/index.module.css';
// import className from 'classnames'
import cn from 'classnames';

const ButtonHeader = () => {
  return (
    <div className={styles['header-buttons']}>
      {/* ! Додати клас button*/}
      <button
        type="button"
        className={cn(styles['button-sign-in'], baseStyles.button)}
      >
        Sign In
      </button>
      {/* ! Додати клас button*/}
      <button
        type="button"
        className={cn(styles['button-sign-up'], baseStyles.button)}
      >
        Sign Up
      </button>
    </div>
  );
};

export default ButtonHeader;
