import React from 'react';
const Footer = (props)=> {
    return (
        <footer className="footer">
            <div className="wrapper">
                <a className="footer__contact" href="mailto:contact@yours-news.com">Contact</a>
                <div className="footer__box">
                    <p>Made by</p>
                    <a className="footer__logo" href="https://www.lubomskirafal.pl" target="blank"><img className="footer__logo-img" src="./Lubomski-logo.png" alt="www.lubomskirafal.pl"/>Lubomski</a>
                </div>
                <button 
                    onClick={props.showCookies}
                    className="footer__btn">
                    Privacy
                </button>
            </div>
        </footer>
    )
}

export default Footer;