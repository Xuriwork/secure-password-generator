import React, { useState, useRef, useEffect, useCallback, useContext } from 'react';

import cogoToast from 'cogo-toast';

import { customRandom } from 'nanoid';
import seedrandom from 'seedrandom';

import Home from './Home';
import { LanguageContext } from '../../context/languageContext';

const HomeContainer = () => {

    const { dictionary } = useContext(LanguageContext);

    const [generatedPassword, setGeneratedPassword] = useState('');
    const [sliderValue, setSliderValue] = useState(15);
    const [settings, setSettings] = useState({
        includeNumbers: true,
        includeLetters: true,
        includeSpecialCharacters: false,
    });

    const includeNumbersRef = useRef(null);
    const includeLettersRef = useRef(null);
    const includeSpecialCharactersRef = useRef(null);

    const _settings = 
    (settings.includeNumbers || 
    settings.includeLetters || 
    settings.includeSpecialCharacters);

    const handleGeneratePassword = useCallback(() => {
        if (_settings === false) return cogoToast.error(dictionary.noOptionSelectedMessage);

        const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numeric = '0123456789';
        const specialCharacters = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

        const settingsArray = [
        ...(settings.includeLetters ? alphabet : []),
        ...(settings.includeNumbers ? numeric : []),
        ...(settings.includeSpecialCharacters ? specialCharacters : [])
        ];

        const stringedSettingsArray = settingsArray.toString().replace(/,/g, '');

        const rng = seedrandom(Math.seedrandom);
        const getSize = (size) => (new Uint8Array(size)).map(() => 256 * rng());
        const createPassword = customRandom(stringedSettingsArray, sliderValue, getSize);

        const _generatedPassword = createPassword();
        setGeneratedPassword(_generatedPassword);
    }, [sliderValue, _settings, settings, dictionary.noOptionSelectedMessage]);

    useEffect(() => {
        handleGeneratePassword();
    }, [handleGeneratePassword]);

    const onSliderChange = (value) => {
        if (_settings === false) return;
        setSliderValue(value);
    };

    const handleChangeSettings = (value, ref) => {
        const name = ref.current.props.name;
        setSettings({...settings, [name]: value});
    };

    const Clipboard = () => '📋';
    
    const selectPassword = (e) => {
        e.target.focus();
        e.target.select();
        document.execCommand('copy');
        cogoToast.success('Copied to clipboard!', { position: 'top-right', renderIcon: Clipboard });
    };

    return (
        <Home 
            generatedPassword={generatedPassword} 
            selectPassword={selectPassword} 
            sliderValue={sliderValue} 
            onSliderChange={onSliderChange} 
            includeNumbersRef={includeNumbersRef}
            includeLettersRef={includeLettersRef}
            includeSpecialCharactersRef={includeSpecialCharactersRef}
            settings={settings}
            handleChangeSettings={handleChangeSettings}
            handleGeneratePassword={handleGeneratePassword} 
        />
    )
}

export default HomeContainer;
