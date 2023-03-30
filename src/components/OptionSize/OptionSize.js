import styles from './OptionSize.module.scss';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import clsx from 'clsx';

const OptionSize = ({ sizes, setCurrentSize, setCurrentPrice, currentSize }) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map((size) => (
          <li key={shortid()}>
            <button type='button' onClick={() => {
              setCurrentSize(size.name);
              setCurrentPrice(size.additionalPrice);
              }} 
              className={clsx(size.name === currentSize && styles.active)}>  {/* Jeśli chcemy użyć dwóch lub więcej klas, to jako className podajemy po prostu wywołanie funkcji clsx, gdzie argumentami są nazwy klas, których chcemy użyć. */}
                {size.name}                                                                                                                   {/* W tym wypadku robimy warunek który, jeśli rozmiar jest równy wybranemu elementowi to nadaj klase active */}
            </button>
          </li>
          ))}
      </ul>
    </div>
  )
};

OptionSize.propTypes = {
  sizes: PropTypes.array.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentPrice: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
};

export default OptionSize;