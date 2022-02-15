import React,{useState,useEffect} from "react";
import Header from "./Header";
import GamesContainer from "./GamesContainer";


function App() {

  const [searchByName,setSearchByName] = useState('')
  
  const [searchByNumPlayer,setSearchByNumPlayer] = useState(true)

  const [gameList,setGameList] = useState([])



  useEffect(() => {
    fetch('http://localhost:3000/games').then(r => r.json()).then(setGameList)
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



  const changeSearchBy = (e) => {
    setSearchByName(e.target.value)
  }



  const newArr = shownGames.filter(game => {
    return game.name.toLowerCase().includes(searchByName.toLowerCase())
  })



  return (
    <div>
      <Header changeSearchBy={changeSearchBy} changeSearchByNumPlayer={changeSearchByNumPlayer}/>
      <GamesContainer gameList={newArr} />

    </div>
  )
}

export default App;