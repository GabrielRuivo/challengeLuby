import React, {useContext, useState} from 'react';
import {DataContexts} from '../../contexts/DataContexts'; 

import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import {FiArrowRight} from 'react-icons/fi';
import {Container} from './style';

import LogoGit from '../../assets/logoGit.svg';
import Loader from '../../assets/loaders.gif';

function Login() {

  const [ /* userName */, setUserName ] = useContext(DataContexts);
  const [ /* userData */ , setUserData ] = useContext(DataContexts);

  const [ inputValue, setInputValue ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);
  const [ emptyInput, setEmptyInput ] = useState(false);

  const history = useHistory();

    async function authGithub(event) {
      
      try {
        setLoading(true)
        setError(false)
        event.preventDefault();
        setUserName(inputValue);
        console.log(inputValue);

        const request = api.get(`users/${inputValue}`)
        const response = await request;
        

        const requestFollowers = api.get(`users/${inputValue}/followers?page=1&per_page=1`);
        const responseFollowers = await requestFollowers;
        const NumberFollowers = parseFloat(responseFollowers.data.length);
        const AllFollowers = (responseFollowers)
        

        const requestFollowing = api.get(`users/${inputValue}/following?page=1&per_page=1`);
        const responseFollowing = await requestFollowing;
        const NumberFollowing = parseFloat(responseFollowing.data.length);
        const AllFollowing = (responseFollowing)
        

        const requestRepos = api.get(`users/${inputValue}/repos?page=1&per_page=1`);
        const responseRepos = await requestRepos;
        const NumberRepos = parseFloat(responseRepos.data.length);
        const AllRepos = responseRepos.data;
        

        if (response.status === 200 ) {
          const dataUser = {
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

          setUserData(dataUser)
          history.push('/home')
    
      }

      } catch {
        if (inputValue === '') {
          setEmptyInput(true)
        } else {
          setEmptyInput(false)
          setError(true)
        }
      }

      finally {
        setLoading(false);
      }
      
    }
  
  return(
    <Container>
      {
        loading
        ? <img src={Loader} alt="gif" />
        : <>
          <img src={LogoGit} alt="logo-github"/>
          <form onSubmit={authGithub} >
            <input 
              type="text" 
              placeholder="Usuário" 
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
            />
            {
              emptyInput ? <span className="required-field" >Campo Obrigatório</span> : ''
            }
            <button type="submit" >ENTRAR<FiArrowRight className="icon-arrow" /></button>
          </form>
          </>          
      }
      {
        error ? <span className="invalid-user" >Usuário Invalido</span> : ''
      }
    </Container>
  );
   
}

export default Login;



