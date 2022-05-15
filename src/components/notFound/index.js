import React from 'react';
import styled from 'styled-components';

const Sorry = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #777777;
  font-family: arial;
  width: 375px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 70px;

  h1 {
    display: block;
    font-size: 180px;
    font-weight: bold;
    color: #99a7af;
    margin: 70px 0 0 0;
  }
  h2 {
    color: #de6c5d;
    font-family: arial;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: -1px;
    margin: -3px 0 39px;
  }
`;

// The component is render incase an invalid route is accessed
const NotFound = () => {
  return (
    <Sorry>
      <div>
        <h1 className='big'>404</h1>
        <h2>Page Not Found</h2>
        <h4>
          OOooppps!! The page you were trying to reach does not exist or maybe
          it has moved. You can start again from {' '}
          <a href='/'>here</a>{' '}
          or go back to the previous page.
        </h4>
      </div>
    </Sorry>
  );
};

export default NotFound;
