import React, { createContext, useContext, useState } from 'react';
import { languageOptions, languageList } from '../languages/languages';

export const LanguageContext = createContext({
    language: languageOptions[0],
    dictionary: languageList[languageOptions[0].id]
});

export const LanguageProvider = (props) => {
    const languageContext = useContext(LanguageContext);
    const [siteLanguage, setSiteLanguage] = useState(localStorage.getItem('lang') ?? languageContext.language);
    const [dictionary, setDictionary] = useState(() => {
        if (localStorage.getItem('lang')) {
            const localStorageLang = languageList[JSON.parse(localStorage.getItem('lang')).id];
            return localStorageLang;
        }
        return languageContext.dictionary;
    });
    
    const value = {
        siteLanguage,
        dictionary,
        setLanguage: (selectedLanguage) => {
            setSiteLanguage(selectedLanguage);
            setDictionary(languageList[selectedLanguage.id]);
            localStorage.setItem('lang', JSON.stringify(selectedLanguage))
        }
    };

    return (
        <LanguageContext.Provider value={value}>
            {props.children}
        </LanguageContext.Provider>
    )
};

