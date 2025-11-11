import React from 'react';
import { useParams } from 'react-router-dom';
import VerseCard from '../components/VerseCard';
import TTSPlayer from '../components/TTSPlayer';
import ImageGenerator from '../components/ImageGenerator';
import { fetchVerseById } from '../services/bibleApi';

const Verse = () => {
    const { id } = useParams();
    const [verse, setVerse] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const getVerse = async () => {
            const fetchedVerse = await fetchVerseById(id);
            setVerse(fetchedVerse);
            setLoading(false);
        };

        getVerse();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!verse) {
        return <div>Verse not found</div>;
    }

    return (
        <div>
            <VerseCard verse={verse} />
            <TTSPlayer text={verse.text} />
            <ImageGenerator text={verse.text} />
        </div>
    );
};

export default Verse;