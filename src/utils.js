import { MdOutlinePersonalInjury } from 'react-icons/md';
import { AiOutlineBarChart } from 'react-icons/ai';
import { GiAbstract013 } from 'react-icons/gi';
//
import img1 from './assets/avatar-kady.jpg';
import img2 from './assets/avatar-aiysha.jpg';
import img3 from './assets/avatar-arthur.jpg';

//Homepage
//
export const buildTeam = [
  {
    icon: <MdOutlinePersonalInjury />,
    title: 'Experienced Individuals',
    text:
      'Our network is made up of highly experienced professionals who arepassionate about what they do.',
  },
  {
    icon: <GiAbstract013 />,
    title: 'Easy to Implement',
    text:
      'Our processes have been refined over years of implementation meaning our teams always deliver.',
  },
  {
    icon: <AiOutlineBarChart />,
    title: 'Enhanced Productivity',
    text:
      'Our customized platform with in-built analytics helps you manage your distributed teams.',
  },
];
//
export const successStories = [
  {
    text:
      '"The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned."',
    name: 'Kady Baker',
    title: 'Product Manager at Bookmark',
    img: img1,
  },
  {
    text:
      '"We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!',
    name: 'Aiysha Reese"',
    title: 'Founder of Manage',
    img: img2,
  },
  {
    text:
      '"Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.',
    name: 'Arthur Clarke"',
    title: 'Co-founder of MyPhysio',
    img: img3,
  },
];
