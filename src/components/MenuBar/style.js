import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  height: 8%;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: fixed;
  bottom: 0;
  max-width: 800px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .icon {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  p {
    font-size: 15px;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
  }

`;
export const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  :target {
    color: red;
  }
`;
export const Repos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Seguidores = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Seguindo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;