// * Styles
import styles from './Button.module.css';
import baseStyles from '../../styles/index.module.css';
// import className from 'classnames'
import cn from 'classnames';

const Button = () => {
  return (
    <div className={styles['buttons']}>
      {/* ! Додати клас button*/}
      <button type="button" className={styles['sign-in']}>
        <span>Sign In</span>
      </button>
      {/* ! Додати клас button*/}
      <button type="button" className={baseStyles.button}>
        <span>Sign Up</span>
      </button>
    </div>
  );
};

export default Button;
