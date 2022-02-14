import React from 'react'
import Game from './Game'

function GamesContainer({gameList}) {

   


  return (
    <div className="row">
        {gameList.map(game => <Game key={game.id} game={game} />)}
    </div>
  )
}

export default GamesContainer