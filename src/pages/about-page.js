import React from 'react';
import HeaderAboutPage from '../components/HeaderAboutPage';
import MeetDirectorsAboutPage from '../components/MeetDirectorsAboutPage';
import ReadyToStartHomepage from '../components/ReadyToStartHomepage';
import ClientsAboutPage from '../components/ClientsAboutPage';

const AboutPage = () => {
  return (
    <>
      <HeaderAboutPage />
      <MeetDirectorsAboutPage />
      <ClientsAboutPage />
      <ReadyToStartHomepage />
    </>
  );
};

export default AboutPage;
