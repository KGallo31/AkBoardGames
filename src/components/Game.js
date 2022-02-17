import React from 'react'
import { Card, Button} from "semantic-ui-react";
import { Link } from 'react-router-dom';

function Game({game, changeFilteredReviews}) {

  const players = `${game.playersMin} - ${game.playersMax} Players`
  const extra = <Link to={`/reviews`}><Button onClick={() => changeFilteredReviews(game.name)}>Show Reviews</Button></Link>

  return (
    <Card style={{border: '5px solid #C1BBDA'}} 
    image={game.imgUrl}
    header={game.name}
    meta={players}
    description={game.description}
    extra={extra}
    />
  )
}

export default Game