import React from 'react';
import {
  Page,
  Navbar,
  NavTitle,
  NavTitleLarge,
  Link,
  Toolbar,
  Block,
} from 'framework7-react';
import Dishes from '../components/dishes';

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar large>
      <NavTitle>MensaPassau</NavTitle>
      <NavTitleLarge>MensaWebPassau</NavTitleLarge>
    </Navbar>

    {/* Page content */}
    <Block strong>
      <h2>Discover the finest dishes from the mensa of the University of Passau.</h2>
    </Block>
    <Dishes></Dishes>
  </Page>
);
export default HomePage;