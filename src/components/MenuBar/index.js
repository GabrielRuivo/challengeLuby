import React from 'react';

import { useHistory } from 'react-router-dom';

import { FiHome, FiGithub,  } from 'react-icons/fi';
import {BsPeople} from 'react-icons/bs';

import {
  Container, 
  Home, 
  Repos, 
  Seguidores, 
  Seguindo
} from './style';

function MenuBar() {

  const history = useHistory();

  function redrectHome() {
    history.push("/home")
  }
  function redrectRepos() {
    history.push("/repositories")
  }
  function redrectFollowers() {
    history.push("/followers")
  }
  function redrectFollowing() {
    history.push("/following")
  }

  return(
    <Container>

      <Home onClick={redrectHome} >
        <FiHome className="icon" />
        <p>Home</p>
      </Home>

      <Repos onClick={redrectRepos} >
        <FiGithub  className="icon" />
        <p>Repos</p>
      </Repos>

      <Seguidores onClick={redrectFollowers} >
        <BsPeople className="icon" />
        <p>Seguidores</p>
      </Seguidores>

      <Seguindo onClick={redrectFollowing} >
        <BsPeople className="icon" />
        <p>Seguindo</p>
      </Seguindo>

    </Container>
  );
}

export default MenuBar;