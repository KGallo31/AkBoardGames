import React from 'react'
import { Card, Button} from "semantic-ui-react";

function Game({game}) {

  const players = `${game.playersMin} - ${game.playersMax} Players`
  const extra = <Button >Show Reviews</Button>

  return (
    <Card 
    // onClick={}
    image={game.imgUrl}
    header={game.name}
    meta={players}
    description={game.description}
    extra={extra}
    />
  )
}

export default Game