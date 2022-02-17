import React from 'react'
import Game from './Game'
import {Card, Button} from 'semantic-ui-react'
import Filter from './Filter'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Space = styled.p`
  margin-top:40px;
  margin-bottom:20px
`;

function GamesContainer({changeSortAlphabetical,gameList,changeSearchBy,changeSearchByNumPlayer, changeFilteredReviews, addNewGame}) {

  return (
    <div className="ui center aligned container">
      <Filter changeSearchBy={changeSearchBy} changeSearchByNumPlayer={changeSearchByNumPlayer} changeSortAlphabetical={changeSortAlphabetical}/>
        <Space></Space>
        <Space></Space>
        <Space></Space>
      <Card.Group itemsPerRow={5}>
        {gameList.map(game => <Game key={game.id} game={game} changeFilteredReviews={changeFilteredReviews}/>)}
      </Card.Group>
      <Space></Space>
      <Link to={`/add-game`}><Button style={{border: '5px solid #C1BBDA', background:'white', color:'black', fontSize: '30px'}}>ADD A GAME</Button></Link>
    </div>
  )
}

export default GamesContainer