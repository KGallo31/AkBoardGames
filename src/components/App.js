import React,{useState,useEffect} from "react";
import Header from "./Header";
import GamesContainer from "./GamesContainer";
import ReviewContainer from './ReviewContainer'
import AddReview from './AddReview'
import {Route,Switch} from 'react-router-dom'
import AddGame from './AddGame'

function App() {

  const [searchByName,setSearchByName] = useState('')

  const [searchByNumPlayer,setSearchByNumPlayer] = useState(true)

  const [gameList,setGameList] = useState([])

  const [sortAlphabetical,setSortAlphabetical] = useState(true)

  const [reviews, setReviews] = useState([])

  const [selectedGame, setSelectedGame] = useState('')


    useEffect(() => {
    fetch('http://localhost:3000/games').then(r => r.json()).then(setGameList)
    fetch('http://localhost:3000/reviews').then(r => r.json()).then(setReviews)
  },[])


  const shownGames = [...gameList]



  const changeSortAlphabetical = () => {
    setSearchByNumPlayer(!searchByNumPlayer)
    if(searchByNumPlayer){
      console.log('hi')
      shownGames.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
      })
    }else{
      shownGames.sort((a,b) => {
        return a.id - b.id
      })
    }
    setGameList(shownGames)
  }


  const changeSearchByNumPlayer = () => {
    setSearchByNumPlayer(!searchByNumPlayer)
    if(searchByNumPlayer){
      shownGames.sort((a,b) => {
        return a.playersMin - b.playersMin
      })
    }else{
      shownGames.sort((a,b) => {
        return a.id - b.id
      })
    }
    setGameList(shownGames)
  }


  const changeFilteredReviews = (gameName) => {
    setSelectedGame(gameName)
  }

  const newReviewArray = reviews.filter((review) => {
    return review.game === selectedGame
  })


  const addReview = (newReview) => {
    fetch('http://localhost:3000/reviews',{
      method:'POST',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(newReview)
    })
    const newestReview = [...reviews, newReview]
    setReviews(newestReview)
  }

  const addNewGame = (newGame) => {
    fetch('http://localhost:3000/games',{
      method:'POST',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(newGame)
    })
    const newestGames = [...gameList, newGame]
    setGameList(newestGames)
  }


  const changeSearchBy = (e) => {
    setSearchByName(e.target.value)
  }



  const newArr = shownGames.filter(game => {
    return game.name.toLowerCase().includes(searchByName.toLowerCase())
  })



  return (
    <div class="bg">
      <div class="header">
        <Header  />
      </div>
      <Switch>
        <Route exact path='/'>
          <GamesContainer 
            changeSortAlphabetical={changeSortAlphabetical}  
            changeSearchBy={changeSearchBy} 
            changeSearchByNumPlayer={changeSearchByNumPlayer} 
            gameList={newArr} 
            changeFilteredReviews={changeFilteredReviews}
            addNewGame={addNewGame}
          />
        </Route>
        <Route path='/reviews'>
          <ReviewContainer reviews={newReviewArray} />
        </Route>
        <Route path='/add-review'>
          <AddReview addReview={addReview}/>
        </Route>
        <Route path='/add-game'>
          <AddGame addNewGame={addNewGame} />
        </Route>
      </Switch>
    </div>
  )
}

export default App;