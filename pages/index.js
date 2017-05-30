import React from 'react';

import Header from '../components/Header';
import Main from '../components/Main';
import Social from '../components/Social';
import Avatar from '../components/Avatar';
import H1 from '../components/H1';
import H2 from '../components/H2';

export default () => (
  <div>
    <Header />
    <Main>
      <Avatar />
      <H1>Yeison Daza</H1>
      <H2>JavaScript Developer | Technical Writer</H2>
      <Social />
    </Main>
  </div>
);
