import { React, useState } from 'react'
import styled from 'styled-components'

const Space = styled.p`
  margin-top:40px;
  margin-bottom:20px
`;

function AddGame({addNewGame}) {

    const [gameName,setGameName] = useState('')
    const [playersMin,setPlayersMin] = useState('')
    const [playersMax,setPlayersMax] = useState('')
    const [playTime,setPlayTime] = useState('')
    const [gameImgUrl,setGameImgUrl] = useState('')
    const [gameDescription,setGameDescription] = useState('')

    const onSubmitGame = (e) => {
        e.preventDefault()
        const newGame = {
            name: gameName,
            playersMin: playersMin,
            playersMax: playersMax,
            playTime: playTime,
            imgUrl: gameImgUrl,
            description: gameDescription
        }
        addNewGame(newGame)
        e.target.reset()
    }

    return(
        <div className="ui center aligned container">
            <div className="center-div">
            <form onSubmit={onSubmitGame} className="ui form">
                <div className="field">
                <label style={{color: '#C1BBDA', fontSize: '20px'}}>NAME</label>
                <input onChange={(e) => setGameName(e.target.value)} type="text" name="name" placeholder="Name"/>
                </div>
                <div className="field">
                <label style={{color: '#C1BBDA', fontSize: '20px'}}>GAME</label>
                <input onChange={(e) => setPlayersMin(e.target.value)}  type="text" name="player-min" placeholder="Player Min"/>
                </div>
                <div className="field">
                <label style={{color: '#C1BBDA', fontSize: '20px'}}>RATING</label>
                <input onChange={(e) => setPlayersMax(e.target.value)} type="number" name="player-max" placeholder="Player Max"/>
                </div>
                <div className="field">
                <label style={{color: '#C1BBDA', fontSize: '20px'}}>PLAY TIME</label>
                <input onChange={(e) => setPlayTime(e.target.value)} type="number" name="play-time" placeholder="Play Time"/>
                </div>
                <div className="field">
                <label style={{color: '#C1BBDA', fontSize: '20px'}}>GAME IMG URL</label>
                <input onChange={(e) => setGameImgUrl(e.target.value)} type="text" name="img" placeholder="Game Img URL"/>
                </div>
                <div className="field">
                <label style={{color: '#C1BBDA', fontSize: '20px'}}>GAME DESCRIPTION</label>
                <input onChange={(e) => setGameDescription(e.target.value)} type="text" name="description" placeholder="Game Description"/>
                </div>
            <button style={{border: '5px solid #C1BBDA', background:'white', color:'black'}} className="ui button" type="submit">Submit</button>
            </form>
        <Space></Space>
        <Space></Space>
        </div>
        </div> 
    )
}

export default AddGame