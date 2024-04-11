// * Base
import { useState } from 'react';

// * Components
import Button from '../Button/Button';

// * Styles
import styles from './Banner.module.css';

const Banner = () => {
  const [count, setCount] = useState(0); // "useState(0)" is an example of a hook; in [number, setNumber] "number" is a state variable and "setNumber" is the setter function

  return (
    <section className={styles.banner}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>The Design Thinking superpowers</h1>
        <p className={styles.text}>
          Tools, tutorials, design and innovation experts, all in one place! The
          most intuitive way to imagine your next user experience.
        </p>
        <Button
          text="Add 1 to a number"
          onClick={() => setCount((prev) => prev + 1)}
          bigMode={true}
        />
        <div>{count}</div>
      </div>
      {/* <img src="" alt="" /> */}
    </section>
  );
};

export default Banner;
