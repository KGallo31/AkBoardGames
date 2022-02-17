import React,{useState} from 'react'
import { Button, Input } from 'semantic-ui-react'

function Filter({changeSearchBy,changeSearchByNumPlayer,changeSortAlphabetical}) {


  const [toggle,setToggle] = useState(true)

  const [toggle2,setToggle2] = useState(true)

  const changeToggle = () => {
    setToggle(!toggle)
  }

  const changeToggle2 = () => {
    setToggle2(!toggle2)
  }
  

  return (
    <div className="ui huge icon input">
      <div className="border"><Input icon={'search'} onChange={changeSearchBy} type={'text'}/></div>
      <div className="border">
        <Button style={{border: '5px solid #C1BBDA', background:'white', color:'black'}}
          className={toggle ? '' : 'button-click'}
          onClick={() => {changeSearchByNumPlayer()
          changeToggle()}}> 
          {toggle ? 'Sort By Minimum Number Of Players': "SORTED BY PLAYER NUMBER"}
        </Button>
      </div>
      <div className="border">
        <Button style={{border: '5px solid #C1BBDA', background:'white', color:'black'}}
        className={toggle2 ? '' : 'button-click'}
          onClick={() => {changeSortAlphabetical()
          changeToggle2()}}> {toggle2 ? 'Sort By Alphabetical Order' :'SORTED ALPHABETICALLY' }
        </Button>
      </div>
    </div>
  )
}

export default Filter