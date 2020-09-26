import styled from 'styled-components';

export const Follows = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 6rem;
  padding-right: 5%;

  font-size: 18px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  border-bottom: 1px solid rgba(250, 250, 250, 0.1);

  .div-tag-img {

    display: flex;
    align-items: center;
    width: 50%;

    .tag-yellow {
      height: 2.5rem;
      width: 0.65rem;
      background: #ffce00; 
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
      margin-right: 5%;
    }

    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 2px solid #fff;
      margin-left: 5%;
    }

  }

  .div-name-arrow {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

  }

`;