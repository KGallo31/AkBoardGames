import React,{useState} from 'react'
import { Button, Input } from 'semantic-ui-react'

function Filter({changeSearchBy,changeSearchByNumPlayer,changeSortAlphabetical}) {


  const [toggle,setToggle] = useState(true)

  const [toggle2,setToggle2] = useState(true)

  const changeToggle = () => {
    console.log('hi')
    setToggle(!toggle)
  }

  const changeToggle2 = () => {
    console.log('hi')
    setToggle2(!toggle2)
  }
  

  return (
    <div class="ui huge icon input">
      <Input icon={'search'} onChange={changeSearchBy} type={'text'}/>
      <Button onClick={() => {changeSearchByNumPlayer()
      changeToggle()}}> {toggle ? 'Sort By Minimum Number Of Players': "SORTED BY PLAYER NUMBER"}</Button>
      <Button onClick={() => {changeSortAlphabetical()
      changeToggle2()}}> {toggle2 ? 'Sort By Alphabetical Order' :'SORTED ALPHABETICALLY' }</Button>
    </div>
  )
}

export default Filter