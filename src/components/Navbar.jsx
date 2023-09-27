import { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';

import { Link } from 'react-router-dom';
import Sidebar from './SideBar';
import { links } from '../utils/constants';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      <div className={`nav-bg ${scrolling ? 'scrolled' : ''}`}>
        <Link to='/'>
          {' '}
          <img src={logo} alt='Logo' className='brand-logo' />
        </Link>

        <ul className='nav-links'>
          {links.map((link) => {
            const { id, url, pathName } = link;
            return (
              <li key={id} className='nav-link'>
                <Link to={url}>{pathName}</Link>
              </li>
            );
          })}
        </ul>

        <div className='sidebar'>
          <Sidebar />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  .nav-bg {
    background: ${({ theme }) => theme.background};
    height: 4rem;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: 0 2rem;
    color: ${({ theme }) => theme.primaryText};
    z-index: 100;
    margin-top: -1rem;
  }

  .scrolled {
    background: ${({ theme }) => theme.background};
    border-bottom: 3px solid goldenrod;
    color: var(--navy);
  }

  .brand-logo {
    height: 4rem;
    width: 4rem;
    margin-top: 0.8rem;
  }

  .nav-links {
    display: flex;
    padding-right: 1rem;
    margin-top: 2.5rem;
    font-weight: 500;

    .nav-link {
      margin: 0 0.5rem;
      a:hover {
        color: goldenrod;
        transition: var(--transition);
      }
    }
  }

  .sidebar {
    display: none;
  }

  /* media queries */
  @media screen and (max-width: 992px) {
    .sidebar {
      display: block;
      height: 2rem;
      width: 1.5rem;
    }

    .brand-logo {
      margin-left: -2rem;
      height: 6rem;
      width: 6rem;
    }

    .nav-links {
      display: none;
    }
  }
`;

export default Navbar;
