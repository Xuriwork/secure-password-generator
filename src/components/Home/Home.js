import React from 'react';

import { Input, Slider, Toggle, Icon } from 'rsuite';
import ReactTooltip from 'react-tooltip';

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

  return (
    <div className='home-component'>
      <div>
        <h1>Secure Password Generator</h1>
        <p className='tooltip-paragraph'>
          What is a strong password?{' '}
          <Icon icon='info' data-tip data-for='infoTip' />
        </p>
        <ReactTooltip id='infoTip' place='top' effect='solid'>
          A strong password is a password that contains a mix of letters,
          numbers, symbols and roughly 12-15 characters.
        </ReactTooltip>
        <label>Generated Password</label>
          <Input 
            readOnly
            className='generated-password-input' 
            id='generated-password-input' 
            value={generatedPassword} 
            onClick={selectPassword} 
          />
        <label>Length: {sliderValue}</label>
        <Slider
          progress 
          min={4} 
          max={512}
          defaultValue={sliderValue}
          onChange={onSliderChange}
          className='slider'
        />
        <h3>Settings</h3>
        <div className='switch-container'>
          <label htmlFor='includeNumbers'>Include numbers</label>
          <Toggle
            name='includeNumbers'
            ref={includeNumbersRef} 
            defaultChecked={settings.includeNumbers}
            onChange={(value) => handleChangeSettings(value, includeNumbersRef)}
          />
        </div>
        <div className='switch-container'>
          <label>Include letters</label>
          <Toggle
            name='includeLetters'
            ref={includeLettersRef} 
            defaultChecked={settings.includeLetters}
            onChange={(value) => handleChangeSettings(value, includeLettersRef)}
          />
        </div>
        <div className='switch-container'>
          <label>Include special characters</label>
          <Toggle
            name='includeSpecialCharacters'
            ref={includeSpecialCharactersRef} 
            defaultChecked={settings.includeSpecialCharacters}
            onChange={(value) => handleChangeSettings(value, includeSpecialCharactersRef)}
          />
        </div>
        <div className='button-container'>
          <button 
            className='generate-password-button' 
            onClick={handleGeneratePassword}>
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
