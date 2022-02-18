import React,{useState,useEffect} from "react";
import Header from "./Header";
import GamesContainer from "./GamesContainer";
import ReviewContainer from './ReviewContainer'
import AddReview from './AddReview'
import {Route,Switch} from 'react-router-dom'
import AddGame from './AddGame'

const reviewAPI = 'http://localhost:3000/reviews'
const gameAPI = 'http://localhost:3000/games'

function App() {

  const [searchByName,setSearchByName] = useState('')

  const [searchByNumPlayer,setSearchByNumPlayer] = useState(true)

  const [gameList,setGameList] = useState([])

  const [reviews, setReviews] = useState([])

  const [selectedGame, setSelectedGame] = useState('')

  const [reviewState, setReviewState] = useState(true)


  useEffect(() => {
    fetch(gameAPI).then(r => r.json()).then(setGameList)
    fetch(reviewAPI).then(r => r.json()).then(setReviews)
  },[])


  const shownGames = [...gameList]

  const changeReviewState = () => {
    setReviewState(false)
  }

  const changeSortAlphabetical = () => {
    setSearchByNumPlayer(!searchByNumPlayer)
    if(searchByNumPlayer){
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
    fetch(reviewAPI,{
      method:'POST',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(newReview)
    })
    const newestReview = [...reviews, newReview]
    setReviews(newestReview)
  }

  const addNewGame = (newGame) => {
    fetch(gameAPI,{
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

  const deleteReview = (deletedReview) => {
    const remainingReviews = reviews.filter(review => review.id !== deletedReview.id)
    setReviews(remainingReviews)
    fetch(`${reviewAPI}`,`/${deletedReview.id}`,{method:"DELETE"})
  }



  const newArr = shownGames.filter(game => {
    return game.name.toLowerCase().includes(searchByName.toLowerCase())
  })



  return (
    <div className="bg">
      <div className="header">
        <Header setReviewState={setReviewState}/>
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
            changeReviewState={changeReviewState}
          />
        </Route>
        <Route path='/reviews'>
          <ReviewContainer 
            deleteReview={deleteReview} 
            filteredReviews={newReviewArray} 
            allReviews={reviews}
            reviewState={reviewState}
          />
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