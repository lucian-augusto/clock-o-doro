import React from 'react';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p className="copyright">© Lucian Augusto {year}</p>
        </footer>
    );
}

export default Footer;