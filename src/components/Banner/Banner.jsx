import ButtonBanner from '../Button/ButtonBanner';

// * Styles
import styles from './Banner.module.css';
import baseStyles from '../styles/index.module.css';
// import className from 'classnames'
import cn from 'classnames';

const Banner = () => {
  return (
    <section className={styles.banner}>
      {/* Add wrapper */}
      <div className={cn(styles['banner-wrapper'], baseStyles.wrapper)}>
        <div className={styles['banner-content']}>
          <h1 className={styles['banner-title']}>
            The Design Thinking superpowers
          </h1>
          <p className={styles['banner-text']}>
            Tools, tutorials, design and innovation experts, all in one place!
            The most intuitive way to imagine your next user experience.
          </p>
          <ButtonBanner />
        </div>
        {/* <img src="" alt="" /> */}
      </div>
    </section>
  );
};

export default Banner;
