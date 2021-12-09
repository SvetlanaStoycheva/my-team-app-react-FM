import React from 'react';
import { useGlobalContext } from '../context';
import FindTalent from '../components/FindTalent';

const HomePage = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <main
    // className={`${isSidebarOpen ? 'show-body-overlay' : 'body-overlay'}`}
    >
      <FindTalent />
    </main>
  );
};

export default HomePage;
