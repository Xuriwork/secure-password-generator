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
        activeKey={siteLanguage.id} 
      >
        <Dropdown.Item eventKey="en" role="menuitem" aria-controls="tab-1-pane">English</Dropdown.Item>
        <Dropdown.Item eventKey="pl" role="menuitem" tabIndex={-1} aria-controls="tab-2-pane">Polski</Dropdown.Item>
        <Dropdown.Item eventKey="ro" role="menuitem" tabIndex={-1} aria-controls="tab-3-pane">Română</Dropdown.Item>
        <Dropdown.Item eventKey="ru" role="menuitem" tabIndex={-1} aria-controls="tab-4-pane">Русский</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default LanguageDropdown;
