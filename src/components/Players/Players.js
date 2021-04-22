import React, { useState } from 'react';
import Player from '../Player-info/Player';
import Selected from '../Selection/Selected';

const Players = (props) => {
    const players = props.players
    const [count, setCount] = useState([])
    const handleAddPlayer = (player) => {
        const newCount = [...count, player]
        setCount(newCount)
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-8">
                    {
                        players.map(player =><Player key={player.id} handleAddPlayer={handleAddPlayer} player={player}></Player>)
                    }
                </div>
                <div className="col-md-4">
                    <Selected count={count}></Selected>
                </div>
            </div>
        </div>
    );
};

export default Players;