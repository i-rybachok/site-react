// * Base
// import className from 'classnames'
import cn from 'classnames';

// * Components
import Button from '../Button/Button';

// * Styles
import styles from './Main.module.css';
import baseStyles from '../styles/base.module.css';
import { useState } from 'react';

const Main = () => {
  let [number, setNumber] = useState(0); // "useState(0)" is an example of a hook

  const changeNumber = () => {
    setNumber((prev) => prev + 1);
  };

  return (
    <section className={styles.banner}>
      <div className={cn(styles['wrapper'], baseStyles.wrapper)}>
        <div className={styles['content']}>
          <h1 className={styles['title']}>The Design Thinking superpowers</h1>
          <p className={styles['text']}>
            Tools, tutorials, design and innovation experts, all in one place!
            The most intuitive way to imagine your next user experience.
          </p>
          <Button
            text={'Add 1 to a number'}
            callback={changeNumber}
            bigMode={true}
          />
          <p>{number}</p>
        </div>
        {/* <img src="" alt="" /> */}
      </div>
    </section>
  );
};

export default Main;
