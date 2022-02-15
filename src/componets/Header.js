import React from 'react'
import Filter from './Filter'

function Header({changeSearchBy,changeSearchByNumPlayer}) {
  return (
    <div>
        <h1>
          <img src='https://res.cloudinary.com/april-skrine/image/upload/v1644941070/aklogo.jpg'/>
        </h1>
        <Filter changeSearchBy={changeSearchBy} changeSearchByNumPlayer={changeSearchByNumPlayer}/>
        <hr/>
    </div>
  )
}

export default Header