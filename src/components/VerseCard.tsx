import React from 'react';
import { ShareButton } from './ShareButton';
import './VerseCard.css'; // Assuming you have a CSS file for styling

interface VerseCardProps {
    verse: {
        id: string;
        text: string;
        reference: string;
    };
}

const VerseCard: React.FC<VerseCardProps> = ({ verse }) => {
    return (
        <div className="verse-card">
            <h3>{verse.reference}</h3>
            <p>{verse.text}</p>
            <ShareButton verse={verse} />
        </div>
    );
};

export default VerseCard;