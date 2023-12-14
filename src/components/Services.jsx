import { FaCaretDown } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { services } from '../utils/constants';
import { focused } from '../assets';
import { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Wrapper>
      <div className=' mt-4 bg-warnng'>
        <h3 className='text-center'>
          What <span className='text-warning'>We Offer</span>
        </h3>
        <p className='text-center'>Cutting Edge Solutions For Every Need</p>

        <div className='container'>
          <div className='row'>
            {services.map((service, index) => {
              const { name, desc, imgUrl, id } = service;
              return (
                <div
                  data-aos='zoom-in-up'
                  className=' col-sm-6 col-12 mb-3'
                  key={id}
                >
                  <div className='service-card '>
                    <img src={imgUrl} alt={`${name} image`} />
                    <div className='mx-2 pt-3 '>
                      <h5 className=''>{name}</h5>
                      <p>{desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.section`
  button {
    background-color: transparent;
    border: none;
  }

  .service-card {
    display: flex;
    background-color: var(--grey);
    justify-content: center;

    img {
      width: 200px;
      display: block;
      object-fit: cover;
      transition: var(--transition);
      height: 200px;
    }
  }

  @media screen and (max-width: 888px) {
    .service-card {
      flex-direction: column;
      img {
        width: 100%;
      }
    }
  }
`;
