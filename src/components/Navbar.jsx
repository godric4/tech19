import { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';

import { Link } from 'react-router-dom';
import Sidebar from './SideBar';
import { links } from '../utils/constants';
import { pattern } from '../assets';

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
          <div className='brand'>
            <img src={logo} alt='Logo' className='brand-logo' />
            <h3>TECH19</h3>
          </div>
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
      {/* <div
        className='pattern'
        style={{ backgroundImage: `url(${pattern})` }}
      ></div> */}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  position: fixed;
  z-index: 1000;
  color: black;
  .nav-bg {
    height: 5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    padding: 0 2rem;
    /* color: white; */

    margin-top: -1rem;
  }

  .pattern {
    width: 100vw;
    height: 1.5rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: white;
  }

  .scrolled {
    background: #ffffff;
    height: 100%;
    /* border-bottom: 2px solid goldenrod; */
  }

  .brand {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 0.8rem;

    h3 {
      margin-left: -1.5rem;
    }
  }
  .brand-logo {
    height: 4rem;
    width: 4rem;
    /* margin-top: 0.8rem; */
  }

  li {
    list-style-type: none;
    font-weight: bold;
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
      height: 3rem;
      width: 6rem;
    }

    .nav-links {
      display: none;
    }
  }
`;

export default Navbar;
