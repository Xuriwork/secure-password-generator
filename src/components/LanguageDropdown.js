import React, { useContext } from 'react';
import { Dropdown } from 'rsuite';

import { LanguageContext } from '../context/languageContext';
import { languageOptions } from '../languages/languages';
import TranslateIcon from '../assets/translate.svg';

export const LanguageDropdown = () => {
  const { siteLanguage, setLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (value) => {
    const selectedLanguage = languageOptions.find(item => item.id === value);
    setLanguage(selectedLanguage);
  };

  return (
    <div className='dropdown-container'>
      <Dropdown 
        onSelect={handleLanguageChange}
        icon={
          <img src={TranslateIcon} 
          alt='site language' 
          className='translate-icon' />
        } 
        className='dropdown' 
        activeKey={siteLanguage.id}>
        <Dropdown.Item eventKey="en">English</Dropdown.Item>
        <Dropdown.Item eventKey="pl">Polski</Dropdown.Item>
        <Dropdown.Item eventKey="ro">Română</Dropdown.Item>
        <Dropdown.Item eventKey="ru">Русский</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default LanguageDropdown;
