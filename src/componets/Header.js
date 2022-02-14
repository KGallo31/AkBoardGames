import React from 'react'
import Filter from './Filter'

function Header({changeSearchBy,changeSearchByNumPlayer}) {
  return (
    <div>
        <h1>
            Header
        </h1>
        <Filter changeSearchBy={changeSearchBy} changeSearchByNumPlayer={changeSearchByNumPlayer}/>
    </div>
  )
}

export default Header