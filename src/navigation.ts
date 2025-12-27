import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Founder',
      links: [
        {
          text: 'Key People',
          href: getPermalink('/homes/saas'),
        },
     
      ],
    },
    {
      text: 'Donation',
      links: [
        {
          text: 'Features (Anchor Link)',
          href: getPermalink('/#features'),
        },
        
      ],
    },
    {
      text: '5 year Plan',
      links: [
        {
          text: 'Lead Generation',
          href: getPermalink('/landing/lead-generation'),
        },
        
      ],
    },
    {
      text: 'Measure of Success',
      links: [
        {
          text: 'Blog List',
          href: getBlogPermalink(),
        },
        
      ],
    },
    {
      text: 'Others',
      href: '#',
    },
  ],
  
};

export const footerData = {
  links: [
    {
      title: 'Education',
      links: [
        { text: 'Regular school', href: '#' },
        { text: 'After School', href: '#' },
      
      ],
    },
    {
      title: 'Elderly Care',
      links: [
        { text: 'Support Elederly People', href: '#' },
        
      ],
    },
    {
      title: 'Medical Support',
      links: [
        { text: 'Provide Medical Support', href: '#' },
      
      ],
    },
    {
      title: 'Building Future',
      links: [
        { text: 'Establish Technical School', href: '#' },
       
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo"> Arthelokyo</a> · All rights reserved.
  `,
};