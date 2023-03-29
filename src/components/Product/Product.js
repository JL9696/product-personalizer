import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';
import shortid from 'shortid';

const Product = ({ id, name, title, basePrice, colors, sizes }) => {

  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(sizes[0].additionalPrice);
  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  };
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
      <div className={styles.imageContainer}>
        <img className={styles.image} alt={title} src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`} />
      </div>

      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice(basePrice, currentPrice)}$</span>
        </header>

        <form onSubmit={cartSummary}>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map((size) => (
                <li key={shortid()}>
                  <button type='button' onClick={() => {
                    setCurrentSize(size.name);
                    setCurrentPrice(size.additionalPrice);
                    }} 
                    className={clsx(size.name === currentSize && styles.active)}>
                    {size.name}
                  </button>
                </li>))}
            </ul>
          </div>

          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map((color) => (
                <li key={shortid()}>
                <button type='button' onClick={() => { setCurrentColor(color)
                }}
                className={clsx(prepareColorClassName(color), color === currentColor && styles.active)}/>
              </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
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