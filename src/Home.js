import React, {  useState } from 'react';
import { Button } from '@material-ui/core';

const Home = (props) =>{

    const[playerName, setPlayerName] = useState({
        first:'',
        second:''
    });

    const handleOnChange = (event) =>{
        const name= event.target.name;
        const value= event.target.value;

        setPlayerName((previous)=>{
            if(name==='first'){
                return{
                    first : value,
                    second : previous.second
                } 
            } else if(name==='second'){
                return{
                    first:previous.first,
                    second:value
                }
            }
        });
        
    }

    const handleOnSubmit = (event) =>{
        event.preventDefault();
        if(playerName.first.length && playerName.second.length){
            props.history.push({
                pathname: 'PlayGame',
                params : {
                    first : playerName.first,
                   second : playerName.second,

                }

            })
        }
        else{
            alert('Please Enter Name');
        }
    }
    return(
        <>
        <div className="main_div">
        
           <div className="center_div"> 
        <form onSubmit={handleOnSubmit}>
            <label>First Player Name:<br/></label>
            <input
            type="text"
            name="first"
            value={playerName.first}
            onChange={handleOnChange}></input>
            <label><br/>Second Player Name:<br/></label>
            <input
            type="text"
            name="second"
            value={playerName.second}
            onChange={handleOnChange}></input>
            <br/>
            
            <Button type="submit">Continue</Button>
           

        </form>
            </div>
            </div>
        
        </>
    );
}

export default Home;