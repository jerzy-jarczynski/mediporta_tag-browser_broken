import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './Button.module.scss';

const Button = ({ variant = 'primary', children, ...rest }) => {
  return (
    <button
      className={clsx(styles.Button, variant && styles[variant])}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
  rest: PropTypes.object,
};

export default Button;
