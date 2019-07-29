import React from 'react';

import './styles.css';
import PlayerX from '../../img/X.png';
import PlayerO from '../../img/Circle.png';

const Player = ( props ) => {
    
    return(
        <button className="player">
            <img src={props.player} alt="X" />
        </button>
    )
};

export default Player