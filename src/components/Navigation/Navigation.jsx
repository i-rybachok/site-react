// * Styles
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={styles['list']}>
        {/* Header-content */}
        <li className={styles['list-item']}>
          <a href="#product" className={styles['link']}>
            Product
          </a>
        </li>
        <li className={styles['list-item']}>
          <a href="#customers" className={styles['link']}>
            Customers
          </a>
        </li>
        <li className={styles['list-item']}>
          <a href="#pricing" className={styles['link']}>
            Pricing
          </a>
        </li>
        <li className={styles['list-item']}>
          <a href="#resources" className={styles['link']}>
            Resources
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
