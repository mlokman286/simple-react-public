import React from 'react';

const SelectPlayer = (props) => {
    const {Name, img, salary} = props.player
    return (
        <div>
            <div className="d-flex shadow-lg m-2 p-2 bg-warning">
                <div className="m-0 p-0">
                    <img height="60px" width="60px" src={img} alt="" />
                </div>
                <div className="ms-3 border-start">
                    <p className="m-0"> {Name}</p>
                    <p> {salary} EUR </p>
                </div>
            </div>
        </div>
    );
};

export default SelectPlayer;