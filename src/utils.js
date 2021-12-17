import { MdOutlinePersonalInjury } from 'react-icons/md';
import { AiOutlineBarChart } from 'react-icons/ai';
import { GiAbstract013 } from 'react-icons/gi';
//
import img1 from './assets/avatar-kady.jpg';
import img2 from './assets/avatar-aiysha.jpg';
import img3 from './assets/avatar-arthur.jpg';
//
import imgNikita from './assets/avatar-nikita.jpg';
import imgChristian from './assets/avatar-christian.jpg';
import imgCruz from './assets/avatar-cruz.jpg';
import imgDrake from './assets/avatar-drake.jpg';
import imgGriffin from './assets/avatar-griffin.jpg';
import imgAden from './assets/avatar-aden.jpg';

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

//About Page

export const directors = [
  {
    img: imgNikita,
    name: 'Nikita Marks',
    position: 'Founder & CEO',
    info:
      '“It always amazes me how much talent there is in every corner of the globe.”',
  },
  {
    img: imgChristian,
    name: 'Cristian Duncan',
    position: 'Co-founder & COO',
    info:
      '“Distributed teams required unique processes. You need to approach work in a new way.”',
  },
  {
    img: imgCruz,
    name: 'Cruz Hamer',
    position: ' Co-founder & CTO',
    info:
      "“Technology is at the forefront of enabling distributed teams. That's where we come in.”",
  },
  {
    img: imgDrake,
    name: 'Drake Heaton',
    position: 'Business Development Lead',
    info:
      '“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”',
  },
  {
    img: imgGriffin,
    name: ' Griffin Wise',
    position: 'Lead Marketing',
    info:
      '“Unique perspectives shape unique products, which is what you need to survive these days.”',
  },
  {
    img: imgAden,
    name: 'Aden Allan',
    position: ' Head of Talent',
    info:
      '“Empowered teams create truly amazing products. Set the north star and let them follow it.”',
  },
];

//Contact Page
export const contactPoints = [
  {
    icon: <MdOutlinePersonalInjury />,
    title: 'The quality of our talent network',
  },
  {
    icon: <GiAbstract013 />,
    title: 'Usage & implementation of our software',
  },
  {
    icon: <AiOutlineBarChart />,
    title: 'How we help drive innovation',
  },
];
