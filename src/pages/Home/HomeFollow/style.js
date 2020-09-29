import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: #202020;
  height: 100vh;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 20vh;
  width: 100%;
  padding: 0 15px;

  max-width: 800px;

  p + p {
    display: flex;
    align-items: center;
    color: #acacac;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;

    .icon-save {
      margin-left: 5px;
      color: #228b22;
      cursor: pointer;
    }
  }

  p {
    margin-top: -50px;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
  }
`;

export const Main = styled.div`
  background: #292929;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  img {
      height: 110px;
      width: 110px;
      border: 2px solid #fff;
      border-radius: 50%;
      margin: -50px auto;
      position: absolute;
      top: 0;
    }
  
`;

export const PersonalInfos = styled.div`
  height: 25vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;

  .div-tag-name {

    display: flex;
    align-items: center;
    margin-top: 30px;

    .tag-yellow {
      height: 3rem;
      width: 0.75rem;
      background: #ffce00; 
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }

    .name {
      font-size: 25px;
    }

    p {
      margin-left: 10px;
      color: #fff;
    }
  }

  p {
    margin-left: 25px;
    font-size: 20px;
    color: #ddd;
  }

`;

export const InfosGithub = styled.div`
  height: 8rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;
  background: #383838;

  .followers, 
  .following, 
  .repositories {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .number {
      font-size: 45px;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bold;
      color: #fff;
    }

    .text {
      font-size: 16px;
      font-family: Arial, Helvetica, sans-serif;
      color: #ddd;
    }

  }
  
`;

export const Bio = styled.div`
  height: 32vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 0rem;
  margin-top: 30px;

  .div-bio {
    width: 100%;
    height: 7rem;

    p {
    margin-left: 25px;
    font-size: 15px;
    color: #ddd;
  }

  .div-tag-bio {

    display: flex;
    align-items: center;
    margin-top: -3rem;

    .tag-yellow {
      height: 3rem;
      width: 0.75rem;
      background: #ffce00; 
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }

    .title-bio {
      font-size: 30px;
      font-weight: bold;
    }

    p {
      margin-left: 10px;
      color: #fff;
    }
  }
  }

  
`;

