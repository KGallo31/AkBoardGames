import React from 'react'
import Game from './Game'
import {Card} from 'semantic-ui-react'
import Filter from './Filter'
import styled from 'styled-components'

const Space = styled.p`
  margin-top:40px;
  margin-bottom:20px
`;

function GamesContainer({gameList,changeSearchBy,changeSearchByNumPlayer, changeFilteredReviews}) {

  return (
    <div class="ui center aligned container">
    <Filter changeSearchBy={changeSearchBy} changeSearchByNumPlayer={changeSearchByNumPlayer}/>
        <Space></Space>
        {/* <hr style={{size:"10", color:"black"}}/> */}
        <Space></Space>
        <Space></Space>
    <Card.Group itemsPerRow={5}>
      {gameList.map(game => <Game key={game.id} game={game} changeFilteredReviews={changeFilteredReviews}/>)}
    </Card.Group>
    </div>
  )
}

export default GamesContainer