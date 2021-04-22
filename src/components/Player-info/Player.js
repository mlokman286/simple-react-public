import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const {img, Name, age, nationality, salary, weight, height} = props.player;

    return (
        <div>
            <div className="">
                <div className="card mb-3 shadow-lg p-3 mb-5 bg-body rounded" style={{maxWidth: "850px"}}>
                    <div className="row g-0">
                        <div className="col-md-4 align-self-center">
                            <img className="container-fluid" src={img} alt="..."/>
                        </div>
                            <div className="col-md-6 border-start border-warning border-5">
                                <div className="card-body">
                                    <h3 className="card-title text-danger">{Name}</h3>
                                    <p className="card-text">Age: {age}</p>
                                    <p className="card-text">Nationality: {nationality}</p>
                                    <p className="card-text">Salary: {salary} EUR</p>
                                    <p className="card-text">Height: {height} EUR</p>
                                    <p className="card-text">Weight: {weight} EUR</p>

                                    
                                </div>
                            </div>
                            <div className="col-md-2 align-self-center">
                                <div className="">
                                    <button onClick={() =>props.handleAddPlayer(props.player)} className="btn btn-warning container-fluid"><FontAwesomeIcon icon={faPlus} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Player;