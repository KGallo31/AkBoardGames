import React,{useState,useEffect} from "react";
import Header from "./Header";
import GamesContainer from "./GamesContainer";


function App() {

  const [searchByName,setSearchByName] = useState('')
  const [searchByNumPlayer,setSearchByNumPlayer] = useState(1)
  const [gameList,setGameList] = useState([])



  useEffect(() => {
    fetch('http://localhost:3000/games').then(r => r.json()).then(setGameList)
  },[])



  const changeSearchByNumPlayer = (e) => {
    setSearchByNumPlayer(e.target.value)
  }



  const changeSearchBy = (e) => [
    setSearchByName(e.target.value)
  ]



  return (
    <div>
      <Header changeSearchBy={changeSearchBy} changeSearchByNumPlayer={changeSearchByNumPlayer}/>
      <GamesContainer gameList={gameList} />

    </div>
  )
}

export default App;