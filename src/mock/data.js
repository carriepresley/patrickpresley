import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Patrick Presley', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Patrick Presley',
  subtitle: '',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/patrick-presley-12ab5b18/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Support your local Ray-Ban dealer!',
    info: '',
    info2: '',
    url: '',
    repo: 'https://www.ray-ban.com/usa/store-locator', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'presley.rayban@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/patrick-presley-12ab5b18/',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/patrick__presley/?hl=en',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/presleypatrick?lang=en',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
