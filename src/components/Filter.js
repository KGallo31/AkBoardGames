import React from 'react'
import { Button, Input } from 'semantic-ui-react'

function Filter({changeSearchBy,changeSearchByNumPlayer}) {
  return (
    <div class="ui huge icon input">
      <Input icon={'search'} onChange={changeSearchBy} type={'text'}/>
      <Button onClick={changeSearchByNumPlayer}>Sort By Minimum Number Of Players</Button>
    </div>
  )
}

export default Filter