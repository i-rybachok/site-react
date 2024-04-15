// * Data
import ICONS from './Icon.data.jsx';

// * Styles
import styles from './Icon.module.css';

const Icon = ({ icon }) => {
  return (
    <svg className={styles.icon} viewBox="0 0 32 32">
      {ICONS[icon]}
    </svg>
  );
};

export default Icon;
