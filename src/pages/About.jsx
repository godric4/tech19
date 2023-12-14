import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { focused, hologram } from '../assets';

const About = () => {
  return (
    <Wrapper>
      <div
        className='mini-hero'
        style={{ backgroundImage: `url(${hologram})` }}
      >
        <h1 className='text-center text-warning'>About Us</h1> <br />
        <p className='text-center text-light '>
          With the right technology, great things can happen
        </p>
      </div>
      <div className='container mt-3'>
        <div className=''>
          <p>
            Welcome to Tech19, a digital solutions provider. As a proud
            subsidiary of the forward-thinking{' '}
            <Link
              to='https://19empire.netlify.app/'
              className='text-warning font-bold'
            >
              19Empire
            </Link>
            , we bring a fresh perspective and youthful vigor to the realm of
            technology solutions.
          </p>
          <div className=''>
            <h5>🚀 Our Journey </h5>
            <p>
              At Tech19, we embarked on our journey in the dynamic realm of
              technology in the year 2023. Born out of passion and a relentless
              pursuit of innovation, we are a young and vibrant tech agency with
              a mission to reshape the digital landscape . Our diverse and
              dynamic team brings together talent from various backgrounds, each
              contributing a unique perspective to the tech landscape. Together,
              we foster a culture of collaboration, creativity, and continuous
              learning
            </p>
          </div>
          <div className=''>
            <h5>🌐 Our Vision</h5>
            <p>
              In a world where change is the only constant, we aim to create a
              world connected with technology to enhance the Human experience
              and attempt the impossible. We aim to be leaders in innovative
              technology solutions, promoting positive change and shaping the
              future of tech.
            </p>
          </div>
          <div className=''>
            <h5>🌐 Our Mission</h5>
            <p>
              We are committed to help individuals and businesses with
              transformative and innovative tech solutions that are simple, and
              enhance productivity and their lives.
            </p>
          </div>

          <div className=''>
            <h5>💡 Innovation at the Core</h5>
            <p>
              Innovation is more than a buzzword for us; it's our driving force.
              We thrive on pushing boundaries, exploring the uncharted, and
              turning ideas into reality. Our team of young minds is fueled by
              curiosity and a commitment to creating technology that not only
              meets the present needs but also anticipates the future.
            </p>
          </div>
        </div>

        <div className=''>
          <h5>🤝 Client-Centric Approach</h5>
          <p>
            At Tech19, we understand that technology is not just about lines of
            code; it's about solving real-world problems. We work closely with
            our clients, building strong partnerships to understand their unique
            challenges and goals. Our solutions are tailor-made to meet their
            needs, ensuring not just satisfaction but delight.
          </p>
        </div>
        <div className=''>
          <h5> 🚀 Join Us on the Journey</h5>
          <p>
            Whether you're a client looking for innovative tech solutions or a
            talent eager to be part of a dynamic team, we invite you to join us
            on this exciting journey. Together, let's shape a future where
            technology knows no bounds. Welcome to the future.
          </p>
          <p>Welcome to Tech19. 🌐✨</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  /* background-color: red; */
  padding-top: 4rem;

  .mini-hero {
    height: 200px;
    width: 100vw;
    background-position: center;
    background-repeat: none;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h4 {
      font-weight: bold;
    }

    p {
      margin-top: -2rem;
      font-weight: bold;
    }
  }
`;
