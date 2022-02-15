import React from 'react'

function Filter({changeSearchBy,changeSearchByNumPlayer}) {
  return (
    <div>
        <p>
            <input onChange={changeSearchBy} type={'text'}/>
            <button onClick={changeSearchByNumPlayer}>Sort By Minimum Number Of Players</button>
        </p>
    </div>
  )
}

export default Filter