import styled from 'styled-components';

import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { logo } from '../assets';

const Footer = () => {
  return (
    <Wrapper className='  py-5'>
      <Container>
        <Row>
          <Col md={6}>
            <h3>Contact Us</h3>
            <p>Get in touch with our experts</p>
            <div className=''>
              <p>
                <FaEnvelope /> <span>tech19@gmail.com</span>
              </p>
              <p>
                <FaPhone /> <span>+234 909 4567 342</span>
              </p>
            </div>
          </Col>
          <Col md={6}>
            <Form>
              <Form.Group controlId='formName'>
                <Form.Label>Your Name</Form.Label>
                <Form.Control type='text' placeholder='Enter your name' />
              </Form.Group>

              <Form.Group controlId='formEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter your email' />
              </Form.Group>

              <Form.Group controlId='formMessage'>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as='textarea'
                  rows={3}
                  placeholder='Your message'
                />
              </Form.Group>

              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <div className='text-center'>
        <div className=''>
          <img src={logo} alt='' />
        </div>
        <div className=''>&copy; 2023 Tech19. All rights reserved </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  background-color: var(--grey);
`;
