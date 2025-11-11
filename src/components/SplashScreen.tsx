import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './SplashScreen.css'; // Importar estilos específicos para a tela de splash

const SplashScreen: React.FC = () => {
    const history = useHistory();

    useEffect(() => {
        const timer = setTimeout(() => {
            history.push('/home'); // Redireciona para a tela Home após 3 segundos
        }, 3000);

        return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
    }, [history]);

    return (
        <div className="splash-screen">
            <h1>Bible For You</h1>
            <div className="loader"></div> {/* Ícone animado de carregamento */}
        </div>
    );
};

export default SplashScreen;