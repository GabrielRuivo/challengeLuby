import React, {useContext} from 'react'; 

import { FiStar, FiLock, FiUnlock } from 'react-icons/fi';

import { Main, Repo, Container } from './style';

import { DataContexts } from '../../contexts/DataContexts'; 

import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';

function Repositories() {

  const [userData, /* setUserData */] = useContext(DataContexts);
  const numberRepos = userData.repos.number;

  return (
    <Container>
      <Header number={numberRepos} title="Repositórios" />
      <Main>

        {
          userData.repos.info.map( repo => (
            <Repo key={repo.id} >
              <div className="div-tag-title" >
                <span className="tag-yellow" />
                <p className="title-repo" >{repo.name}</p>
              </div>

              <p className="description-repo" >
                {repo.description}
              </p>

              <div className="icons-stars-public-private" >
                <div className="stars">
                  <FiStar className="icon-star" />
                  <p>{repo.stargazers_count}</p>
                </div>
                <div className="padlocks">
                  <FiUnlock className="unlock" />
                  <FiLock className="lock"/>
                </div>
              </div>
            </Repo>  
          ))
        }

        
      </Main>
      <MenuBar className="menubar" />
    </Container>
  );
} 

export default Repositories;