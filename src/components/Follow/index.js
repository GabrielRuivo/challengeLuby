import React, {useContext} from 'react';

import { FiArrowRight } from 'react-icons/fi';

import { Follows } from './style';

import { DataContexts } from '../../contexts/DataContexts'; 

function Follow() {

  const [userData, setUserData] = useContext(DataContexts);
  
  return(
    <Follows>
      <div className="div-tag-img" >
        <span className="tag-yellow" />
        <img src={userData.followers.info} alt="eu"/>
      </div>
      <div className="div-name-arrow" >
        <p className="name" >#GabrielRuivo</p>
        <FiArrowRight />
      </div>
    </Follows>
  );
}

/* export default Follow; */