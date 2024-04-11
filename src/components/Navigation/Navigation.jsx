// * Data
import LIST from './Navigation.data';

// * Styles
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.list}>
        {LIST.map(({ id, href, text }) => (
          <Item key={`navigation-item-${id}`} href={href} text={text} />
        ))}
      </ul>
    </nav>
  );
};

const Item = ({ href, text }) => {
  return (
    <li>
      <a href={href} className={styles.link}>
        {text}
      </a>
    </li>
  );
};

export default Navigation;
