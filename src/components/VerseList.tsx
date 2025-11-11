import React from 'react';
import VerseCard from './VerseCard';

interface Verse {
  id: string;
  text: string;
  reference: string;
}

interface VerseListProps {
  verses: Verse[];
}

const VerseList: React.FC<VerseListProps> = ({ verses }) => {
  return (
    <div className="verse-list">
      {verses.length > 0 ? (
        verses.map((verse) => (
          <VerseCard key={verse.id} verse={verse} />
        ))
      ) : (
        <p>Nenhum versículo encontrado.</p>
      )}
    </div>
  );
};

export default VerseList;