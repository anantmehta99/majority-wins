import { withRouter } from 'react-router-dom';
import React, { useState } from 'react';
import { Button } from '@material-ui/core';

const PlayGame = (props) => {
    const [fIncr, setFIncr] = useState(0);
    const [sIncr, setSIncr] = useState(0);

    const handleOnClickOne = () => {
        setFIncr(fIncr + 1);
    }
    const handleOnClickTwo = () => {
        setSIncr(sIncr + 1);
    }
    const { params } = props.location;

    return (
        <>
            <div className="main_div">
                <div className="game_div">
                    <h2>{params.first}</h2>
                    <Button onClick={handleOnClickOne}>Add Win</Button>
                    <h3>Wins:</h3>
                    <h3>{fIncr}</h3>
                    <h2>{params.second}</h2>
                    <Button onClick={handleOnClickTwo}>Add Win</Button>
                    <h3>Wins:</h3>
                    <h3>{sIncr}</h3>
                    <hr />
                    <h2>Winner:</h2>
                    {fIncr > sIncr ? <h3>{params.first}</h3> : sIncr > fIncr ? <h3>{params.second}</h3> : <h3>It's Tie!!!</h3>}
                    <h2>Win Difference:</h2>
                    <h3>{Math.abs(fIncr - sIncr)}</h3>
                </div>
            </div>
        </>
    );
}

export default withRouter(PlayGame);