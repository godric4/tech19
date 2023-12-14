import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { profile } from '../assets';
const Reviews = () => {
  return (
    <Wrapper>
      <div className='text-center'>
        <h5>
          See What Our Customers Are Saying <br />
          About Our Services
        </h5>
      </div>
      <div className='container'>
        <div className='row p-3  g-2'>
          <div className='col-sm-4'>
            <Card className=' bg-light py-3 px-2'>
              <p>
                Lorem ipsum dolor sit amet consectetur adiing elit. Cupiditate
                at ipsa unde nobis expedita incidunt, odit quam inventore! elit.
                Cupiditate vero veniam repellat ipsa unde nobis expedita
                incidunt,
              </p>
              <div className='d-flex review-user justify-content-center align-items-center'>
                <img src={profile} alt='' />
                <div className='mx-2'>
                  <h5>Ekezie Victor</h5>
                  <p>
                    CEO <span>Avant Tech</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>
          {/*  */}
          <div className='col-sm-4'>
            <Card className=' bg-light py-3 px-2'>
              <p>
                Lorem ipsum dolor sit amet consectetur adiing elit. Cupiditate
                at ipsa unde nobis expedita incidunt, odit quam inventore! elit.
                Cupiditate vero veniam repellat ipsa unde nobis expedita
                incidunt,
              </p>
              <div className='d-flex review-user justify-content-center align-items-center'>
                <img src={profile} alt='' />
                <div className='mx-2'>
                  <h5>Ekezie Victor</h5>
                  <p>
                    CEO <span>Avant Tech</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>
          {/*  */}
          <div className='col-sm-4'>
            <Card className=' bg-light py-3 px-2'>
              <p>
                Lorem ipsum dolor sit amet consectetur adiing elit. Cupiditate
                at ipsa unde nobis expedita incidunt, odit quam inventore! elit.
                Cupiditate vero veniam repellat ipsa unde nobis expedita
                incidunt,
              </p>
              <div className='d-flex review-user justify-content-center align-items-center'>
                <img src={profile} alt='' />
                <div className='mx-2'>
                  <h5>Ekezie Victor</h5>
                  <p>
                    CEO <span>Avant Tech</span>
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/*  */}
        </div>
      </div>
    </Wrapper>
  );
};

export default Reviews;

const Wrapper = styled.section`
  padding-top: 1.5rem;
  margin-top: 2rem;
  padding-bottom: 3rem;
  background-color: #ffc107;

  .review-user img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
