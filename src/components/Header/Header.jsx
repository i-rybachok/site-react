import Navigation from '../Navigation/Navigation';
import Button from './Button/Button';

// * Styles
import styles from './Header.module.css';
import baseStyles from '../styles/index.module.css';
// import className from 'classnames'
import cn from 'classnames';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={cn([styles['wrapper'], baseStyles.wrapper])}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          {/* <img src="." alt="" /> */}
        </a>
        {/* Nav */}
        <Navigation />
        {/* Button */}
        <Button />
      </div>
    </header>
  );
};

export default Header;
