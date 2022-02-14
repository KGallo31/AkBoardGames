import React from 'react'

function Filter({changeSearchBy,changeSearchByNumPlayer}) {
  return (
    <div>
        <p>
            <input onChange={changeSearchBy} type={'text'}/>
            <select onChange={changeSearchByNumPlayer}>
                <option>1-3 Player</option>
                <option>4 Players</option>
                <option>5+ Players</option>
            </select>
            {/* <select onChange={changeSearchByCat}>
                <option>This one</option>
                <option>This one</option>
                <option>This one</option>
                <option>This one</option>
            </select> */}
        </p>
    </div>
  )
}

export default Filter