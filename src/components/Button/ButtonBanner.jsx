// * Styles
import styles from './ButtonBanner.module.css';
import baseStyles from '../styles/index.module.css';
// import className from 'classnames'
import cn from 'classnames';

const ButtonBanner = () => {
  // Add class button
  return (
    <button className={cn(styles['button-big'], baseStyles.button)}>
      Get started
    </button>
  );
};

export default ButtonBanner;
