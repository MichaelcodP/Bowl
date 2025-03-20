import React from 'react'
import Button from '../components/Button.jsx'
import { products } from '../constants/database.js';

const ProductItem = ({ title, ingredients, image }) => (
    <div className="products__item item-product">
        <div className="item-product__picture">
            <img src={image} className='ibg' alt={title} />
        </div>
        <div className="item-product__body">
            <h4 className="item-product__title">{title}</h4>
            <p className="item-product__ingredients">
                {ingredients}
            </p>
            <Button />
        </div>                
    </div>
);

const Products = () => {
  return (
    <section className='page__products products'>
      <div className="products__container">
        <div className="products__header">
            <h2 className="products__title title">
                Our specialties
            </h2>
            <p className="products__descr">
                We offer a variety of healthy and flavorful Vietnamese bowls made with fresh, tasteful and high-quality ingredients.
            </p>
        </div>
        <div className="products__items">
            {products.map((product =>
                <ProductItem key={product.id} {...product} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Products
