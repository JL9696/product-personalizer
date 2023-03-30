import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = ({name, title, basePrice, colors, sizes}) => {
  const [currentColor, setCurrentColor] = useState(colors[0]); 
  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(sizes[0].additionalPrice);

  const getPrice = (basePrice, currentPrice) => {
    return basePrice + currentPrice;
  };
  const cartSummary = e => {
    e.preventDefault();
    console.log('udało się');
    console.log('Summary');
    console.log('==============');
    console.log('Name: ', title);
    console.log('Price: ', getPrice(basePrice, currentPrice));
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);
  };

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} color={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice(basePrice, currentPrice)}$</span>
        </header>
        <ProductForm
          cartSummary={cartSummary}
          sizes={sizes}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          setCurrentPrice={setCurrentPrice}
          colors={colors}
          setCurrentColor={setCurrentColor}
          currentColor={currentColor}
          />
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};
export default Product;