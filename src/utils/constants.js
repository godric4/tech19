import { dev, cloud, hologram, ux, designer, quality, robot } from '../assets';

export const links = [
  { id: 4, url: '/about', pathName: 'About Us' },
  { id: 1, url: '/services', pathName: 'Our Services' },

  { id: 2, url: '/reviews', pathName: 'Reviews' },
  { id: 3, url: '/contact', pathName: 'Contact Us' },
];

export const services = [
  {
    name: 'CyberSecurity',
    desc: 'Protect your digital assets with cutting-edge cybersecurity solutions. Our team of professionals use the best software and  offer a robust defense against the latest trends in cyber threats for ultimate peace of mind.',
    imgUrl: quality,
    id: 16,
  },
  {
    name: 'Cloud Services',
    desc: 'Unlock limitless potential with our cutting-edge cloud services provider. Experience seamless scalability, enhanced security, and unrivaled reliability for your business.',
    imgUrl: cloud,
    id: 1,
  },
  {
    name: 'Product (UI/UX) design',
    desc: 'Revamp user experiences with our cutting-edge UI design services. Our team helps you elevate your business’ digital presence with sleek, intuitive, and engaging interfaces',
    imgUrl: ux,
    id: 2,
  },
  {
    name: 'Web Development',
    desc: 'Transform your online presence with our expert web development services. We create stunning, responsive websites tailored to your unique business needs',
    imgUrl: dev,
    id: 3,
  },
  {
    name: 'App/Software Development',
    desc: "Bring your app/software dreams to reality with our expert development team. We turn your ideas into engaging experiences. Let's create together!",
    imgUrl: designer,
    id: 4,
  },
  {
    name: 'Lego Robotics',
    desc: 'Discover cutting-edge robotics services with our LEGO Robotics provider. With our hands-on STEM exploration, we build, code and innovate the future.',
    imgUrl: robot,
    id: 5,
  },
];
