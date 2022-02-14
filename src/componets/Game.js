import React from 'react'
import CommentContainer from './CommentContainer'
// import { Card } from "semantic-ui-react";

function Game({game}) {
  return (
    // <Card>
    <div>
        <div className='image'>
            <img src={game.imgUrl}/>
        </div>
        <div className='content'>
            <div className='name'>
                {game.name}
            </div>
            <div className='players'>
                {game.playersMin} - {game.playersMax}
            </div>
            <div className='description'>
                <p>
                    {game.description}
                </p>
            </div>
        </div>
        <CommentContainer />
    </div>
    // </Card>
  )
}

export default Game