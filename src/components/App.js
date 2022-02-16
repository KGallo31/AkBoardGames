import React,{useState,useEffect} from "react";
import Header from "./Header";
import GamesContainer from "./GamesContainer";
import ReviewContainer from './ReviewContainer'
import AddReview from './AddReview'
import {Route,Switch} from 'react-router-dom'

function App() {

  const [searchByName,setSearchByName] = useState('')

  const [searchByNumPlayer,setSearchByNumPlayer] = useState(true)

  const [gameList,setGameList] = useState([])

  const [reviews, setReviews] = useState([])

  const [selectedGame, setSelectedGame] = useState('')


    useEffect(() => {
    fetch('http://localhost:3000/games').then(r => r.json()).then(setGameList)
    fetch('http://localhost:3000/reviews').then(r => r.json()).then(setReviews)
  },[])


  const shownGames = [...gameList]

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




  const changeSearchBy = (e) => {
    setSearchByName(e.target.value)
  }



  const newArr = shownGames.filter(game => {
    return game.name.toLowerCase().includes(searchByName.toLowerCase())
  })



  return (
    <div>
      <Header  />
      <Switch>
        <Route exact path='/'>
          <GamesContainer  changeSearchBy={changeSearchBy} changeSearchByNumPlayer={changeSearchByNumPlayer} gameList={newArr} changeFilteredReviews={changeFilteredReviews}/>
        </Route>
        <Route path='/reviews'>
          <ReviewContainer reviews={newReviewArray} />
        </Route>
        <Route path='/add-review'>
          <AddReview addReview={addReview}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;