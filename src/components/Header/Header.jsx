// * Base
// import className from 'classnames'
import cn from 'classnames';

// * Components
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';

// * Styles
import styles from './Header.module.css';
import baseStyles from '../styles/base.module.css';

const Header = () => {
  const signIn = () => console.log('You signed in');
  const signUp = () => console.log('You signed up');

  return (
    <header className={styles.header}>
      <div className={cn([styles['wrapper'], baseStyles.wrapper])}>
        <a href="#" className={styles.logo}>
          {/* <img src="." alt="" /> */}
        </a>
        <Navigation />
        <div className={styles.buttons}>
          <Button text="Sign In" callback={signIn} whiteMode={true} />
          <Button text="Sign Up" callback={signUp} />
        </div>
      </div>
    </header>
  );
};

export default Header;
