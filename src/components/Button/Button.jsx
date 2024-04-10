// * Base
// import className from 'classnames'
import cn from 'classnames';

// * Styles
import styles from './Button.module.css';

const Button = ({
  text = 'Default',
  type = 'button',
  whiteMode,
  bigMode,
  callback,
}) => {
  return (
    <button
      type={type}
      onClick={callback}
      className={cn(
        styles.button,
        whiteMode && styles.white,
        bigMode && styles.big
      )}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
