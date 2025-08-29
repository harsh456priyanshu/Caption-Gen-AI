import { createContext, useState, useContext } from 'react';

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
    const [globalImagePreview, setGlobalImagePreview] = useState(null);
    const [globalCaption, setGlobalCaption] = useState('');
    const [globalSelectedFile, setGlobalSelectedFile] = useState(null);

    return (
        <ImageContext.Provider 
            value={{
                globalImagePreview,
                setGlobalImagePreview,
                globalCaption,
                setGlobalCaption,
                globalSelectedFile,
                setGlobalSelectedFile
            }}
        >
            {children}
        </ImageContext.Provider>
    );
};

export const useImageContext = () => useContext(ImageContext);
