import React, {useContext} from 'react';

import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';

import { FiArrowRight } from 'react-icons/fi';

import { DataContexts } from '../../contexts/DataContexts'; 

import { Container, Main, Follow } from './style';

function Followers() {

  const [userData, /* setUserData */] = useContext(DataContexts);
  const numberFollowers = userData.followers.number;
  const AllFollowers = userData.followers.info.data;

  return (
    <Container>
      <Header number={numberFollowers} title="seguidores" />
      <Main>
        {
          AllFollowers.map( follow => (
            <Follow key={follow.id} >
              <div className="div-tag-img" >
                <span className="tag-yellow" />
                <img src={follow.avatar_url} alt="eu"/>
              </div>
              <div className="div-name-arrow" >
              <p className="name" >#{follow.login}</p>
                <FiArrowRight />
              </div>
            </Follow>
          ) )
        }
      </Main>
      <MenuBar />
    </Container>
  );
}

export default Followers;