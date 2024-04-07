import Nav from '../Nav/Nav';
import ButtonHeader from '../Button/ButtonHeader';

// * Styles
import styles from './Header.module.css';
import baseStyles from '../styles/index.module.css';
// import className from 'classnames'
import cn from 'classnames';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={cn([styles['header-wrapper'], baseStyles.wrapper])}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          {/* <img src="." alt="" /> */}
        </a>
        {/* Nav */}
        <Nav />
        {/* Button */}
        <ButtonHeader />
      </div>
    </header>
  );
};

export default Header;
