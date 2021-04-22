import React from 'react';

const SelectPlayer = (props) => {
    const {Name, img, salary} = props.player
    return (
        <div>
            <div className="row shadow-lg m-2 p-2 bg-warning">
                <div className="col-md-4">
                    <img className="container-fluid" src={img} alt="" />
                </div>
                <div className="col-md-8">
                    <p className="m-0"> {Name}</p>
                    <p> {salary} EUR </p>
                </div>
            </div>
        </div>
    );
};

export default SelectPlayer;