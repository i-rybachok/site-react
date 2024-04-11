// * Components
import Wrapper from '../Wrapper/Wrapper';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';

// * Styles
import styles from './Header.module.css';
import { useCallback } from 'react';

const Header = () => {
  const signIn = useCallback(() => console.log('You signed in'), []);
  const signUp = useCallback(() => console.log('You signed up'), []);

  return (
    <header className={styles.header}>
      <Wrapper className={[styles.wrapper]}>
        <a href="#" className={styles.logo}>
          {/* <img src="." alt="" /> */}
        </a>
        <Navigation />
        <div className={styles.buttons}>
          <Button text="Sign In" callback={signIn} whiteMode={true} />
          <Button text="Sign Up" callback={signUp} />
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
