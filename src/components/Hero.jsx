import styled from 'styled-components';
import { focused, heroBg, logo } from '../assets';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <Wrapper className='' style={{ backgroundImage: `url(${heroBg})` }}>
      <div className='hero-msg'>
        <div className=''>
          <h1>Elevate Your Digital Experience</h1>
          <h4>Transform Your Ideas Into Reality</h4>

          <div className='hero-button'>
            <Link to='/about' className='cta'>
              Discover our solutions
            </Link>
          </div>
        </div>
        {/* <div className='side-image'>
          <img src={focused} alt='' />
        </div> */}
      </div>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.section`
  height: 100vh;
  /* width: 100vw; */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 1.5rem; */
  /* overflow: hidden; */
  clip-path: polygon(0 10%, 100% 0, 100% 90vh, 0 100%);

  .hero-msg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: var(--primary);
    /* margin-top: -6rem; */

    h1 {
      font-size: 3rem;
    }

    .hero-button {
      margin-top: 2rem;
    }
  }

  @media screen and (max-width: 768px) {
    height: 100vh;
    .hero-msg {
      /* display: block; */

      padding: 1rem;

      h1 {
        /* font-size: 2.5rem; */
      }
    }
    .logo-img img {
      display: none;
    }
  }
`;
