import styles from './OptionColor.module.scss';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import clsx from 'clsx';

const OptionColor = ({ colors, setCurrentColor, currentColor }) => {

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
      {colors.map((color) => (
        <li key={shortid()}>
          <button type='button' 
          onClick={() => {
            setCurrentColor(color)
          }}
          className={clsx(prepareColorClassName(color), color === currentColor && styles.active)}/>
        </li>
      ))}
    </ul>
  </div>
  );
};

OptionColor.propTypes = {
  colors: PropTypes.array.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
};

export default OptionColor;