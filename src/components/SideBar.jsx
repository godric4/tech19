import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { links } from '../utils/constants';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navbarRef = useRef(null);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    // Attach the click event listener to the document body
    document.addEventListener('click', handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  // ref = { navbarRef }

  return (
    <Wrapper>
      <div className='sidebar' ref={navbarRef}>
        {!isSidebarOpen ? (
          <button onClick={openSidebar} className='sidebar-btn'>
            <FaBars />
          </button>
        ) : (
          <>
            <button onClick={closeSidebar} className='sidebar-btn'>
              <FaTimes />
            </button>
            {/*  */}
            <ul className='sidebar-link'>
              {links.map((link) => {
                const { id, url, pathName } = link;

                return (
                  <li key={id}>
                    <Link to={url} className='nav-link' onClick={closeSidebar}>
                      {pathName}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  .sidebar {
    background-color: ${(props) => props.theme.primaryBackground};
    position: fixed;
    top: 0rem;
    right: 1.3rem;
    width: -100%;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    transition: var(--transition);
    z-index: 1000;

    .sidebar-btn {
      background: transparent;
      color: chocolate;
      border: none;
      font-size: 2rem;
      margin-top: -0.2rem;

      svg {
        width: 100%;
        height: 100%;
        pointer-events: none;
      }
    }
  }

  ul {
    text-align: left;
    background-color: ${({ theme }) => theme.background};
    position: absolute;
    right: -1.4rem;
    height: 93vh;
    width: 250px;
    color: ${({ theme }) => theme.primaryText};
    transition: var(--transition);
    overflow: hidden;
  }

  li {
    padding: 0.7rem 0;
    font-weight: 500;
    text-transform: capitalize;
    list-style-type: none;
    color: var(--navy);
  }

  li:nth-child(1) {
    margin-top: 2rem;
  }

  li:hover {
    color: chocolate;
    transition: var(--transition);
  }

  .close-sidebar {
    height: 40px;
    width: 40px;
    font-size: 1.3rem;
    background: var(--white);
    border: none;
    color: var(--dark);
    transition: var(--transition);
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
