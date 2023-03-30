import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import PropTypes from 'prop-types';

const ProductForm = ({cartSummary, sizes, currentSize, setCurrentSize, setCurrentPrice, colors, setCurrentColor, currentColor}) => {
  return (
    <form onSubmit={cartSummary}>
    <OptionSize
      sizes={sizes}
      setCurrentSize={setCurrentSize}
      setCurrentPrice={setCurrentPrice}
      currentSize={currentSize}
    />
    <OptionColor
      colors={colors}
      setCurrentColor={setCurrentColor}
      currentColor={currentColor}
    />
    <Button className={styles.button}>
      <span className="fa fa-shopping-cart" />
    </Button>
  </form>
  );
};

ProductForm.propTypes = {
  sizes: PropTypes.array.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentPrice: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
  colors: PropTypes.array.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
};


export default ProductForm;