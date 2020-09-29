import React, {useContext, useState} from 'react';
import Header from '../../components/Header';
import MenuBar from '../../components/MenuBar';
import { useHistory } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Loader from '../../assets/loaders.gif';
import { DataContexts } from '../../contexts/DataContexts'; 
import { NewDataContexts } from '../../contexts/NewDataContexts'; 
import { Container, Main, Follow } from './style';
import api from '../../services/api';


function Followers() {
  const [ userData, /* setUserData */ ] = useContext(DataContexts);
  const [ /* newUserData */,  setNewUserData ] = useContext(NewDataContexts);
  const [ loading, setLoading ] = useState(false);
  const [ /* error */, setError ] = useState(false);
  
  const numberFollowers = userData.followers.number;
  const AllFollowers = userData.followers.info.data;

  const history = useHistory();

  try {
    
    async function HomeFollow(login){
    
      setLoading(true)
      setError(false)
      const request = api.get(`users/${login}`)
      const response = await request;
      console.log(response.status)
  
      const requestFollowers = api.get(`users/${login}/followers?page=1&per_page=1`);
      const responseFollowers = await requestFollowers;
      const NumberFollowers = parseFloat(responseFollowers.data.length);
      const AllFollowers = (responseFollowers)
      console.log(AllFollowers)
  
      const requestFollowing = api.get(`users/${login}/following?page=1&per_page=1`);
      const responseFollowing = await requestFollowing;
      const NumberFollowing = parseFloat(responseFollowing.data.length);
      const AllFollowing = (responseFollowing)
      console.log(AllFollowing)
  
      const requestRepos = api.get(`users/${login}/repos?page=1&per_page=1`);
      const responseRepos = await requestRepos;
      const NumberRepos = parseFloat(responseRepos.data.length);
      const AllRepos = responseRepos.data;
      console.log(AllRepos)
  
      if (response.status === 200 ) {
        setLoading(false)
        const dataFollowUser = {
          login: response.data.login,
          name: response.data.name,
          email: response.data.email,
          avatar_url: response.data.avatar_url,
          location: response.data.location,
          bio: response.data.bio,
          followers: {
            number: NumberFollowers,
            info: AllFollowers
          },
          following: {
            number: NumberFollowing,
            info: AllFollowing
          },
          repos: {
            number: NumberRepos,
            info: AllRepos
          },
        }
        setNewUserData(dataFollowUser);
        console.log('data',userData);
      }
  
      history.push("/home-follow");
    }
  
  return (
    <Container>
      <Header number={numberFollowers} title="seguidores" />
      <Main  >
        {
          loading
          ? <img src={Loader} alt="loading..." className="loader"  />
          : ''
        }
        {
          AllFollowers.map( follow => (
            <Follow 
              onClick={() => HomeFollow(
                follow.login
              )} 
              key={follow.id} 
            >
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
  } catch {

  }
}

export default Followers;