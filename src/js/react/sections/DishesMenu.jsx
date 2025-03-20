import React, { useState } from 'react'
import { products } from '../constants/database.js';
import Button from '../components/Button.jsx'

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

const DishesMenu = () => {
    const [activeTab, setActiveTab] = useState(0); // Стан для активної вкладки (0 — All)

    // Фільтрація продуктів залежно від вкладки
    const filteredProducts = products.filter(product => {
        if (activeTab === 0) return true; // All — показуємо всі
        if (activeTab === 1) return product.category === 'Pork';
        if (activeTab === 2) return product.category === 'Seafood';
        if (activeTab === 3) return product.category === 'Vegan';
    })

    const tabs = [
        { title: 'All', content: products },
        { title: 'Pork', content: products.filter(p => p.category === 'Pork') },
        { title: 'Seafood', content: products.filter(p => p.category === 'Pork') },
        { title: 'Vegan', content: products.filter(p => p.category === 'Pork') },
    ];

  return (
    <section className='page__dishes dishes'>
      <div className="dishes__container">
        <div className="dishes__tabs">
            <nav className="dishes__navigation">
                {tabs.map((tab, index) =>(
                    <button 
                        type="button" 
                        className={`dishes__title ${activeTab === index ? '_tab-active' : ''}`}
                        onClick={() => setActiveTab(index)}
                    >{tab.title}</button>
                ))}
            </nav>
            <div className="dishes__content">
                <div className="dishes__body">
                    {filteredProducts.map(product => (
                        <ProductItem key={product.id} {...product}/>
                    ))}
                </div>               
            </div>
        </div>
      </div>
    </section>
  )
}

export default DishesMenu
