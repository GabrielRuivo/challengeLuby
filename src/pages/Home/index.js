import React, { useContext } from 'react';

import {FiLogOut} from 'react-icons/fi';

import { useHistory } from 'react-router-dom';

import { DataContexts } from '../../contexts/DataContexts'; 

import MenuBar from '../../components/MenuBar';

import {
  Container, 
  Header, 
  Main, 
  PersonalInfos,
  InfosGithub, 
  Bio,
} from './style';

function Home() {

  const [userData, setUserData] = useContext(DataContexts);
  
  const history = useHistory();

  function Logout () {
    setUserData([]);
    history.push('/');
  }

  function RedrectFollowers(){
    history.push('/followers');
  }

  function RedrectFollowing(){
    history.push('/following');
  }

  function RedrectRepos(){
    history.push('/repositories');
  }
  
  return(
    <Container>
      <Header>
        <p>#{userData.login}</p>
        <p onClick={Logout} >Sair <FiLogOut className="icon-out" /></p>
      </Header>

      <Main>
        
        <img src={userData.avatar_url} alt="profile"/>

        <PersonalInfos> 
          <div className="div-tag-name" >         
              <span className="tag-yellow"/>
              <p className="name" >{userData.name}</p>
          </div> 
          <p className="email" >{userData.email}</p>
          <p className="city" >{userData.location}</p>
        </PersonalInfos>

        <InfosGithub >
          <div onClick={RedrectFollowers} className="followers" >
            <p className="number" >{userData.followers.number}</p>
            <p className="text" >Seguidores</p>
          </div>
          <div onClick={RedrectFollowing} className="following" >
            <p className="number" >{userData.following.number}</p>
            <p className="text" >Seguindo</p>
          </div>
          <div onClick={RedrectRepos} className="repositories" >
            <p className="number" >{userData.repos.number}</p>
            <p className="text" >Repos</p>
          </div>
        </InfosGithub>

        <Bio>
          <div className="div-bio" >
            <div className="div-tag-bio" >
              <span className="tag-yellow"/>
              <p className="title-bio" >BIO</p>
            </div>
            <p>{userData.bio}</p>
          </div>
        </Bio>
      </Main>
      <MenuBar />
    </Container>
  );
}

export default Home;