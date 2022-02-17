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
        <div class="ui center aligned container">
            <form onSubmit={onSubmitGame} class="ui form">
                <div class="field">
                <label>Name</label>
                <input onChange={(e) => setGameName(e.target.value)} type="text" name="name" placeholder="Name"/>
                </div>
                <div class="field">
                <label>Game</label>
                <input onChange={(e) => setPlayersMin(e.target.value)}  type="text" name="player-min" placeholder="Player Min"/>
                </div>
                <div class="field">
                <label>Rating</label>
                <input onChange={(e) => setPlayersMax(e.target.value)} type="text" name="player-max" placeholder="Player Max"/>
                </div>
                <div class="field">
                <label>Review</label>
                <input onChange={(e) => setPlayTime(e.target.value)} type="text" name="play-time" placeholder="Play Time"/>
                </div>
                <div class="field">
                <label>Review</label>
                <input onChange={(e) => setGameImgUrl(e.target.value)} type="text" name="img" placeholder="Game Img URL"/>
                </div>
                <div class="field">
                <label>Review</label>
                <input onChange={(e) => setGameDescription(e.target.value)} type="text" name="description" placeholder="Game Description"/>
                </div>
            <button class="ui button" type="submit">Submit</button>
            </form>
        <Space></Space>
        <Space></Space>
        </div> 
    )
}

export default AddGame