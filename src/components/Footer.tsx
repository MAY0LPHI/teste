import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Bible For You. Todos os direitos reservados.</p>
                <p>Desenvolvido com ❤️ por [Seu Nome]</p>
            </div>
        </footer>
    );
};

export default Footer;