import React from 'react';
import { useGlobalContext } from '../context';
import FindTalent from '../components/FindTalentHomepage';
import BuildTeam from '../components/BuildTeamHomepage';

const HomePage = () => {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <main
    // className={`${isSidebarOpen ? 'show-body-overlay' : 'body-overlay'}`}
    >
      <FindTalent />
      <BuildTeam />
    </main>
  );
};

export default HomePage;
