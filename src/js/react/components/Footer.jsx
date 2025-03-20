import React, { useState } from 'react'
import SocialIcons from './SocialIcons.jsx';
import { NavLink } from 'react-router-dom'; // Додаємо NavLink

const Footer = () => {
    // Стан для зберігання значення поля email
    const [email, setEmail] = useState('');
    const [error, setError] = useState(''); // Стан для помилок
    const [success, setSuccess] = useState(''); // Стан для успішного повідомлення

    const validEmail = (email) => {
        // Простий регулярний вираз для перевірки email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    // Обробник зміни значення в полі введення
    const handleEmailChange = (e) => {
        setEmail(e.target.value); // Оновлюємо стан при кожній зміні
        setError(''); // Очищаємо помилку при введенні
        setSuccess(''); // Очищаємо успіх при введенні
    }
    // Обробник відправки форми
    const handleSubmit = (e) => {
        e.preventDefault(); // Запобігання перезавантаженню сторінки
        if (!validEmail(email)) {
            setError('Please enter a valid email address');
            return
        }

        // Симуляція відправки на сервер
        console.log('Submitted email:', email); // Логування для тесту
        // Тут може бути логіка відправки на сервер (наприклад, через fetch)
        setSuccess('Thank you for signing up!');
        setEmail(''); // Очищаємо поле після відправки
        setTimeout(() => setSuccess(''), 3000) // Прибираємо повідомлення через 3 секунди
    };

  return (
    <footer className='footer'>
      <div className="footer__body">
        <div className="footer__promotion">
            <h5 className="footer__title">Sign up for Updates &Promotions</h5>
            <form className='footer__form form-footer' onSubmit={handleSubmit} action="#" method="post">
                <input 
                    className={`form-footer__input input ${error ? 'input--error' : ''}`}
                    type="email"
                    name="email"
                    id="email"
                    placeholder='name@email.com'
                    value={email} // Значення прив’язане до стану
                    onChange={handleEmailChange} // Обробник змін
                />
                <button className='form-footer__button button' type="submit">
                    Sign up
                </button>
            </form>
            {error && <p className="form-footer__error"> {error} </p>}
            {success && <p className="form-footer__success"> {success} </p>}
        </div>
        <ul className="footer__menu">
            {[
                { title: "Menu", href: "/menu"},
                { title: "About", href: "/about"},
                { title: "Join us", href: "/"},
            ].map((item, index) => (
                <li key={index} className="footer__item">
                    <NavLink className='footer__link' to={item.href}>{item.title}</NavLink>
                </li>
            ))}
        </ul>
      </div>
      <div className="footer__copyright">
        <div className="footer__privacy">&copy; 2024 Your Company, Inc. All rights reserved</div>
        <SocialIcons />
      </div>
    </footer>
  )
}

export default Footer
