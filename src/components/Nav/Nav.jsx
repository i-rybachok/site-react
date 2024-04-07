// * Styles
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <nav>
      <ul className={styles['navigation-list']}>
        {/* Header-content */}
        <li className={styles['navigation-list-item']}>
          <a href="#product" className={styles['navigation-list-item-a']}>
            Product
          </a>
        </li>
        <li className={styles['navigation-list-item']}>
          <a href="#customers" className={styles['navigation-list-item-a']}>
            Customers
          </a>
        </li>
        <li className={styles['navigation-list-item']}>
          <a href="#pricing" className={styles['navigation-list-item-a']}>
            Pricing
          </a>
        </li>
        <li className={styles['navigation-list-item']}>
          <a href="#resources" className={styles['navigation-list-item-a']}>
            Resources
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
