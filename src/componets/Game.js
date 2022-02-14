import React from 'react'
import CommentContainer from './CommentContainer'
// import { Card } from "semantic-ui-react";

function Game({game}) {
  return (
    // <Card>
    <div id="container" className="column">
        <div className='product-image'>
            <img src={game.imgUrl}/>
        </div>
        <div className='content'>
            <div className='product-details'>
               <h1>{game.name}</h1>
            </div>
            <div className='product.details'>
            <h2>{game.playersMin} - {game.playersMax}</h2>
                {game.description}
            </div>
        </div>
        <CommentContainer />
    </div>
    // </Card>
  )
}

export default Game