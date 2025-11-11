import React from 'react';

interface ShareButtonProps {
    verseText: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ verseText }) => {
    const handleShare = () => {
        const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(verseText)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <button onClick={handleShare} className="share-button">
            Compartilhar no WhatsApp
        </button>
    );
};

export default ShareButton;