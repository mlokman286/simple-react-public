import React from 'react';
import SelectPlayer from './SelectPlayer';

const Selected = (props) => {
    const count = props.count
    console.log(count);
    const budget = count.reduce((total,player) => total +parseInt(player.salary),0)
    return (
        <div className="sticky-top">
            <div>
                <h2 className='text-center'>Team Summery</h2>
                <hr/>
                <div>
                    <p>Total Selected: {count.length}</p>
                    <p>Total Budget: {budget} EUR</p>
                </div>
                <div>
                    <h4 className='text-center'>Select Players</h4>
                    <div>
                        {count.map((player => <SelectPlayer player={player}></SelectPlayer>))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Selected;