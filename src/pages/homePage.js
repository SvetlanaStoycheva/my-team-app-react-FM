import React from 'react';
// import { useGlobalContext } from '../context';
import FindTalent from '../components/FindTalentHomepage';
import BuildTeam from '../components/BuildTeamHomepage';
import SuccesStoriesHomepage from '../components/SuccesStoriesHomepage';
import ReadyToStartHomepage from '../components/ReadyToStartHomepage';

const HomePage = () => {
  // const { isSidebarOpen } = useGlobalContext();
  return (
    <main
    // className={`${isSidebarOpen ? 'show-body-overlay' : 'body-overlay'}`}
    >
      <FindTalent />
      <BuildTeam />
      <SuccesStoriesHomepage />
      <ReadyToStartHomepage />
    </main>
  );
};

export default HomePage;
