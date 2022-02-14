import React from 'react'
import Game from './Game'

function GamesContainer({gameList}) {

   


  return (
    <div>
        GamesContainer
        {gameList.map(game => <Game key={game.id} game={game} />)}

    </div>
  )
}

export default GamesContainer