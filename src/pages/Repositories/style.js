import styled from 'styled-components';

export const Container = styled.div`
  background: #202020;
  height: 100vh;
  width:100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;


export const Main = styled.div`
  width: 100%;
  height: 84%;
  overflow: auto;
`;

export const Repo = styled.div`
  background: #272727;
  height: 10rem;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  padding-right: 10px;
  border-bottom: 1px solid rgba( 250,250,250, 0.1);

  .div-tag-title {
    display: flex;
    align-items: center;
    padding-top: 20px;

    .tag-yellow {
      height: 2.5rem;
      width: 0.65rem;
      background: #ffce00; 
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }

    .title-repo {
      font-size: 20px;
      font-weight: bold;
      color: #fff;
      margin-left: 10px;
    }

  }

  .description-repo {
    margin-left: 20px;
    font-size: 16px;
    color: #aaa;
  }

  .icons-stars-public-private {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 15px 18px;

    .stars {
      display: flex;

      .icon-star {
        color: #ffce00;
      }

      p {
        margin-left: 5px;
        color: #eee;
      }
    }
    .padlocks {
      .unlock {
        margin-right: 8px;
        color: #62BD1E;
      }
      .lock {
        color: #CA0A2A;
      }
    }
  }


`;