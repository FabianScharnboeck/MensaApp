import React from 'react';
import {
  Page,
  Navbar,
  NavTitle,
  NavTitleLarge,
  Link,
  Toolbar,
  Block,
  Menu,
  MenuDropdown,
  MenuDropdownItem,
  MenuItem,
  NavRight,
} from 'framework7-react';
import Dishes from '../components/dishes';
import { useState, useEffect } from 'react';


const HomePage = function () {

  const [locale, setLocale] = useState(null);
  
  useEffect(() => {
    fetch('./locale/de_DE.json')
    .then(res => res.json())
    .then((result) => setLocale(result));
  }, [0])

  function setLanguage(language) {
    fetch('./locale/'+ language +'.json')
    .then(res => res.json())
    .then((result) => setLocale(result));
  }
 
  console.log(locale);

  return (
    <Page name="home">
      {/* Top Navbar */}
      <Navbar large>
        <NavTitle>
          MensaWebApp
        </NavTitle>
        <NavRight>
        <Menu>
          <MenuItem text={locale == null ? "" : locale.languages.selectLanguage} dropdown>
            <MenuDropdown left>
              <MenuDropdownItem 
              text={locale == null ? "" : locale.languages.german}
              onClick={() => setLanguage('de_DE')}/>

              <MenuDropdownItem 
              text={locale == null ? "" : locale.languages.english}
              onClick={() => setLanguage('en_US')}/>
              <MenuDropdownItem
              text={locale == null ? "" : locale.languages.spanish}
              onClick={() => setLanguage('es_ES')}/>
            </MenuDropdown>
          </MenuItem>
        </Menu>
        </NavRight>
  
      </Navbar>
  
  
      {/* Page content */}
      <Block strong>
        <h2>Discover the finest dishes from the mensa of the University of Passau.</h2>
      </Block>
      <Dishes></Dishes>
    </Page>
  );
} 
export default HomePage;