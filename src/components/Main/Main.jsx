// * Base
// import className from 'classnames'
import cn from 'classnames';

// * Components
import Button from '../Button/Button';

// * Styles
import styles from './Main.module.css';
import baseStyles from '../styles/base.module.css';

const Main = () => {
  const getStarted = () => console.log('Get started');

  return (
    <section className={styles.banner}>
      <div className={cn(styles['wrapper'], baseStyles.wrapper)}>
        <div className={styles['content']}>
          <h1 className={styles['title']}>The Design Thinking superpowers</h1>
          <p className={styles['text']}>
            Tools, tutorials, design and innovation experts, all in one place!
            The most intuitive way to imagine your next user experience.
          </p>
          <Button text={'Get started'} callback={getStarted} bigMode={true} />
        </div>
        {/* <img src="" alt="" /> */}
      </div>
    </section>
  );
};

export default Main;
