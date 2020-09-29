import React, { useContext } from 'react';

import {FiLogIn} from 'react-icons/fi';

import { useHistory } from 'react-router-dom';

import { DataContexts } from '../../../contexts/DataContexts';
import { NewDataContexts } from '../../../contexts/NewDataContexts';

import MenuBar from '../../../components/MenuBar';

import {
  Container, 
  Header, 
  Main, 
  PersonalInfos,
  InfosGithub, 
  Bio,
} from './style';

function HomeFollow() {

  const [ /* userData */, setUserData ] = useContext(DataContexts);
  const [ newUserData, /* setNewUserData */ ] = useContext(NewDataContexts);
  
  const history = useHistory();

  function saveNewUser() {
    setUserData([]);
    setUserData(newUserData);
    history.push("/home");
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
        <p>#{newUserData.login}</p>
        <p onClick={saveNewUser} >Salvar <FiLogIn className="icon-save" /></p>
      </Header>

      <Main>
        
        <img src={newUserData.avatar_url} alt="profile"/>

        <PersonalInfos> 
          <div className="div-tag-name" >         
              <span className="tag-yellow"/>
              <p className="name" >{newUserData.name}</p>
          </div> 
          <p className="email" >{newUserData.email}</p>
          <p className="city" >{newUserData.location}</p>
        </PersonalInfos>

        <InfosGithub >
          <div onClick={RedrectFollowers} className="followers" >
            <p className="number" >{newUserData.followers.number}</p>
            <p className="text" >Seguidores</p>
          </div>
          <div onClick={RedrectFollowing} className="following" >
            <p className="number" >{newUserData.following.number}</p>
            <p className="text" >Seguindo</p>
          </div>
          <div onClick={RedrectRepos} className="repositories" >
            <p className="number" >{newUserData.repos.number}</p>
            <p className="text" >Repos</p>
          </div>
        </InfosGithub>

        <Bio>
        <div className="div-bio" >
          <div className="div-tag-bio" >
            <span className="tag-yellow"/>
            <p className="title-bio" >BIO</p>
          </div>
          <p>{newUserData.bio}</p>
        </div>
        </Bio>
      </Main>
      <MenuBar />
    </Container>
  );
}

export default HomeFollow;