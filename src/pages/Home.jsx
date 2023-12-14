import { Link } from 'react-router-dom';
import { Hero, Reviews, Services } from '../components';
import { scope, bulb, focused, hologram } from '../assets';
import styled from 'styled-components';

const Home = () => {
  return (
    <Wrapper>
      <Hero />
      <section className='container'>
        <h3 className='text-center pt-4'>
          Who <span className='text-warning'>We Are</span>
        </h3>
        <p className=''>
          In a world driven by innovation and rapid technological advancements,
          staying ahead of the curve is paramount. At Tech19, we are the
          Ultimate destination for all things Tech-related. With our
          cutting-edge products, expert insights, and exceptional services, we
          are here to transform the way you experience technology.
        </p>
        <p>
          At Tech19, we believe that technology has the power to enhance lives,
          inspire creativity, and unlock endless possibilities. Our dedicated
          team of experts is constantly pushing the boundaries of what's
          possible, bringing you the latest and most innovative service that
          will revolutionize your world.
        </p>
        <Link to='/about' className='text-warning'>
          Learn More
        </Link>
      </section>
      <section className='container mt-3 mission'>
        <div className='row'>
          <div className='col-sm-4 mb-3 col-12 my-card '>
            <div className='shadow'>
              <div
                className='clip '
                style={{
                  backgroundImage: `url(${hologram})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              ></div>
              <div className='statement text-center'>
                <h5 className='mt-5'>Our Mission</h5>
                <p>
                  To help individuals and businesses with transformative and
                  innovative tech solutions that are simple, and enhance
                  productivity and their lives.
                </p>
              </div>
            </div>
          </div>

          <div className='col-sm-4 mb-3 col-12 my-card no-disp'>
            <div className='shadow'>
              <div
                className='clip '
                style={{
                  backgroundImage: `url(${hologram})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              ></div>
              <div className='statement text-center '>
                <h5>Godfrey Reggio</h5>
                <p>"It's not that we use technology, we live technology"</p>
                <p>Experience life the Tech19 way.</p>
              </div>
            </div>
          </div>
          <div className='col-sm-4 mb-3 col-12 my-card '>
            <div className='shadow'>
              <div
                className='clip '
                style={{
                  backgroundImage: `url(${hologram})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
              ></div>
              <div className='statement text-center'>
                <h5>Our Vision</h5>
                <p>
                  To create a world connected with technology to enhance the
                  Human experience and attempt the impossible. We aim to be
                  leaders in innovative technology solutions, promoting positive
                  change and shaping the future of tech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Reviews />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.section`
  .clip {
    clip-path: polygon(0 0, 100% 0%, 100% 66%, 50% 44%, 0 63%);
    /* clip-path: polygon(0 0, 100% 0%, 99% 63%, 47% 45%, 0 63%); */
    height: 250px;
  }

  .shadow {
    background-color: white;
    box-shadow: 1px 2px;
  }
  .statement {
    margin-top: -6rem;
    padding: 0.5rem;
  }
  .bg {
    background-color: rgba(62, 187, 236, 0.1);
  }
  @media screen and (max-width: 768px) {
    .no-disp {
      display: none;
    }
  }
`;
