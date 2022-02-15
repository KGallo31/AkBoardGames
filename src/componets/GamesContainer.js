import React from 'react'
import Game from './Game'
import {Card} from 'semantic-ui-react'

function GamesContainer({gameList}) {

  return (
    <Card.Group itemsPerRow={4}>
      {gameList.map(game => <Game key={game.id} game={game} />)}
    </Card.Group>
  )
}

export default GamesContainer