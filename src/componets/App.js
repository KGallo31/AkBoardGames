import React,{useState,useEffect} from "react";
import Header from "./Header";
import GamesContainer from "./GamesContainer";
import CommentContainer from './CommentContainer'
import {Route,Switch} from 'react-router-dom'

function App() {

  const [searchByName,setSearchByName] = useState('')

  const [searchByNumPlayer,setSearchByNumPlayer] = useState(true)

  const [gameList,setGameList] = useState([])

  const [comments, setComments] = useState([])


    useEffect(() => {
    fetch('http://localhost:3000/games').then(r => r.json()).then(setGameList)
    fetch('http://localhost:3000/comments').then(r => r.json()).then(setComments)
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


  const addReview = (newReview) => {
    fetch('http://localhost:3000/comments',{
      method:'POST',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(newReview)
    })
    const newComment = [...comments,newReview]
    setComments(newComment)
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
          <GamesContainer  changeSearchBy={changeSearchBy} changeSearchByNumPlayer={changeSearchByNumPlayer} gameList={newArr} />
        </Route>
        <Route path='/reviews'>
          <CommentContainer comments={comments} addReview={addReview}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;