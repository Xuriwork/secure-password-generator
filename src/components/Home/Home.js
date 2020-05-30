import React, { useContext } from 'react';

import { Input, Slider, Toggle } from 'rsuite';
import ReactTooltip from 'react-tooltip';
import { ReactComponent as InfoIcon } from '../../assets/info-icon.svg';

import { LanguageContext } from '../../context/languageContext';
import Meter from '../Meter';
import LanguageDropdown from '../LanguageDropdown';

const Home = ({ 
  generatedPassword, 
  selectPassword, 
  sliderValue, 
  onSliderChange, 
  includeNumbersRef, 
  includeLettersRef, 
  includeSpecialCharactersRef,
  settings, 
  handleChangeSettings, 
  handleGeneratePassword
 }) => {

  const { dictionary } = useContext(LanguageContext);

  return (
    <div className='home-component'>
      <LanguageDropdown />
      <div className='home-content'>
        <h1>Secure Password Generator</h1>
        <p className='tooltip-paragraph'>
          {dictionary.strongPasswordQuestion}{' '}
          <InfoIcon
            className='info-icon'
            icon='info'
            data-tip
            data-for='infoTip'
          />
        </p>
        <ReactTooltip id='infoTip' place='top' effect='solid'>
          {dictionary.strongPasswordQuestionTooltip}
        </ReactTooltip>
        <label htmlFor='generated-password-input'>{dictionary.generatedPassword}</label>
        <Input
          readOnly
          className='generated-password-input'
          id='generated-password-input'
          value={generatedPassword}
          onClick={selectPassword}
        />
        <Meter password={generatedPassword} dictionary={dictionary} />
        <h3>{dictionary.settings}</h3>
        <label>{dictionary.length}: {sliderValue}</label>
        <Slider
          progress={true}
          min={4}
          max={512}
          defaultValue={sliderValue}
          onChange={onSliderChange} 
          className='slider' 
        />
        <div className='switch-container'>
          <label htmlFor='includeNumbers'>{dictionary.includeN}</label>
          <Toggle
            name='includeNumbers'
            id='includeNumbers'
            aria-hidden='true'
            ref={includeNumbersRef}
            defaultChecked={settings.includeNumbers}
            onChange={(value) => handleChangeSettings(value, includeNumbersRef)}
          />
        </div>
        <div className='switch-container'>
          <label>{dictionary.includeL}</label>
          <Toggle
            name='includeLetters'
            aria-hidden='true'
            ref={includeLettersRef}
            defaultChecked={settings.includeLetters}
            onChange={(value) => handleChangeSettings(value, includeLettersRef)}
          />
        </div>
        <div className='switch-container'>
          <label>{dictionary.includeSC}</label>
          <Toggle
            name='includeSpecialCharacters'
            aria-hidden='true'
            ref={includeSpecialCharactersRef}
            defaultChecked={settings.includeSpecialCharacters}
            onChange={(value) =>
              handleChangeSettings(value, includeSpecialCharactersRef)
            }
          />
        </div>
        <div className='button-container'>
          <button
            className='generate-password-button'
            onClick={handleGeneratePassword}
          >
            {dictionary.generatePasswordButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
