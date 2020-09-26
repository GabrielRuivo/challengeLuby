import React from 'react';

import {Headers} from './style';

import { useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

function Header({ number, title }) {

  const history = useHistory();

  function backToHome() {
    history.push("/home")
  }

  return(
    <Headers>
      <FiArrowLeft onClick={backToHome} className="arrow-left" />
        <div className="title-box">
          <p>{number} {title}</p>
        </div>
    </Headers>
  );
}

export default Header;