import React, { useState } from 'react';
import { generateImage } from '../services/aiService';

const ImageGenerator: React.FC<{ verseText: string }> = ({ verseText }) => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateImage = async () => {
        setLoading(true);
        setError(null);
        try {
            const image = await generateImage(verseText);
            setImageUrl(image);
        } catch (err) {
            setError('Failed to generate image. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="image-generator">
            <button onClick={handleGenerateImage} disabled={loading}>
                {loading ? 'Generating...' : 'Generate Image'}
            </button>
            {error && <p className="error">{error}</p>}
            {imageUrl && <img src={imageUrl} alt="Generated" />}
        </div>
    );
};

export default ImageGenerator;