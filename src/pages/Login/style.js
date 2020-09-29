import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #2a2a2a;
  height: 100vh;
  width: 100%;

  .invalid-user {
    color: #d03434;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 17px;
    margin-top: 10px;
  }

  .required-field {
    color: #d03434;
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    margin-bottom: 20%;
    margin-left: 40%;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 40px;

    input {
      width: 18rem;
      height: 3rem;
      border: none;
      border-radius: 10px;
      padding: 0 10px;
      font-size: 17px;
    }

    button {

      display: flex;
      align-items: center;
      justify-content: center;

      background: #ffce00;
      color: #0b0802;
      width: 18rem;
      height: 3rem;
      border: none;
      border-radius: 10px;
      padding: 0 10px;
      margin-top: 10px;

      font-size: 15px;
      font-weight: bold;

      .icon-arrow {
        margin-left: 5px;
      }

    }
  }

`;