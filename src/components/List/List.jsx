// * Data
import LIST from './List.data';

// * Styles
import styles from './List.module.css';

const List = () => {
  return (
    <ul className={styles.list}>
      {LIST.map(({ id, href, text }) => (
        <Item key={`list-item-${id}`} href={href} text={text} />
      ))}
    </ul>
  );
};

const Item = ({ href, text }) => {
  return (
    <li>
      <a href={href} className={styles['link']}>
        {text}
      </a>
    </li>
  );
};

export default List;
