import React, {useContext} from 'react';

import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';

import { FiArrowRight } from 'react-icons/fi';

import { DataContexts } from '../../contexts/DataContexts'; 

import { Container, Main, Follow } from './style';

function Following() {

  const [userData, /* setUserData */] = useContext(DataContexts);
  const numberFollowing = userData.following.number;
  const AllFollowing = userData.following.info.data;

  return (
    <Container>
      <Header title="Seguindo" number={numberFollowing}/>
      <Main>
        {
          AllFollowing.map( follow => (
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

export default Following;

/* import React from 'react';

import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import Follow from '../../components/Follow';

import { Container, Main } from './style';

function Following({title}) {
  return (
    <Container>
      <Header title="Seguindo" />
      <Main>
        <Follow />
      </Main>
      <MenuBar />
    </Container>
  );
}

export default Following;
 */
